import React from 'react'
import{BsFillPlayFill,BsPauseFill} from 'react-icons';
import './Intro.css'
import{meal} from '../../constants';

const Intro = () =>{

  const vidRef = react.useRef();


  return (
    <div className="app__video">
      <video
        src={meal}
        ref={vidRef}
        Loop 
        controls={false}
        muted
       />
       
    </div>
  )
}


export default Intro