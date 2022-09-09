import React from 'react'
import './Services.css'


import two from "../Assets/two.png"
import four from "../Assets/four.png"
import one from "../Assets/one.png"
import three from "../Assets/three.png"
function Services() {
  return (
    <div className='bg text-color pt-5'>
          <strong>

<h2 className='mt-5'>SERVICES WE OFFER</h2>
</strong>
      <div class="container mt-5">
  <div class="row">
    <div class="col">
   
      <div className="card h-50">
<img src={one}  alt="Never"  className='jo'/>

      <div className="mt-5">
        <h5 className="text-color">A L A</h5>
        <h5 className="card-title">C A R T E</h5>
        
        <p className=" text-white">
							Our Ala Carte menu is intended to offer our customers
                             a wide range of Appetizing Cuisines to choose from. We prepare each 
                            item on our menu with affection and the promise to offer our customers
                             a delightful experience.</p>
      </div>
    </div>
    </div>
    <div class="col">
 
      <div className="card h-50">
<img src={two}  alt="Never"  className='jo'/>

      <div className="mt-5">
        <h5 className="card-title">O U R </h5>
        <h5 className="card-title"> B U F F E T S </h5>
        
        <p className="text-white">
        We offer Lunch cum Hi-Tea, Dinner and Sunday Brunch buffets at Monal
         Restaurants. Our Buffet menu will satisfy your cravings with an
          extensive menu of dishes ranging from Pakistani 
        to Continental with both indoor & outdoor seating.</p>
      </div>
    </div>
    </div>
    <div class="col">
      
      <div className="card h-50">
<img src={three}  alt="Never"  className='jo'/>

      <div className="mt-5">
        <h5 className="card-title">P E R F   E C T  </h5>
        <h5 className="card-title"> P A R T Y H O S T  </h5>
        
        <p className="text-white">
        We offer Lunch cum Hi-Tea, Dinner and Sunday Brunch buffets at Monal
         Restaurants. Our Buffet menu will satisfy your cravings with an
          extensive menu of dishes ranging from Pakistani 
        to Continental with both indoor & outdoor seating.</p>
      </div>
    </div>
    </div>
 
    <div class="col">
      
        <div className="card h-50">
<img src={four}  alt="Never"  className='jo'/>

      <div className="mt-5">
        <h5 className="card-title">A M U S E M E N T</h5>
        <h5 className="card-title"> P A R K S</h5>
        
        <p className="text-white">
        The Monal Group offers a complete entertainment package for the people of the Twin Cities.
The M1 traxx offers the
best rides, food and activities
for the little ones, all
in one place.</p>
      </div>
    </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Services
