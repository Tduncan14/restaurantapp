import React from 'react';
import './Navbar.css';
import{GiHamburgerMenu} from 'react-icons/gi';
import{MdOutlineRestaurantMenu} from 'react-icons/md';

import images from '../../constants/images';

export default function Navbar() {
  return (
    <nav class="app__navbar">
      <div class="app_navbar-logo">
           <img src={images.gericht} alt="app logo"/>
      </div>

      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home">Home</a></li>
        <li className="p__opensans"><a href="#about">About</a></li>
        <li className="p__opensans"><a href="#menu">Menu</a></li>
        <li className="p__opensans"><a href="#award">Award</a></li>
        <li className="p__opensans"><a href="#contact">Contact</a></li>
      </ul>

       <div className="app__navbar-login">
          <a href="#login" className="p__opensans">Log In / Register</a>
          <div></div>
          <a href="#login" className="p__opensans">Log In / Register</a>
       </div>

    </nav>
  )
}
