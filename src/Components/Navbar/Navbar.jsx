import React from 'react'
import {Link} from 'react-router-dom'
// import Logo from './Images/logo.png'

import navbar from '../Assets/navbar.png'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='go'>

  
<img src={navbar} className=" imge" alt=""  />


       
<nav className="navbar  navbar-expand-lg nave navbar-dark">
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse nave navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav nave">
              <li className="nav-item ">
                <a className="nav-link active hovorg" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav- item ">
                <a className="nav-link active hovorg" aria-current="page" href="#">About Us</a>
              </li>
                <li className="nav-item dropdown ">
                <a className="nav-link dropdown-toggle active hovorg" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Monal Restaurants
                </a>
                <ul className="dropdown-menu dropi">
                  <li><a className="dropdown-item dropi"><Link to='/Homemain' className='text-white'> Monal Islamabad</Link> </a></li>
                  <li class="nav-item">
               {/* <a class="nav-link text-white dropbtn px-3" href="https://lahore.themonal.com/"></a> */}
               <li><a className="dropdown-item dropi"><Link to='/Homemain' className='text-white'> Monal Lahore</Link> </a></li>

        </li>

        <li class="nav-item">
               {/* <a class="nav-link text-white dropbtn px-3" href="        http://downtown.themonal.com/">Monal Rawalpindi</a> */}
               <li><a className="dropdown-item dropi"><Link to='/Homemain' className='text-white'>Monal Rawalpindi</Link> </a></li>

        </li>

        <li class="nav-item">
               <a class="nav-link text-white dropbtn px-3" href="        http://treehouse.themonal.com/
">Monal Tree House</a>
        </li>
                  {/* <li><a className="dropdown-item dropi" href="#"></a></li> */}
                  <li><a className="dropdown-item dropi" href="#"></a></li>
                </ul>
                </li>
                <li className='nav-item dropdown'>

                <a className="nav-link dropdown-toggle active hovorg" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Asian Wok
                </a>
                <ul className="dropdown-menu dropi">
                  {/* <li><a className="dropdown-item dropi" href="#"></a></li> */}
                  <li class="nav-item">
               <a class="nav-link text-white dropbtn px-3" href=" https://asianwok.themonal.com/
">Asian wok Beverly Center</a>
        </li>
                  {/* <li><a className="dropdown-item dropi" href="#"></a></li> */}
                  <li class="nav-item">
               <a class="nav-link text-white dropbtn px-3" href=" https://asianwokbt.themonal.com/
">Asian work Bahria Town</a>
        </li>
                </ul>

                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle active hovorg" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Monal Caterers & Event Managers
                </a>
                <ul className="dropdown-menu dropi">
                  {/* <li><a className="dropdown-item dropi" href="#"></a></li> */}
                  <li class="nav-item">
               <a class="nav-link text-white dropbtn px-3" href="   https://themonal.com/
">Monal Marque</a>
        </li>
                </ul></li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle active hovorg" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Amusement
                </a>
                <ul className="dropdown-menu dropi">
                <li class="nav-item">
               <a class="nav-link text-white dropbtn px-3" href="    https://m1traxx.themonal.com/
">M-1  Traxx</a>
        </li>
                  <li><a className="dropdown-item dropi" href="#"></a></li>
               
                  {/* <li><a className="dropdown-item dropi" href="#">Dino  Valley</a></li> */}
                </ul>
                </li>
            
            </ul>
          </div>
        </div>
      </nav>
          </div>
  )
}

export default Navbar
