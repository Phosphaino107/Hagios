import React from 'react'
import '../comps/about.css'
import pic from '../assets-2/icon.png'


const About = () => {
  return (
    <>
    <div id='about' className='about'>
        <div className="aboutit">
            <h1>About Me</h1>
        </div>
    <div className="aboutsec">
        <div className="aboutleft">
            <img src={pic} alt="" />
            </div>
        <div className="aboutright">
            <div className="aboutpara">
                <p>Transforming my creative ideas into websites has been my passion for a couple of years. I aim to
          assist various clients establish their businesses in the digital world. I am still thriving to broaden my 
          knowledge in technologies and frameworks.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora deserunt dolorum eveniet impedit dolorem nulla debitis, dolor sunt at est.</p>  
            </div>   

            
            <div className="aboutskills">
                <div className="aboutskill"><p>HTML & CSS</p><hr style={{width : "90%"}}/></div>
                <div className="aboutskill"><p>REACT JS</p><hr style={{width : "40%"}}/></div>
                <div className="aboutskill"><p>JAVASCRIPT</p><hr style={{width : "70%"}}/></div>
            </div>
            </div>
        </div>
    
    
    <div className="achieve">
        <div className="achieves">
        <h1>2+</h1>
        <p>EXPERIENCE</p>
    </div>
    <hr />
    <div className="achieves">
        <h1>100+</h1>
        <p>SATISFIED CLIENTS</p>
    </div>
    <hr />
    <div className="achieves">
        <h1>20+</h1>
        <p>PROJECTS</p>
    </div>
    </div>
    </div>
    
    
    
    </>
  )
}

export default About