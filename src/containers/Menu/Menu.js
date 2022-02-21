import React from 'react';
import {images,data} from '../../constants';
import{subHeading,MenuItem, SubHeading} from '../../components'

const Menu = () => {
  return (
    <div className="app__specialMenu flex__center section__padding" id="menu">
     
     <div className="app__specialMenu-title">
       <SubHeading title=" Menu That  Fits Your Palatte"/>
         <h1 className="headtext__cormorant"> Today's Specials</h1>
     </div>

         <div className='app__specialMenu-menu'>
              <div className="app__specialMenu-menu_wine flex__center">
                <p className='app__specialMenu_menu_heading'>Wine & Beer</p>
                <div className="app__specialMenu_menu_items">
                  {data.wines.map((wine,index) => (

                    <p>{wine.title} </p>)
                  )}

                </div>
              </div>
              {/* the image breaks */}
              <div className="app__specialMenu-menu_img">

                <img src={images.menu} alt="menu-img"/>

              </div>
              {/* images stops */}

              <div className="app__specialMenu-menu_cocktails flex__center">
                <p className='app__specialMenu_menu_heading'>Cocktails</p>
                <div className="app__specialMenu_menu_items">
                  {data.cocktails.map((cocktail,index) => (

                    <p>{cocktail.title} </p>)
                  )}

                </div>
              </div>
         </div>
         <div style={{marginTop:'15px'}}>
            <button type="button" className="custom__button">View More</button>
         </div>
    </div>
  )
}


export default Menu