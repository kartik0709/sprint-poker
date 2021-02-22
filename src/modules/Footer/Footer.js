import React from "react";

import Canonic from "../../icons/canonic.svg";

import "./Footer.css";

function Footer() {
  const footerLogoClick = React.useCallback(
    () => window.open("https://canonic.dev", "_blank"),
    []
  );
  return (
    <div className="footer">
      <div className="footer-wrapper" onClick={footerLogoClick}>
        <img className="footer-img" src={Canonic} alt="" />
        <div className="footer-text">
          built with <span className="footer-logo">Canonic</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
