import React from 'react';
import {projectsList} from '../dbase/projects.js';
import '../styles/projectBox.css';

function projectComp() {
  return (
    <div className="projectCompBox">
      {projectsList.map((element, key) => {
        return(
          <div className="projectComp">
            <img src={element.img} alt=""/>
            <h2 className="normal_text">{element.title}</h2>
          </div>
        )
      })}
    </div>
  )
}

export default projectComp
