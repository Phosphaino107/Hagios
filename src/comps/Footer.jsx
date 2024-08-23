import React from 'react'
import '../comps/foot.css'
import user from '../assets-2/user_icon.svg'

const Footer = () => {
  return (
    <div className='foot'>
        <div className="top">
            <div className="left">
                <h1>PHOSPHAINO</h1>
                <p>I am an aspiring front-end developer and designer, I am based in Nigeria.
         I can develop responsive websites from scratch and modify them into modern user-friendly
          web experiences.</p>
            </div>
            <div className="right"><div className="email">
                 <img src={user} alt="" />
                 <input type="email" placeholder='enter your email' />
                </div>
                <div className="sub">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="bottom">
            <p className="botleft">Phosphaino All rights reserved</p>
            <div className="botright">
                <p>Terms of Services</p>
                <p>Privacy Policy</p>
                <p>Connect </p>
            </div>
        </div>
    </div>
  )
}

export default Footer