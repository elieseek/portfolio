import React, { useState } from 'react'
import './Card.css';

export default function Card(props) {
  const [Style, setStyle] = useState({backgroundImage: ''})

  function handleMovement(e) {
    var x = e.nativeEvent.offsetX;
    var y = e.nativeEvent.offsetY;
    const gradient = 'radial-gradient(circle at '+x+'px '+y+'px, rgb(77, 0, 60), rgb(34, 0, 56))';
    requestAnimationFrame(() => {
      setStyle({backgroundImage: gradient, });
    });
  }


  function handleOut() {
    requestAnimationFrame(() => {
      setStyle({backgroundImage: ''});
    })
  }
  return (
      <a href={props.link} className='card' onMouseUp={handleMovement} onMouseOut={handleOut} onMouseMove={handleMovement} style={Style}>
        <div className='card-image'>
          <image src={props.src}/>
        </div>
        <div className='card-content'>
          <h2 className='card-heading'>{props.title}</h2>
          <p>{props.content}</p>
        </div>
      </a>
  )
}
