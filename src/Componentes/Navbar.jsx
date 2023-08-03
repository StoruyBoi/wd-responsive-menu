import React, { useState } from 'react'
import "./style.css"
import "./Darktheme.css"

export default function Navbar() {

const [isMobile,setIsMobile]=useState(false);


const [changeNav, setchanceNav]=useState(false);


const changeBackground= ()=>{

if(window.scrollY>=70){
  setchanceNav(true)
}else{
  setchanceNav(false)
}


}
window.addEventListener("scroll",changeBackground)


  return (
<>

<nav className={changeNav ? "navbar active ": "navbar"}>

<h1>Scrolling Menu</h1>

<ul onClick={()=> setIsMobile(false)} className={isMobile? "nav-links-mobile":"nav-links"}>

<li className='activeeeee'>Home</li>
<li>About</li>
<li>Blog</li>
<li>Contact</li>

</ul>

<div className="darkthme">

 <button onClick={()=> setIsMobile(!isMobile)}  className='mobile-menu-icon' >{isMobile ? (<img width="32" height="32" src="https://img.icons8.com/windows/32/multiply.png" alt="multiply"/>) :( <img width="32" height="32" src="https://img.icons8.com/ios/50/plus-math--v1.png" alt="plus-math--v1"/>)}</button>

</div>

</nav>




</>
  )
}
