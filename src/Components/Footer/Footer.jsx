import React from "react";
import "./Footer.css";
import Logo from "../Assets/monal.png";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { MdLocationPin } from "react-icons/md";
import { AiTwotonePhone } from "react-icons/ai";
import { AiFillClockCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import {AiFillLinkedin} from "react-icons/ai"
import {FiInstagram} from "react-icons/fi"
import {BsTwitter} from "react-icons/bs"
import {SiTripadvisor} from "react-icons/si"
import {IoLogoGoogleplus} from "react-icons/io"
import {AiOutlineWifi} from "react-icons/ai"
import {FaMosque} from "react-icons/fa"


function Footer() {
  return (
    <div className="color py-5 px-1">
      <img src={Logo} className="" alt="" />

      <div className="text-white">
        <h5>
          <MdLocationPin className="icons-loc" /> 9 km, Islamabad - Pirsohawa
          Road, Islamabad
        </h5>
        <h5>
          {" "}
          <AiTwotonePhone className="icons-loc" /> Phone: +92-51-2898044, 55,
          66, 77, 88
        </h5>
        <h5>0301-8433359, 0336-8433358</h5>
        <h5>UAN: 051-111 777 778</h5>
        <h5>
          {" "}
          <AiFillClockCircle className="icons-loc" /> Opening Hours: 9am- 12am
        </h5>

       

        <div className="m-4  tes">  
            <a href="https://www.facebook.com/TheMonalRestaurantIslamabad" target="_blank">
            {" "}
            <BsFacebook className="icons-lo" />{" "}</a>


            <a href="https://www.instagram.com/accounts/login/?next=/monalofficial/" target="_blank">
            {" "}
            <SiTripadvisor className="icons-lr" />{" "}</a> 


            <a href="https://www.instagram.com/accounts/login/?next=/monalofficial/" target="_blank">
            {" "}
            <BsTwitter className="icons-tw" />{" "}</a>
            <a href="https://www.instagram.com/accounts/login/?next=/monalofficial/" target="_blank">
            {" "}
            <FiInstagram className="icons-ln" />{" "}</a>
            <a href="https://www.linkedin.com/company/monal-group/" target="_blank">
            {" "}
            <AiFillLinkedin className="icons-ld" />{" "}</a>

         
            <a href="https://www.instagram.com/accounts/login/?next=/monalofficial/" target="_blank">
            {" "}
            <IoLogoGoogleplus className="icons-go" />{" "}</a>
            
            {/* <a href="https://www.instagram.com/accounts/login/?next=/monalofficial/" target="_blank">
            {" "}
            <AiOutlineWifi className="icoo" />{" "}</a>
            
            
            <a href="https://www.instagram.com/accounts/login/?next=/monalofficial/" target="_blank">
            {" "}
            <FaMosque className="icoo" />{" "}</a> */}
              
            



          </div>
      </div>
    </div>
  );
}

export default Footer;
