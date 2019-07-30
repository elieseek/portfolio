import React from 'react';
import Card from './Card';
import './Projects.css';

const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      <div className='projectCards'>
        <Card key={1}
          src='#'
          title='Capitative Title'
          content='A fairly length but useful description of my work. It may or may not use overly dramatic language to capture to atomosphere of the page.'
        />
        <Card key={2}
          src='#'
          title='Incredible Project'
          content='A fairly length but useful description of my work. It may or may not use overly dramatic language to capture to atomosphere of the page.'          
        />
        <Card key={3}
          src='#'
          title='Fascinating Discovery'
          content='A fairly length but useful description of my work. It may or may not use overly dramatic language to capture to atomosphere of the page.'
        />
      </div>
    </div>
  )
}

export default Projects
