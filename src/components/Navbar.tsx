import '../styles/navbar.scss'
import logo from '../images/logo.png'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  
  const clickShowOcult = () => {
    const keyId = document.getElementById('nav-show-hide-links')
    const containClass = keyId?.className.includes('class-nav-show-hide')
    // console.log(clase)
    if(!containClass) {
      keyId?.classList.add('class-nav-show-hide')
    } else {
      keyId?.classList.remove('class-nav-show-hide')
    }
  }

  return (
    <nav>
      <div className="ctn-navbar">
        <div className="list-web">
          <div className='ctn-logo-nav'>
              <NavLink to='/'>
                <img src={logo} alt="logo" />
              </NavLink>
          </div>
          {/* <li className='ctn-search-nav'>
              <div className="search-nav">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type="text" />
              </div>
          </li> */}
          <div className='ctn-list-link-nav class-nav-show-hide' id='nav-show-hide-links'>
            <ul className='ul-list-link-nav'>
              <NavLink
                to='/'
                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                onClick={clickShowOcult}
              >
                <li>
                  Inicio
                </li>
              </NavLink>
              <NavLink
                to='/productos'
                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                onClick={clickShowOcult}
                >
                <li>
                  Productos
                </li>
              </NavLink>
              {/* <li className='li-nav-cate'>
                <NavLink
                  to='/productos'
                  className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                  >
                    Categorías
                    <i className="fa-solid fa-chevron-down"></i>
                  </NavLink>
                  <ul className='ul-list-categories'>
                    {
                      data.map((r) => (
                        <Link to={`/${r.cateName}`} key={r.cateId}>
                          <li>{r.cateName}</li>
                        </Link>
                      ))
                    }
                  </ul>
              </li> */}
              {/* <li>
                <NavLink
                  to='/nosotros'
                  className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                  >Nosotros</NavLink>
              </li> */}
              <NavLink
                to='/contactanos'
                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                onClick={clickShowOcult}
                >
                <li>
                  Contáctanos
                </li>
              </NavLink>
            </ul>
          </div>
        </div>
        <div className='ctn-bar' onClick={clickShowOcult}>
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
    </nav>
  )
}

export default Navbar