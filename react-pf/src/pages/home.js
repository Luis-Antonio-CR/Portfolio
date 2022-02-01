import React from 'react';
import Footer from '../components/footer';
import '../styles/home.css';
import cubeImg from '../assets/cube.jpg'
import largeImg from '../assets/large.jpg'
import regularImg from '../assets/regular.jpg'

function Home() {
  return (
    <div className="main">
      <div className="box_hero" style={{backgroundImage: `url(${largeImg})`}}>
        <h1>Text</h1>
        <h2>Subtitle</h2>
      </div>

      <div className="box_skills_img">
        <img src={regularImg} alt="" />
      </div>
      <div className="box_skills_text">
        <h2>About Me</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <button>Know more</button>
      </div>

      <div className="box_projects">
        <h2>Projects</h2>
        <img src={cubeImg} alt="" class="projects_1" />
        <img src={cubeImg} alt="" class="projects_2" />
        <img src={cubeImg} alt="" class="projects_3" />

        <button>For more projects</button>
      </div>

      <div id="like_button_container"></div>


      <div className="box_end"></div>

      <Footer />
    </div>
  )
}

export default Home
