import ecommerce from '../images/ecommerce.jpg'
import '../styles/products.scss'
import { Category } from '../interfaces/CategoryInterface'
import { useEffect, useState } from 'react'
import { getCategories, getProducts } from '../service/API'
import { Product } from '../interfaces/ProductInterface'
import { Link } from 'react-router-dom'

const Products = () => {

  const [dataCategory,setDataCategory] = useState<Category[]>([])
  const [selectedCategory, setSelectedCategory] = useState<number>(0)
  const [dataProduct,setDataProduct] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])

  const clickedCategory = (category: number) => {
    if(category===0) {
      setFilteredProducts(dataProduct)
      setSelectedCategory(0)
    } else {
      const filteredProductByCategory = dataProduct.filter((r) => r.CategoryId === category);
      setFilteredProducts(filteredProductByCategory)
      setSelectedCategory(category)
    }
  }

  useEffect(() => {
    getCategories().then(r => setDataCategory(r))
    getProducts().then((r) => {
      setDataProduct(r)
      setFilteredProducts(r)
    })
  }, [])

  return (
    <main className='main-products'>
      <div className="front-page-products">
        <img src={ecommerce} alt="portada" />
      </div>
      <section className='stn-products'>
        <h2>Productos</h2>
        <div className="hr"></div>
        <div className="ctn-category-products">
          <ul className="categories">
            <li onClick={() => clickedCategory(0)} className={selectedCategory === 0 ? 'categorySelected' : 'categoryNoSelected'}>Todos</li>
            {dataCategory.map(r => (
              <li key={r.cateId} onClick={() => clickedCategory(r.cateId)} className={selectedCategory === r.cateId ? 'categorySelected' : 'categoryNoSelected'}>{r.cateName}</li>
            ))}
          </ul>
          <ul className="products">
            {filteredProducts.map((r) => (
              <li key={r.prodId}>
                <div className="box-img">
                  <img src={`https://sismova.tech/backsis/public/images/${r.prodImage}`} alt="" />
                </div>
                <div className="info-prod">
                  <div className="card-product-description">
                    <span>{r.prodName}</span>
                  </div>
                  <div className="button">
                    <Link to={`/${r.prodCode}`}>Ver más</Link>
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