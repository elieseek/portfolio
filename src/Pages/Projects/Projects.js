import React from 'react';
import Card from './Card';
import './Projects.css';

const projectInfo = require('./ProjectInfo.json');

const cards = projectInfo.map((prop, index) => {
  return (
    <Card key={index}
    src={prop.src}
    title={prop.title}
    content={prop.content}
    link={prop.link}
  />
  )
})

const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      <div className='projectCards'>
       {cards}
      </div>
    </div>
  )
}

export default Projects;
