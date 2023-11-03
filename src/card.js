import React from "react";
import image12 from '../src/imagen/image12.png';
import Star1 from '../src/imagen/Star 1.png'

export default function card(props){
return (

<div className="card">


<img src={image12} className="card--image" /> 
<div className="card--stats">
<img src={Star1} className="card-star"/> 
<span>5.0</span>
<span className="gray">(6) </span>
<span className="gray">USA</span>






</div>
<p>Life lessons with katie Zaferes</p>
<p>from $136 / Person</p>


</div>

)



}