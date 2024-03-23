import '../styles/aside.scss'
import { Link } from "react-router-dom"
import whatsapp from '../images/whatsapp.png'

const SideBar = () => {
  return (
    <aside>
        <Link to='https://wa.me/959791772' target='_blank'>
            <img src={whatsapp} alt="whatsapp" />
        </Link>
    </aside>
  )
}

export default SideBar