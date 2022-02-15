import React from 'react';
import '../styles/footer.css';

import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Logo from '../assets/Logo_LSC.png';

function Footer() {
  return (
    <footer>
      <img src={Logo} alt=""/>
      <div className="footerIcons">
        <a href="https://github.com/Luis-Antonio-CR" target="_blank" rel="noreferrer">
          <GitHubIcon className="footerIcon"/>
        </a>
        <a href="https://www.linkedin.com/in/luis-antonio-c-73852bb5/" target="_blank" rel="noreferrer">
          <LinkedInIcon className="footerIcon"/>
        </a>
        <a href="https://www.instagram.com/castaneda_luis_antonio/" target="_blank" rel="noreferrer">
          <InstagramIcon className="footerIcon"/>
        </a>
      </div>
    </footer>
  )
}

export default Footer
