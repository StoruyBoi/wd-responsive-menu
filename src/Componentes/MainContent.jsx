import React from 'react'
import "./style.css"
import Card from './Card'
import data from "./data"

function createtab(tablet){

  return <Card 

heading={tablet.heading}
img={tablet.img}
data={tablet.data}
perc={tablet.perc}
/>
 
  


}


export default function MainContent() {

  return (
    <>
    
    
    
    <section className='Mainconter'>

<p className='forp'>Weekling status</p>

<div className="Continaer_box">
{data.map(createtab)}
</div>




    </section>
    
    
    
    
    
    
    
    </>
  )
}


