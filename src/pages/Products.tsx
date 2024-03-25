import ecommerce from '../images/ecommerce.jpg'
import '../styles/products.scss'
import { Category } from '../interfaces/CategoryInterface'
import { useEffect, useState } from 'react'
import { Product } from '../interfaces/ProductInterface'
import { Link } from 'react-router-dom'
import { getProducts } from '../store/productSlice'
import { useAppDispatch, useAppSelector } from '../hooks/store'
import { getCategories } from '../store/categoriesSlice'
import LoadProducts from './loading/LoadProducts'

const Products = () => {
  const dispatch = useAppDispatch()
  const products = useAppSelector((state:any) => state.products)
  const [dCategory,setDCategory] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [loadPage, setLoadPage] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<number>(0)
  const [checkedCategory, setCheckedCategory] = useState<Set<number>>(new Set())
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])

  useEffect(() => {
    dispatch(getProducts(null)).then((response) => {
      setFilteredProducts(response.payload)
      setLoading(false)
    })
    dispatch(getCategories(null)).then((response) => setDCategory(response.payload))
    const timer = setTimeout(() => {
      setLoadPage(true)
    }, 1000)
    return () => clearTimeout(timer)
  }, [dispatch])

  const clickedCategory = (category: number) => {
    if(category===0) {
      setFilteredProducts(products)
      setSelectedCategory(0)
    } else {
      const filteredProductByCategory = products.filter((product: Product) =>
        product.categories.some((cat) => cat.id === category)
      )
      setFilteredProducts(filteredProductByCategory)
      setSelectedCategory(category)
    }
  }

  const checkedFilterCategory = (categories: number) => {
    if(!categories) {
      setCheckedCategory(new Set())
      setFilteredProducts(products)
    } else {
      const updatedCategories = new Set(checkedCategory)
      if (updatedCategories.has(categories)) {
        updatedCategories.delete(categories)
      } else {
        updatedCategories.add(categories)
      }
      setCheckedCategory(updatedCategories)
      let filteredProductByCategory = products
      if (updatedCategories.size > 0) {
        filteredProductByCategory = products.filter((product: Product) =>
          product.categories.some((cat) => updatedCategories.has(cat.id))
        )
      }
      setFilteredProducts(filteredProductByCategory)
    }
  }

  if(products.length === 0) {
    return (
      <h1>No hay datos</h1>
    )
  }

  return (
    <main className='main-products'>
      <div className="front-page-products">
        <img src={ecommerce} alt="portada" />
      </div>
      <section className='stn-products'>
        <h2>Productos</h2>
        <div className="hr"></div>
        {
          loading ? 
            <LoadProducts />
          : 
          <div className={`ctn-category-products ${loadPage ? 'loaded': ''}`}>
            <ul className="categories">
              <li onClick={() => clickedCategory(0)} className={selectedCategory === 0 ? 'categorySelected' : 'categoryNoSelected'}>Todos</li>
              {dCategory.map(r => (
                <li key={r.id} onClick={() => clickedCategory(r.id)} className={selectedCategory === r.id ? 'categorySelected' : 'categoryNoSelected'}>{r.cateName}</li>
              ))}
            </ul>
            <div className="ctn-filter-products">
              <ul className="filters">
                <span>Filtros</span>
                <div className="hr"></div>
                {
                  dCategory.map(r => (
                    <li key={r.id} onClick={() => checkedFilterCategory(r.id)}>
                      <div className={`box-check ${checkedCategory.has(r.id) ? 'selected' : ''}`}>
                        <i className="fa-solid fa-check"></i>
                      </div>
                      <div className="name">
                        {r.cateName}
                      </div>
                    </li>
                  ))
                }
              </ul>
              <ul className="products">
                {filteredProducts.map((r) => (
                  <li key={r.id}>
                    <div className="box-img">
                    {r.product_images.find((image) => image.featured === r.featuredImageId) && (
                      <img
                        src={`https://sismova.tech/backsis/public/images/products/${
                          r.product_images.find((image) => image.featured === r.featuredImageId)?.primPath
                        }`}
                        alt={r.prodName}
                      />
                    )}
                    </div>
                    <div className="info-prod">
                      <div className="card-product-description">
                        <span>{r.prodName}</span>
                      </div>
                      <div className="button">
                        <Link to={`/catalogo/producto/${r.prodNumber}`}>Ver más</Link>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        }
      </section>
    </main>
  )
}

export default Products