import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <br/>
      <div>Movie App</div>
      <br/>
      <div>Copyright Reserved {new Date().getFullYear()}</div>
      <br/>
    </div>
  );
};

export default Footer;
