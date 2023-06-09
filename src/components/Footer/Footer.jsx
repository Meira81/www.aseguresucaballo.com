import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <nav className="footer-nav">
        <ul className="footer-nav-ul">
          <li className="footer-email">
            <a
              href="mailto:info@aseguresucaballo.com"
              style={{ textDecoration: "none" }}
            >
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
          <li className="footer-phone">
            <a href="tel:986469808" style={{ textDecoration: "none" }}>
              <FontAwesomeIcon icon={faPhone} color="white" />
              <span
                style={{
                  color: "white",
                  /* fontWeight: "bold", */
                  marginLeft: "5px",
                }}
              >
                986 469 808
              </span>
            </a>
          </li>
          <li className="footer-movil">
            <a
              href="https://api.whatsapp.com/send?phone=34698289594"
              style={{ textDecoration: "none" }}
            >
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
        </ul>
      </nav>
    </div>
  );
};

export default Footer;
