import React from 'react'
import '../comps/contact.css'
import mail from '../assets-2/mail_icon.svg'
import loc from '../assets-2/location_icon.svg'
import call from '../assets-2/call_icon.svg'

const Contact = () => {
  return (
    <div id='contact' className='contact'>
        <div className="contacttit">
            <h1>Get in touch</h1>
        </div>
        <div className="contactsec">
            <div className="contactleft">
                <h1>Let's talk</h1>
                <p>I'm currentl available to take on new projects, so feel free to contact me.</p>
                <div className="details">
                    <div className="detail">
                        <img src={loc} alt="" />
                        <p>Lagos,Nigeria</p>
                    </div>
                    <div className="detail">
                    <img src={call} alt="" />
                    <p>08118123847</p>

                    </div>
                    <div className="detail">
                    <img src={mail} alt="" />
                    <p>hagiosemmanuel107@gmail.com</p>

                    </div>
                    
                </div>
            </div>
            <form className='contactright'>
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter your name' name='name' />
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder='Enter your Email' name='email' />
                    <label htmlFor="">Write your message</label>
                    <textarea name="message" rows='8' placeholder='Enter'></textarea>
                    <button type='submit' className="contactsub">Submit now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact