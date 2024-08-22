import React from 'react'
import '../comps/hero.css'
import pic from '../assets-2/icon.png'
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import AnchorLink from 'react-anchor-link-smooth-scroll'



const Hero = () => {
  return (
    <>
     {/* <div id='home' className='logo'>
         <a href="https://www.instagram.com/emmanuelhagios?igsh=MW1xdDZjZ21xZmxxcg%3D%3D&utm_source=qr"> <p><FaInstagramSquare /> Instagram</p></a>
         <a href=""> <p> <FaLinkedin /> Linkedn</p></a>
         <a href="https://github.com/Phosphaino107"> <p> <FaGithub/> Github</p></a>
         <a href="https://wa.link/s71l5r"> <p> <FaWhatsappSquare /> Whatsapp</p></a>
         <a href="tel:"> <p> <FaPhoneAlt/>  09169051378</p></a>
         <a href="https://mail.google.com/mail/u/0/#inbox"> <p> <MdOutlineEmail /> Email</p></a>
          </div> */}

    <div className='hero'>
        <img src={pic} alt="" />
        <h1><span>I am Hagios Phosphaino,</span> frontend developer and UI/UX designer</h1><br />
        <p>I am an aspiring front-end developer and designer, I am based in Nigeria.
         I can develop responsive websites from scratch and modify them into modern user-friendly
          web experiences.</p>
    <div className="heroact">
        <div className="herome"><AnchorLink className='u' offset={50} href='#contact'>Connect With Me </AnchorLink> </div>
        <div className="resume">Resume</div>
    </div>
    </div>
        </>
  )
}

export default Hero