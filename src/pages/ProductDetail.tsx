import '../styles/product_detail.scss'
import { useLocation } from "react-router-dom"
import { Product } from "../interfaces/ProductInterface"
import { useEffect, useState } from "react"
import { getCategories, getProducts } from "../service/cate"
import { Category } from '../interfaces/CategoryInterface'
import DOMPurify from 'dompurify'

const ProductDetail = () => {

  const [dataProduct,setDataProduct] = useState<Product[]>([])
  const [dataCategory,setDataCategory] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [imgSelected, setImgSelected] = useState('')

  const location = useLocation()
  const codigoProducto = location.pathname;
  const codigoSinBarra = codigoProducto.replace("/", "")


  const changeImageSelected = (image:string) => {
    setImgSelected(image)
  }
  
  const filteredProductByCode = dataProduct.filter(r => r.featuredImageId === codigoSinBarra)
  const product = filteredProductByCode[0]
  // const filteredProductByCategory = product && dataCategory.filter((r) => r.cateId === product.CategoryId);
  // const category = filteredProductByCategory ? filteredProductByCategory[0] : null

  useEffect(() => {
    getProducts().then(r => setDataProduct(r))
    getCategories().then(r => setDataCategory(r))
  }, [])

  return (
    filteredProductByCode[0] ?
    <section className='stn-card-product-detail'>
      <div className="card-product-detail">
        <div className="box-img">
          <div className="image-selected">
            {product.product_images.find((image) => image.featured === product.featuredImageId) && (
              <img
                src={`https://sismova.tech/backsis/public/images/products/${
                  imgSelected ? imgSelected
                  : product.product_images.find((image) => image.featured === product.featuredImageId)?.primPath
                }`}
                alt={product.prodName}
              />
            )}
          </div>
          <div className="list-images">
            {
              product.product_images.map(r => {
                return (
                  <div className='ctn-list' key={r.id} onClick={() => changeImageSelected(r.primPath)}>
                    <img src={`https://sismova.tech/backsis/public/images/products/${r.primPath}`} alt="" />
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="box-info">
          <h2>{product.prodName}</h2>
          <div className="ctn-subinfo ctn-description">
            <h3>Descripción:</h3>
            <p className="description" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(product.prodDescription) }} />
          </div>
          <div className="ctn-subinfo ctn-category">
            {/* <h4>Categoría: </h4><span>{category ? category.cateName : ''}</span> */}
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