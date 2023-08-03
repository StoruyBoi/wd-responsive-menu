import React from 'react'

export default function Card(props) {
  return (
<>

<div className="car-container">
<p>{props.heading}</p>
<img src={props.img} alt="" />
<h1>{props.data}</h1>
<p>{props.perc}</p>


</div>
</>
  )
}
