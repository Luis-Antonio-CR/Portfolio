import React from 'react'
import Footer from '../components/footer';
import '../styles/home.css';
import regularImg from '../assets/regular.jpg';
import illustrator from '../assets/illustrator.png';
import browser from '../assets/browser.png';
import css from '../assets/css.png';
import github from '../assets/github.png';
import html from '../assets/html.png';
import java from '../assets/js.png';
import lightroom from '../assets/lightroom.png';
import imgReact from '../assets/react.png';


function AboutMe() {
  return (
    <div className="main">

      <div className="box_presentation_text">
        <h2 className="medium_text bold">Presentation</h2>
        <p className="normal_text">3 Rows of text in 40 words</p>
      </div>
      <div className="box_presentation_img">
        <img src={regularImg} alt="" />
      </div>


      <div className="box_aboutMe_img">
        <img src={regularImg} alt="" />
      </div>
      <div className="box_aboutMe_text">
        <h2 className="medium_text bold">Education</h2>
        <p className="normal_text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et cupiditate voluptates, explicabo repellendus exercitationem rerum, laudantium sapiente animi quisquam placeat sed debitis in perferendis, adipisci ullam blanditiis quaerat! Ut, sed!
        </p>
      </div>

      <div className="box_skills_A">

        <div className="skills_img_A1">
          <img src={html} alt=""/>
        </div>
        <div className="skills_img_A2">
          <img src={css} alt=""/>
        </div>
        <div className="skills_img_A3">
          <img src={java} alt=""/>
        </div>
        <div className="skills_img_A4">
          <img src={imgReact} alt=""/>
        </div>

      </div>

      <div className="box_skills_B">
        <h2 className="medium_text bold">Skills</h2>
      </div>

      <div className="box_skills_C">

        <div className="skills_img_C1">
          <img src={lightroom} alt=""/>
        </div>
        <div className="skills_img_C2">
          <img src={illustrator} alt=""/>
        </div>
        <div className="skills_img_C3">
          <img src={github} alt=""/>
        </div>
        <div className="skills_img_C4">
          <img src={browser} alt=""/>
        </div>

      </div>





      <Footer />
    </div>
  )
}

export default AboutMe
