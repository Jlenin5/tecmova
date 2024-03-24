  import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Products from './pages/Products'
import About from './pages/About'
import Error404 from './pages/Error404'
import ProductDetail from './pages/ProductDetail'
import Contact from './pages/Contact'
import SideBar from './components/SideBar'

function Routess() {
  return (
    <Router>
      <Navbar />
      <SideBar />
      <Routes>
        <Route path="*" element={<Error404 />} />
        <Route path="/" element={<Home />} />
        <Route path="/contactanos" element={<Contact />} />
        <Route path="nosotros" element={<About />} />
        <Route path="productos" element={<Products />} />
        <Route path="catalogo/producto/:prodNumber" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default Routess