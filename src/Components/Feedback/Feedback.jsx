import React from 'react'
import './Feedback.css'

function Feedback() {
  return (
    <div className='gg'>
        <h1 className='my-5 bold heading  py-5 mt-0'>FEEDBACK</h1>

        <form>
        
  <div className='d-flex justify-content-center'>

  <div className="m-0 d-flex w-50  justify-content-start flex-column  mb-5">
   

    <div className=" m-0 d-flex justify-content-start lead text-white  flex-column align-items-start mb-5">
    <label for="exampleInputPassword1" class="mb-1 text">Your name</label>
    <input type="Text" class="box py-2 gg text-white" />
  </div>
  <div className="m-0 d-flex justify-content-start lead text-white flex-column align-items-start mb-5">
    <label for="exampleInputPassword1" class="mb-1 text">Your email</label>
    <input type="Text" class="box py-2 gg text-white" />
  </div>

  
  <div className="m-0 d-flex justify-content-start lead text-white flex-column align-items-start mb-5">
    <label for="exampleInputPassword1" class="mb-1 text">Subject</label>
    <input type="Text" class="box py-2 gg text-white" />
  </div>
  {/* <div className="m-0 d-flex justify-content-start text-white flex-column align-items-start mb-5">
    <label for="exampleInputPassword1" class="mb-1 text">Your massage</label>
    <input type="Text" class="box py-2 gg" />
  </div> */}


  <div className="m-0 d-flex justify-content-start lead text-white flex-column align-items-start mb-5">
    <label for="exampleInputPassword1" class="mb-1 text">Your message</label>
    {/* <input type="text-area" class="boxx " /> */}
    <textarea name="" id="" cols="30" className='box gg text-white'  rows="10"></textarea>
  </div>
  
  <div className="m-0 d-flex lead justify-content-start text-white flex-column align-items-start mb-5">
    <button class="bg-dark text-white px-4 py-2 btn me-md-2 boxx" type="button">SUBMIT</button>
  </div>



  </div>

  </div>
</form>
  
  

    </div>
  )
}

export default Feedback