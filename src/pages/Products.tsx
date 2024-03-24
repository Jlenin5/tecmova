import ecommerce from '../images/ecommerce.jpg'
import '../styles/products.scss'
import { Category } from '../interfaces/CategoryInterface'
import { useEffect, useState } from 'react'
// import { getCategories, getProducts } from '../service/API'
import { Product } from '../interfaces/ProductInterface'
import { Link } from 'react-router-dom'
import { getProducts } from '../store/productSlice'
import { useAppDispatch, useAppSelector } from '../hooks/store'

const Products = () => {
  const dispatch = useAppDispatch()
  const products = useAppSelector((state:any) => state.products)

  const [dataCategory,setDataCategory] = useState<Category[]>([])
  const [data, setData] = useState(products)
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState<number>(0)
  const [dataProduct,setDataProduct] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])

  useEffect(() => {
    dispatch(getProducts(null)).then((response) => {
      setDataProduct(response.payload)
      setFilteredProducts(response.payload)
      setLoading(false)
    })
  }, [dispatch])

  // const clickedCategory = (category: number) => {
  //   if(category===0) {
  //     setFilteredProducts(dataProduct)
  //     setSelectedCategory(0)
  //   } else {
  //     const filteredProductByCategory = dataProduct.filter((r) => r.CategoryId === category);
  //     setFilteredProducts(filteredProductByCategory)
  //     setSelectedCategory(category)
  //   }
  // }

  useEffect(() => {
    // getCategories().then(r => setDataCategory(r))
    // getProducts().then((r) => {
    //   setDataProduct(r)
    //   setFilteredProducts(r)
    // })
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        Cargando...
      </div>
    )
  }

  if(data.length === 0) {
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
        <div className="ctn-category-products">
          {/* <ul className="categories">
            <li onClick={() => clickedCategory(0)} className={selectedCategory === 0 ? 'categorySelected' : 'categoryNoSelected'}>Todos</li>
            {dataCategory.map(r => (
              <li key={r.id} onClick={() => clickedCategory(r.id)} className={selectedCategory === r.id ? 'categorySelected' : 'categoryNoSelected'}>{r.cateName}</li>
            ))}
          </ul> */}
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
                    <Link to={`/${r.featuredImageId}`}>Ver más</Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}

export default Products