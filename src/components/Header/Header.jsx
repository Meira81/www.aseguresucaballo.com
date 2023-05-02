import React from 'react'
import './Header.css'
import logo from "../../assets/logo.png";
import './../../App.css'

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo-container">
      <img
        className="header-logo" 
        src={logo}
        alt="logo"
      /></div>
      <div className='header-logo-text'>
      <p> ASEGURE SU CABALLO DE RECREO</p>
      <p className='header-phone'>986 46 98 08 - 698 289 594</p>
      </div>
    </div>
  );
}

export default Header;