import React from 'react';
import './Contact.css';

const githubLogo = require('./Images/GitHub-Mark-Light-120px-plus.png')

function Contact(props) {
  return(
    <div>
      <h1>Contact</h1>
      <div className='contact-group'>
        <a href='https://www.github.com/elieseek' draggable='False'>
          <img className='contact-logo' draggable='False' src={githubLogo}/>
        </a>
        <a draggable='False' className='contact-email' href='mailto:eliegseek@gmail.com'>
            eliegseek@gmail.com
        </a>
      </div>
    </div>
  )
}

export default Contact;