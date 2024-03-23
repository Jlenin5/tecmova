import { useEffect, useState } from "react"
import '../styles/home.scss'
import { getProducts } from "../service/API"
import { Product } from "../interfaces/ProductInterface"
import { Link } from "react-router-dom"
import portada from '../images/portada.jpg'

const Home = () => {

  const [data,setData] = useState<Product[]>([])

  useEffect(() => {
    getProducts().then((r) => setData(r))
  }, [])

  const webHome = data.filter(r => r.prodWebHome===1)

  if(data.length===0) {
    return (
      <>
        <h1>No hay datos</h1>
      </>
    )
  }
  
  return (
    <main className='main-home'>
      <div className="front-page-home">
        <img src={portada} alt="" />
      </div>
      <section className='stn-products'>
        {
          webHome.map((r) => (
              <div className="ctn-card-product" key={r.prodId}>
                <div className="box-product">
                  <div className="ctn-img">
                    <img src={`https://sismova.tech/backsis/public/images/${r.prodImage}`} alt="" />
                  </div>
                  <div className="info-card-home">
                    <p className='card-product-description'>
                      <span>{r.prodName}</span>
                    </p>
                    <div className="button">
                      <Link to={`/${r.prodCode}`}>Ver más</Link>
                    </div>
                  </div>
                </div>
              </div>
            )
          )
        }
      </section>
      <section className='stn-delivery-return'>
        <div className="ctn-delivery">
          <i className="fa-solid fa-truck"></i>
          <h3>Entrega rápida y segura</h3>
          <p>
            En Tecmova nos preocupamos por entregar tus productos de forma rápida y segura. Nuestro equipo de logística se encarga de que tu pedido llegue a tiempo y en perfectas condiciones.
          </p>
        </div>
        <div className="ctn-return">
          <i className="fa-solid fa-rotate-left"></i>
          <h3>Devoluciones</h3>
          <p>
            En Tecmova nos preocupamos por tu satisfacción. Si no estás satisfecho con tu compra, puedes solicitar una devolución dentro de los 30 días posteriores a la entrega. Te garantizamos un proceso rápido y sin complicaciones.
          </p>
        </div>
      </section>
    </main>
  )
}

export default Home