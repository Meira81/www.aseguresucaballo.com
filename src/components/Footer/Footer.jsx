import React from 'react'
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <nav className="footer-nav">
        <ul className="footer-nav-ul">
          <li className='footer-email'>
            <a href="mailto:info@aseguresucaballo.com">info@aseguresucaballo.com</a>
          </li>
          <li className="footer-phone">
            <a href="tel:986469808">986469808</a>
          </li>
          <li className="footer-movil">
            <a href="https://api.whatsapp.com/send?phone=34698289594">698289594</a>
          </li>
          
        </ul>
      </nav>
    </div>
  );
}

export default Footer;