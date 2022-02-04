import React from 'react';
import Footer from '../components/footer';
import { Link } from "react-router-dom";
import '../styles/home.css';
import cubeImg from '../assets/cube.jpg'
import largeImg from '../assets/large.jpg'
import regularImg from '../assets/regular.jpg'

function Home() {
  return (
    <div className="main">
      <div className="box_hero" style={{backgroundImage: `url(${largeImg})`}}>
        <h1 className="big_text">Text</h1>
        <h2 className="normal_text">Subtitle</h2>
      </div>

      <div className="box_skills_img">
        <img src={regularImg} alt="" />
      </div>
      <div className="box_skills_text">
        <h2 className="medium_text">About Me</h2>
        <p className="normal_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <button className="normal_text">
          <Link to="/aboutMe" className="links">Know more</Link>
        </button>
      </div>

      <div className="box_projects">
        <h2 className="medium_text">Projects</h2>
        <img src={cubeImg} alt="" class="projects_1" />
        <img src={cubeImg} alt="" class="projects_2" />
        <img src={cubeImg} alt="" class="projects_3" />

        <button className="normal_text">
          <Link to="/projects" className="links">For more projects</Link>
        </button>
      </div>

      <div id="like_button_container"></div>

      <Footer />
    </div>
  )
}

export default Home
