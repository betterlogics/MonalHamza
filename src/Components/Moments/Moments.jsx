import React from 'react'
import './Moments.css'






function Moments({tittle,imgone, imgtwo,imgtree ,imgfour, imgfive , imgsix}) {
  return (
    <div className='bg'>
    <div class="container ">
       <h1 className='coll py-5'>{tittle}</h1>
  <div class="row imgr">

    <div class="col pb-3">
      <img src={imgone} className='picsize' alt="" />
    </div>

    <div class="col pb-3">
       <img src={imgtwo} className='picsize' alt="" />
    </div>

      <div class="col">
        <img src={imgtree} className='picsize' alt="" />
      </div>
  </div>
  <div class="row imgr">

<div class="col pt-4">
  <img src={imgfour} className='picsize' alt="" />
</div>

<div class="col pt-4">
   <img src={imgfive} className='picsize' alt="" />
</div>



  <div class="col pt-4">
    <img src={imgsix} className='picsize' alt="" />
  </div>
</div>
</div>

</div>
  )
}

export default Moments