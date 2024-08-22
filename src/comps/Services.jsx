import React from 'react'
import '../comps/serv.css'
import Services_Data from '../assets-2/services_data'
import arrow from '../assets-2/arrow_icon.svg'

const Services = () => {
  return (
    <div id='services' className='services'>
        <div className="sertit">
            <h1>My Services</h1>
        </div>
        <div className="servicecont">
              {Services_Data.map((service,index)=>{
                return <div className='serviceform' key={index}>
                  <h3>{service.s_no}</h3>
                  <h2>{service.s_name}</h2>
                  <p>{service.s_desc}</p>
                  <div className="read">
                  <p>Read more</p>
                  <img src={arrow} alt="" />
                  </div>
                </div>
              })}
        </div>
    </div>
  )
}

export default Services