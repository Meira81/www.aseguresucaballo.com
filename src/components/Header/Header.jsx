import React from 'react';
import './Header.css';
import logo from "../../assets/logo.png";
import './../../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FaWhatsapp } from "react-icons/fa";



const Header = () => {
  return (
    <div className="header">
      <nav className="header-nav">
        <ul className="header-nav-ul">
          <li className="header-logo">
            <a href="/">
              <img className="logo" src={logo} alt="logo" />
            </a>
          </li>
          
          <li className="header-email">
            <a href="mailto:info@aseguresucaballo.com">
              <FontAwesomeIcon icon={faEnvelope} color="white" />
              <span
                style={{
                  color: "white",
                  /* fontWeight: "bold", */
                  marginLeft: "5px",
                }}
              >
                info@aseguresucaballo.com
              </span>
            </a>
          </li>
          <li className="header-contact-group">    
          <li className="header-phone">
            <a href="tel:986469808">
              <FontAwesomeIcon icon={faPhone} color="white" />
              <span
                style={{
                  color: "white",
                  /* fontWeight: "bold", */
                  marginLeft: "5px",
                }}
              >
                986 46 98 08
              </span>
            </a>
          </li>

          <li className="header-movil">
            <a href="https://api.whatsapp.com/send?phone=34698289594">
              <FaWhatsapp color="white" />
              <span
                style={{
                  color: "white",
                  /* fontWeight: "bold", */
                  marginLeft: "5px",
                }}
              >
                698 289 594
              </span>
            </a>
          </li>
          </li>  
        </ul>
      </nav>
    </div>
  );
}

export default Header;
