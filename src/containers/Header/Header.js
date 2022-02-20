import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

export default function Header() {
  return (
    <div class="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">

       <SubHeading title="Chase the new flavor" />

       <h1 className="app__header-h1"> The Key To Fine Dining</h1>

       <p className="p__opensans" style={{margin:'2rem 0'}}>
       Different projects require different technologies. Pick a plan that matches your current needs, then upgrade and scale as your website grows.
       </p>

       <button type="button" className="custom__button">Explore Menu</button>

      </div>

      <div className="app__wrapper_img">
          <img src={images.welcome} alt="header img"/>
      </div>
      
    </div>
  )
}
