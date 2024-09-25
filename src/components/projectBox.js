import React from 'react';
import {projectsList} from '../dbase/projects.js';
import '../styles/projectComp.css';

function projectBox() {
  return (
    <div className="projectBoxList">
      <h2 className='medium_text'>Projects</h2>
      {projectsList.map((element, key) => {
        return(
          <a className="projectBox" href={element.href} target='blank'>
            <h2 className="normal_text">{element.type}</h2>
            <img src={element.img} alt=""/>
            <p className="normal_text">{element.title}</p>
          </a>
        )
      })}
    </div>
  )
}

export default projectBox
