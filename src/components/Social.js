import React from "react";
import "./css/social.css";
import { FaLinkedin,FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

function Social() {
  return (
    <ul className="wrapper">
      <a
        href="https://www.facebook.com/profile.php?id=100009943271021"
        target="_blank"
      >
        <li className="icon facebook">
          <span className="tooltip">Facebook</span>
          <FaFacebookF />
        </li>
      </a>
      <a href="https://www.linkedin.com/in/osama-hafeez-807622246/" target="_blank">
        <li className="icon twitter">
          <span className="tooltip">Linkedin</span>
          <FaLinkedin className="twitter"/>
        </li>
      </a>
      <a href="https://www.instagram.com/osama_abdul_hafeez/" target="_blank">
      <li className="icon instagram">
        <span className="tooltip">Instagram</span>
        <FaInstagram 
        className="bi bi-instagram"
        />
      </li>
      </a>
    </ul>
  );
}

export default Social;
