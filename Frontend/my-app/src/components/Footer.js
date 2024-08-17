import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="Abstract">
        <ul className="Table">
          <li className="list-header">Abstract</li>
          <li>Branches</li>
        </ul>
      </div>
      <div className="Resources">
        <ul className="Table">
          <li className="list-header">Resources</li>
          <li>Blog</li>
          <li>Help Center</li>
          <li>Release Notes</li>
          <li>Status</li>
        </ul>
      </div>
      <div className="Community">
        <ul className="Table">
          <li className="list-header">Community</li>
          <li>Twitter</li>
          <li>Linkedin</li>
          <li>RFacebook</li>
          <li>Dribble</li>
          <li>Podcast</li>
        </ul>
      </div>
      <div className="Company">
        <ul className="Table">
          <li className="list-header">Company</li>
          <li>About Us</li>
          <li>Careers</li>
          <li>Legal</li>
        </ul>
      </div>

      <div className="footer-content">
        <p>© Copyright 2022</p>
        <p> Abstract Studio Design, Inc.</p>
        <p> All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
