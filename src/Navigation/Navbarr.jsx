import './Navbarr.css'

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
function Navbarr() {
  
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} classNameName="mb-3 " fixed="top">
          <Container fluid className='Navbar1'>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Brand href="#"><img src="https://baroque.pk/cdn/shop/files/LOGO_PNG_V01_2.png?v=1694417343&width=280" alt=""  className='img-logo'/></Navbar.Brand>
            <Navbar.Brand >
             <Link to='/login'><i className="bi bi-person"></i></Link>
              <a href='#'><i className="bi bi-search"></i></a>
              <a href="#"><i className="bi bi-bag"></i></a>
            </Navbar.Brand>
            
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  BAROQUE
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item">
                    <a className="nav-link" href="#">CHANTELLE</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">UNSTITCHED</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">READY TO WEAR</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">SPECIAL PRICES</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">BOTTOMS</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">DUPATTAS</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">SHAWLS</a>
                  </li>
                </ul>
                <div className="social-icons">
                  <a href="#" className="uper"><i className="bi bi-facebook"></i></a>
                  <a href="#" className="uper"><i className="bi bi-instagram"></i></a>
                  <a href="#" className="uper"><i className="bi bi-tiktok"></i></a>
                  <a href="#" className="uper"><i className="bi bi-snapchat"></i></a>
                  <a href="#" className="uper"><i className="bi bi-whatsapp"></i></a>
                  <a href="#" className="uper"><i className="bi bi-youtube"></i></a>
                </div>
              </Offcanvas.Body>
              
            </Navbar.Offcanvas>
            
          </Container>
          
        </Navbar>
        
      ))}
    </>
  )
}

export default Navbarr
