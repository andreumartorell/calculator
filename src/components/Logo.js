import React from "react";
import freeCodeCampLogo from '../imatges/fcc-logo.png';
import '../stylesheets/Logo.css';

function Logo() {
  return (
    <div className='freecodecamp-logo-contenidor'>
        <img 
        src={freeCodeCampLogo}
        className='freecodecamp-logo'
        alt='Logo de freecodecamp' />
      </div>
  )
}

export default Logo;