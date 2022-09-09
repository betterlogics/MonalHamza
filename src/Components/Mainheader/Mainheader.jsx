import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../Assets/monal.png'
import { Link } from 'react-router-dom';
import '../Header/Header.css'
function Mainheader() {
  return (
    <div>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"  className='bb'>
      <div className='row m-0 p-0 align-items-center justify-content-between justify-content-lg-end'>
        <img src={logo} alt=""  className="col-4  col-md-3 col-lg-2 p-0"/>
      <div className="col-md-9 col-2 p-0  d-flex d-lg-none justify-content-end"> <Navbar.Toggle   aria-controls="responsive-navbar-nav" />
      </div>
        <Navbar.Collapse  className="col-lg-5 p-0"id="responsive-navbar-nav">
           <Nav className="me-auto">
          <Nav.Link class=" text-white px-3 "  aria-current="page">
            
            <div className="fg">
            
            <Link to='/Mainpage' className='text-white'> MAIN</Link>

            </div>
         </Nav.Link>
         <Nav.Link  class="navitem px-3 text-white">
           <p className='fg'> <Link to='/Homemain' className='text-white'>HOME </Link> </p>
         </Nav.Link>
         <Nav.Link >
             
             <div className="fg"> <Link to='/Aboutmain' className='text-white'>ABOUT US </Link> </div>
         </Nav.Link>
         <Nav.Link  class="text-white">
           
           <div className="fg"><Link to='/Feedbackmain' className='text-white'>FEEDBACK</Link></div>
         </Nav.Link>
         <div className="navitem ps-0 dropdown pt-2">
                    <a
                        className="Navlink mx-3"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"aria-haspopup="true"aria-expanded="false">
                   
                        MENU 

                    </a>
                    <ul class="dropdown-menu px-3" aria-labelledby="dropdownMenuButton">
                        <li class="dropdown-item  py-0 mb-2 m-0 " href="#">
                           
                           
                            <Link to='/Menualamain'className='text-dark' >  Ala Carte </Link>
                        </li>
                        <hr className="hrline mx-3 m-0 py-0" />
                        <li class="dropdown-item py-0 my-2 m-0" href="#">
                            
                            <Link to='/Menubuffetmain'className='text-dark' > BUFFET</Link>
                        </li>
                    </ul>
                </div>
                <div className="navitem ps-0 dropdown pt-2">
                    <a
                        className="Navlink mx-3"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                    GALLERY
                    </a>
                    <ul class="dropdown-menu px-3" aria-labelledby="dropdownMenuButton">
                        <li class="dropdown-item  py-0 mb-2 m-0 ">
                             <Link to='/Momentsmain' className=' btoo text-dark' > MOMENTS </Link>
                        </li>
                        <hr className="hrline mx-3 m-0 py-0" />
                        <li class="dropdown-item py-0 my-2 m-0">
                  
                            <Link to='/Servingmain' className='btoo text-dark' > SERVING </Link>
                        </li>
                    </ul>
                </div>

                <Nav.Link  class="navitem px-3 text-white">
           
           <div className="fg"> <Link to='/Reservemain' className='text-white'>RESVERSATION</Link></div>
         </Nav.Link>

         <Nav.Link  class="navitem px-3 text-white">
            
           <p className="fg"> <Link to='/Careersmain'className='text-white'> CAREERS </Link> </p>
         </Nav.Link>
         <Nav.Link  class="navitem px-3 text-white">
           <p className='fg'><Link to='/Contactmain' className='text-white'>CONTACTS</Link>  </p>
         </Nav.Link>
         <li class="nav-item">
               <a class="nav-link text-white dropbtn px-3" href="https://www.surveymonkey.com/r/MonalMysteryShoppers">MYSTERY SHOPPERS</a>
        </li>
       

                   </Nav>
                     
        </Navbar.Collapse>
        </div>
    </Navbar>
     </div>
  )
}

export default Mainheader