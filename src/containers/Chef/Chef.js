import React from 'react'
import './Chef.css'
import { SubHeading } from '../../components'
import {images}  from '../../constants'




const Chef =() => {
  return (

    <div className="app__bg app__wrapper section__padding">
  
  <div className="app__wrapper_img   app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" /> 
      oo
    </div>

        <div>

          <div className="app__wrapper_info">
            <SubHeading title="Chef's work"/>

            <h1 className="headtext__cormorant"> What We Believe In</h1>


            <div className="app__chef-content">
              <div className="app__chef-content_quote">
                <img src={images.quote} alt="quote" />
                <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>

              <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio fuga soluta fugit, magni atque asperiores quaerat consectetur quisquam molestias? Ut, perferendis ab omnis commodi ducimus sed maxime hic cum vero? Dignissimos eligendi omnis maxime quisquam, quia unde error cumque ipsa?</p>
            </div>
             <div className="app__chef-sign">
               <p> Dev lu</p>
               <p className="p__opensans">Chef & Founder</p>
               <img src={images.sign} />
             </div>
          </div>
        </div>
      </div>
  
 


  )
}


export default Chef