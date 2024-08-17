import React from 'react';


import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="header-content">
        <ul className="content-nav">
            <li>Abstract | Help Center</li>
            <li><button className="request-button">Submit a request</button></li>
        </ul>
         
        
      </nav>
    </header>
  );
};

export default Header;
