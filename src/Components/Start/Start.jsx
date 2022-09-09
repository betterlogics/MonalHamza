import React from 'react'
import './Start.css'
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { FaConciergeBell } from "react-icons/fa";



function Start() {
  return (
    <div className='bg-col'>

    <div className="row">
<div className="col mt-5">
        <h5>
          {" "}
          <BsStarFill className="star" /> 

          {" "}
          <BsStarFill className="star" /> 
          {" "}
          <BsStarFill className="star" /> 
          {" "}
          <BsStarFill className="star" /> 
          
          {" "}
          <BsStarHalf className="star" /> 
{/* 
            {" "}
            <FaConciergeBell className="star" />           */}
        </h5>          
        <h3 className='letter pt-2'>GOOGLE RATINGS</h3>
</div>
        <div className='bor'>

                                    {/* <hr className="hr"/> */}

<h6 className='text-white lett py-5'>It flaunts an outstanding rating of 4.5 stars on Google Reviews, making it the first choice for fine-dining for locals and tourists. </h6>

        </div>
         
           
</div>
   
    </div>
    
    
    
  )
}

export default Start