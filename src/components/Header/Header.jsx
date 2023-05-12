import React from 'react'
import './Header.css'
import logo from "../../assets/logo.png";
import './../../App.css'

const Header = () => {
  return (
    <div className="header">
      <nav className="header-nav">
        <ul className="header-nav-ul">
          <li className='header-logo'>
            <a href="https://www.aseguresucaballo.com">ASEGURESUCABALLO</a>
            </li>
          <li className="header-email">
            <a href="mailto:info@aseguresucaballo.com">
              info@aseguresucaballo.com
            </a>
          </li>
          <li className="header-phone">
            <a href="tel:986469808">986 46 98 08</a>
          </li>
          <li className="header-movil">
            <a href="https://api.whatsapp.com/send?phone=34698289594">
              698 289 594
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;