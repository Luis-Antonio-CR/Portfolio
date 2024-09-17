import React from 'react';
import Footer from '../components/footer';
import { Link } from "react-router-dom";
import ProjectComp from '../components/projectComp';
import '../styles/home.css';
import cubeImg from '../assets/cube.jpg'
import largeImg from '../assets/large.jpg'
import regularImg from '../assets/regular.jpg'
import imgAboutMe from '../assets/sticker.webp'

function Home() {
  return (
    <div className="main">
      <div className="box_hero" style={{/*backgroundImage: `url(${largeImg})`*/}}>
        <h1 className="big_text">Front-End <br></br> Web Developer</h1>
      </div>
      
      <div className="box_projects">
        <h2 className="medium_text">PROJECTS</h2>
        <ProjectComp />

        <Link to="/projects" className="links button normal_text">For more projects</Link>
      </div>

      <div className="box_aboutMe_home_text">
        <h2 className="medium_text">ABOUT ME</h2>
        <p className="normal_text">
          Hi, I'm Luis Antonio and I'm a frontend web developer studing at NAD Verona. 
        </p>
        <Link to="/aboutMe" className="links button normal_text">Know me better</Link>
      </div>
      <div className="box_aboutMe_home_img">
        <img src={imgAboutMe} alt="" />
      </div>

      <div id="like_button_container"></div>

      <Footer />
    </div>
  )
}

export default Home
