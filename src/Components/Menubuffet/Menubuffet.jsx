import React from 'react'
import buffet from '../Assets/buffet.jpg'


function Menubuffet() {
  return (
    <div className='container-fluid pic'>
      <div className="row justify-content-around">
      <h1 className='my-5 bold heading  '> BUFFET </h1> 
<div className="col-lg-8 col-sm-10">
<img src={buffet} className="w-100 " alt=""  />

</div>


      </div>


    
      
    </div>
  )
}

export default Menubuffet

