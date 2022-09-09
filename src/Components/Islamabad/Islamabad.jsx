import React from "react";
import "./Islamabad.css";
import {BsPlayCircle} from "react-icons/bs"
import isi from '../Assets/islamabad.jpg'
import Google from "../Google/Google";

function Islamabad() {
  return (
    <div className="container-fluid background p-5">
      <div className="vide d-none">
      <iframe width={'80%'}  height={'80%'} src="https://www.youtube.com/embed/YBHL5JB84SU?rel=1&autoplay=1"  frameborder="0"></iframe>


      </div>
      <div>
        {" "}
        <h1 className="texxt py-5">ISLAMABAD (PIR SOHAWA)</h1>
      </div>
      <div className="container position-relative icccc">
<img src={isi} className="w-100 h-100" alt=""  />

<div className="icondiv">
<button className="bto d-none" onClick={()=>{
  const vide = document.querySelector('.vide');
  const icondiv = document.querySelector('.icccc');
  vide.classList.remove('d-none')
  vide.classList.add('d-flex')
  icondiv.classList.add('d-none')
  icondiv.classList.remove('d-flex')
}}>
 {" "}
 <BsPlayCircle className="icoon" />{" "}</button>
</div>

      </div>

  

    </div>
  );
}

export default Islamabad;


//  import {BsPlayCircle} from "react-icons/bs"


//  <a href="" target="_blank">
//  {" "}
//  <BsPlayCircle className="icons-go" />{" "}</a>