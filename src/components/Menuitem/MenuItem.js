import React from 'react'

const MenuItem =({title,price,tags}) => {
  return (
          <div className="app__menuitem">
            <div className="app__menuitem-head">
              <div className="app__menuitem-name">
                <p className="p__cormorant" style={{color:'#DCCA87'}}>{title}</p>
              </div>

              {/* self closing tag */}

              <div className="app__menuitem-dash"/>

              <div className="app__menuitem-name">
                <p className="p__cormorant" >{price}</p>
              </div>

              <div className="app__menuitem-sub">
                <p className="p_opensans" style={{color:'#AAA'}}> {tags}</p>

              </div>
            </div>
          </div>
  )
}



export default MenuItem