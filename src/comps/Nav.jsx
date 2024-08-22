import React, { useRef, useState } from 'react'
import '../comps/nav.css'
import logo from '../assets-2/logo.svg'
import un from '../assets-2/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import close from '../assets-2/menu_close.svg'
import open from '../assets-2/menu_open.svg'


const Nav = () => {

  const [menu,setMenu] = useState("home");
  const menuRef = useRef();


  const openm = () => {
    menuRef.current.style.right='0';
  }
  const closem = () => {
    menuRef.current.style.right='-350px';
  }

  return (
    <div className='navbar'>
        <img src={logo} alt="" />
        <img onClick={openm} className='open' src={open} alt="" />
        <ul ref={menuRef} className='navmenu'>
          <img onClick={closem} className='close' src={close} alt="" />
            <li><AnchorLink className='anchor' href='#home'><p onClick={()=>setMenu('home')}>Home</p></AnchorLink>{menu==="home"?<img src={un} alt=''/>:<></>}</li>
            <li><AnchorLink className='anchor' offset={50} href='#about'><p onClick={()=>setMenu('about me')}>About Me</p></AnchorLink>{menu==="about me"?<img src={un} alt=''/>:<></>}</li>
            <li><AnchorLink className='anchor' offset={50} href='#services'><p onClick={()=>setMenu('services')}>Services</p></AnchorLink>{menu==="services"?<img src={un} alt=''/>:<></>}</li>
            <li><AnchorLink className='anchor' offset={50} href='#work'><p onClick={()=>setMenu('portfolio')}>Portfolio</p></AnchorLink>{menu==="portfolio"?<img src={un} alt=''/>:<></>}</li>
            <li><AnchorLink className='anchor' offset={50} href='#contact'><p onClick={()=>setMenu('contact')}>Contact</p></AnchorLink>{menu==="contact"?<img src={un} alt=''/>:<></>}</li>
        </ul>
        <div className="me"><AnchorLink className='u' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
    </div>
  )
}

export default Nav