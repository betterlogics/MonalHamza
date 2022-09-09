import React from 'react'
import './Menuala.css'
import parit from '../Assets/Parit.jpg'
import menu from '../Assets/menu.jpg'
import menu1 from '../Assets/menu1.jpg'
import menu2 from '../Assets/menu2.jpg'
import menu3 from '../Assets/menu3.jpg'
import menu4 from '../Assets/menu4.jpg'
import menu5 from '../Assets/menu5.jpg'
import lastMenu from '../Assets/lastMenu.jpg'







function Menuala() {
  return (
    
    <div className='container-fluid pic '>

     <div className='row justify-content-around'>
    <h1 className='pt-5  fw-bold heading '> ALA CARTE </h1>

    <div className=" col-8 ">

     <img src={parit} className="w-100 " alt=""/>


     

<img src={menu} className=" w-100 " alt=""  />

<img src={menu1} className="w-100 " alt=""  />

<img src={menu2} className=" w-100" alt=""  />
<img src={menu3} className="w-100 " alt=""  />

<img src={menu4} className="w-100 " alt=""  />

<img src={menu5} className="w-100 " alt=""  />
<img src={lastMenu} className=" w-100" alt=""  />

    </div>
         </div>


      
    </div>
  )
}

export default Menuala




