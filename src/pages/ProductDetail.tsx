import '../styles/product_detail.scss'
import { useLocation } from "react-router-dom"
import { Product } from "../interfaces/ProductInterface"
import { useEffect, useState } from "react"
import { getCategories, getProducts } from "../service/API"
import { Category } from '../interfaces/CategoryInterface'

const ProductDetail = () => {

  const [dataProduct,setDataProduct] = useState<Product[]>([])
  const [dataCategory,setDataCategory] = useState<Category[]>([])

  const location = useLocation()
  const codigoProducto = location.pathname;
  const codigoSinBarra = codigoProducto.replace("/", "")
  
  const filteredProductByCode = dataProduct.filter(r => r.prodCode === codigoSinBarra)
  const product = filteredProductByCode[0]
  const filteredProductByCategory = product && dataCategory.filter((r) => r.cateId === product.CategoryId);
  const category = filteredProductByCategory ? filteredProductByCategory[0] : null

  useEffect(() => {
    getProducts().then(r => setDataProduct(r))
    getCategories().then(r => setDataCategory(r))
  }, [])

  return (
    filteredProductByCode[0] ?
    <section className='stn-card-product-detail'>
      <div className="card-product-detail">
        <div className="box-img">
          <img src={`https://sismova.tech/backsis/public/images/${product.prodImage}`} alt="" />
        </div>
        <div className="hr"></div>
        <div className="box-info">
          <h2>{product.prodName}</h2>
          <p>{product.prodDescription}</p>
          <div className="ctn-subinfo ctn-category">
            <h4>Categoría: </h4><span>{category ? category.cateName : ''}</span>
          </div>
          <div className="ctn-subinfo ctn-price">
            <h4>Precio: </h4><span>S/. {product.prodSalePrice}</span>
          </div>
          <div className="ctn-subinfo ctn-stock">
            <h4>Stock: </h4><span>{product.prodStock}</span>
          </div>
        </div>
      </div>
    </section>
    :
    <div>No se encontró el producto</div>
  )
}

export default ProductDetail