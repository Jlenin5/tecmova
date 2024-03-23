import '../styles/footer.scss'
import logo from '../images/logo.png'
import whatsapp from '../images/whatsapp.png'
import facebook from '../images/facebook.png'
import instagram from '../images/instagram.webp'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <div className="ctn-footer">
        <div className="hr"></div>
        <div className="body-footer">
          <ul className='ul-footer'>
            <li className='li-foot-left'>
              <img src={logo} alt="" />
              <h2>TECMOVA</h2>
            </li>
            <li className='li-foot-mid'>
              <h3>Servicio al cliente</h3>
              <ul className='ctn-list-tcmv'>
                <li>
                  <h4>Horario de atención:</h4>
                  <h5>Lunes a sábado de 8am - 9pm</h5>
                </li>
                <li className='email-send'>
                  <h4>ayllu625@gmail.com</h4>
                </li>
                <li className='privacy-policies'>
                  <h4>Políticas de cambios y devoluciones</h4>
                </li>
                <li>
                  <h4></h4>
                </li>
              </ul>
            </li>
            <li className='li-foot-right'>
              <h3>Síguenos en</h3>
              <ul className='ctn-social-networks'>
                <li>
                  <Link to='https://www.facebook.com/profile.php?id=100064210114810&mibextid=ZbWKwL' target='_blank'>
                    <img src={facebook} alt="facebook" />
                    <h4>Facebook</h4>
                  </Link>
                </li>
                <li>
                  <Link to='https://www.instagram.com/mundo_flopp?igsh=MTQ4aWFwazByZ2wxZA==' target='_blank'>
                    <img src={instagram} alt="instagram" />
                    <h4>Instagram</h4>
                  </Link>
                </li>
                <li>
                  <Link to='https://wa.me/959791772' target='_blank'>
                    <img src={whatsapp} alt="whatsapp" />
                    <h4>Whatsapp</h4>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="ctn-copyright">
          <h6>© Tecmova 2023 </h6>
        </div>
      </div>
    </footer>
  )
}

export default Footer