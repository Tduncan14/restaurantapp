import React from 'react'
import { SubHeading } from '..'
import './Newsletter.css';

const Newsletter = () => {
  return (
    <div className="app__newsletter">
        <div className="app__newsletter-heading">
           <SubHeading title="Newsletter" style={{color:'white'}} /> 
           <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>

           <p className='p__opensans'>And never miss latest update</p>
        </div>

        <div className="app__newsletter-input flex__center">
            <input type="email" placeholder='Enter your email'/>
            <button className="custom__button"> subscribe</button>
        </div>
    </div>
  )
}

export default Newsletter
