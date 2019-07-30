import React from 'react';
import Projects from '../Projects/Projects';

function Home(props) {
  return (
    <div className='Home'>
      <div className='titleCard'>
        <div className='myWork'>
          <h1>Elie Sikh</h1>
          <p>A current student and aspiring developer.</p>
        </div>
        <div className='Projects'>
          <div>
            <Projects/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;