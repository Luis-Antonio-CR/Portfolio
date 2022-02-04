import React from 'react';
import '../styles/footer.css';

import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Logo from '../assets/Logo_LSC.png';

function Footer() {
  return (
    <footer>
      <img src={Logo}/>
      <div className="footerIcons">
        <GitHubIcon />
        <LinkedInIcon />
        <InstagramIcon />
      </div>
    </footer>
  )
}

export default Footer
