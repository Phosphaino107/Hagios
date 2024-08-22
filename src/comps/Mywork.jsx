import React from 'react'
import'../comps/work.css'
import mywork from '../assets-2/mywork_data'
import arrow from '../assets-2/arrow_icon.svg'

const Mywork = () => {
  return (
    <div id='work' className='work'>
        <div className="worktit">
            <h1>My Latest Work</h1>
            <img src="" alt="" />
        </div>
        <div className="workcont">
            {mywork.map((work,index)=>{
                return <img key={index} src={work.w_img} alt=''/>
            })}
        </div>
        <div className="workmore">
            <p>Show More</p>
            <img src={arrow} alt="" />
        </div>


    </div>
  )
}

export default Mywork