import React, { useState } from 'react';
import './Header.scss';
import logo from '../../assets/svg/logo.svg';
import hamburger from '../../assets/svg/icon-hamburger.svg';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Easybank Logo" />
        </div>
        <div className={`menu_background menu ${isMenuOpen ? '' : 'hide'}`}>
          <div className='hamburger_menu'>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>
        </div>
        <div className='hamburger_icon' onClick={toggleMenu}>
            <img src={hamburger} alt='hamburger icon image' className='icon'></img>
        </div>
        <div className="cta">
          <a className="cta-btn" href="#">
            Request Invite
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
