import React, { useEffect } from 'react'
import "./style.css"
import { preLoaderAnim } from './AnimationFile'
export default function Preloader() {
 
 useEffect(()=>{

preLoaderAnim()

 },[]);
 
 return (
<>


<div className="preloader">
<div className="texts-container">

    <span>Scroll</span>
    <span>Scroll</span>
    <span>Just Scroll</span>
</div>

</div>









</>
  )
}
