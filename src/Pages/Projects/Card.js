import React, { useState, useEffect } from 'react'
import './Card.css';

function getMousePosition() {
  
}

export default function Card(props) {
  const [Style, setStyle] = useState({background: 'rgb(34, 0, 56)', transition: 'background-image: 10s'})

  function handleMovement(e) {
    var x = e.nativeEvent.offsetX;
    var y = e.nativeEvent.offsetY;
    console.log(x, y)
    const gradient = 'radial-gradient(circle at '+x+'px '+y+'px, rgb(77, 0, 60), rgb(34, 0, 56)) no-repeat'
    setStyle({background: gradient, transition: 'background 10s'})
  }

  function handleOut() {
    setStyle({background: 'rgb(34, 0, 56)'});
  }
  return (
    <div className='card' onMouseUp={handleMovement} onMouseOut={handleOut} onMouseMove={handleMovement} style={Style}>
      <div className='card-image'>
        <image src={props.src}/>
      </div>
      <div className='card-content'>
        <h2 className='card-heading'>{props.title}</h2>
        <p>{props.content}</p>
      </div>
    </div>
  )
}
