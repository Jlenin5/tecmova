import '../styles/product_detail.scss'
import { useLocation } from "react-router-dom"
import { Product } from "../interfaces/ProductInterface"
import { useEffect, useState } from "react"
import DOMPurify from 'dompurify'
import { getProduct } from '../store/productSlice'
import { useDispatch } from 'react-redux'

const ProductDetail = () => {
  const dispatch = useDispatch()
  const [data,setData] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  // const [data, setData] = useState([])
  const [imgSelected, setImgSelected] = useState('')

  const location = useLocation()
  const codigoProducto = location.pathname;
  const codigoSinBarra = codigoProducto.replace("/catalogo/producto/", "")


  const changeImageSelected = (image:string) => {
    setImgSelected(image)
  }
  
  useEffect(() => {
    dispatch(getProduct(codigoSinBarra)).then((response:any) => {
      setLoading(false)
      setData(response.payload)
    })
  }, [dispatch])

  if(loading) {
    return (
      <div>
        Cargando
      </div>
    )
  }

  if(!data) {
    return (
      <div>
        No hay datos
      </div>
    )
  }

  return (
    <section className='stn-card-product-detail'>
      <div className="card-product-detail">
        <div className="box-img">
          <div className="image-selected">
            {data.product_images.find((image) => image.featured === data.featuredImageId) && (
              <img
                src={`https://sismova.tech/backsis/public/images/products/${
                  imgSelected ? imgSelected
                  : data.product_images.find((image) => image.featured === data.featuredImageId)?.primPath
                }`}
                alt={data.prodName}
              />
            )}
          </div>
          <div className="list-images">
            {
              data.product_images.map(r => {
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
          <h2>{data.prodName}</h2>
          <div className="ctn-subinfo ctn-description">
            <h3>Descripción:</h3>
            <p className="description" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data.prodDescription) }} />
          </div>
          <div className="ctn-subinfo ctn-category">
            <h4>Categoría: </h4>
            {data?.categories.map(r => (
              <span key={r.id}>{r.cateName}</span>
            ))}
          </div>
          <div className="ctn-subinfo ctn-price">
            <h4>Precio: </h4><span>S/. {data.prodSalePrice}</span>
          </div>
          <div className="ctn-subinfo ctn-stock">
            <h4>Stock: </h4><span>{data.prodStock}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetail