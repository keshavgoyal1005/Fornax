import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faInstagram,
    faFacebook,
    faYoutube,
    faLinkedin,
    faDev
  } from '@fortawesome/free-brands-svg-icons';
  
  library.add(
    faGithub,
    faInstagram,
    faFacebook,
    faYoutube,
    faLinkedin,
    faDev
  );

const Footers = () => {
    return (
      <div className="fonts">
          <a href="https://github.com"><FontAwesomeIcon icon={faGithub} className="icons"/></a>
          <a href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram} className="icons"/></a>
          <a href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebook} className="icons"/></a>

          <a href="https://www.youtube.com"><FontAwesomeIcon icon={faYoutube} className="icons"/></a>
          <a href="https://www.linkedin.com"><FontAwesomeIcon icon={faLinkedin} className="icons"/></a>
          <a href="https://dev.to"><FontAwesomeIcon icon={faDev} className="icons"/></a>
      </div>
    );
}
export default Footers;