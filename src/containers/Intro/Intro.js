import React,{useState,useRef} from 'react'
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import './Intro.css'
import{meal} from '../../constants';

const Intro = () =>{

  const [playVideo,setPlayVideo] = useState(false);

  const vidRef = useRef();

  const handleVideo=() =>{

    setPlayVideo((prevPlayVideo) => !prevPlayVideo)


    if(playVideo){
      vidRef.current.pause();
    }

    else{
      vidRef.current.play();
    }
  }


  return (
    <div className="app__video">
      <video
        src={meal}
        ref={vidRef}
        Loop 
        controls={false}
        muted
       />



<div className="app__video-overlay flex__center">

       <div className="app__video-overlay_circle flex__center"
       onClick={handleVideo}>


         
{playVideo ? (
          < BsFillPlayFill color="#fff"  fontSize={30}/>
         ):(
            <BsPauseFill color="#fff" fontSize={30} />
         )}


           


         </div>
         </div>

       </div>
       


  )
}


export default Intro