import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faYoutube, faTwitter, faPinterest, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { ReactComponent as Logo } from '../../assets/svg/logo.svg';
import './Footer.scss';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                <Logo/>
                </div>
                <nav className="footer-links">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                    <a href="#">Blog</a>
                    <a href="#">Careers</a>
                </nav>
                <div className="footer-social">
                    <a href="#">
                        <FontAwesomeIcon icon={faFacebookSquare} />
                    </a>
                    <a href="#">
                        <FontAwesomeIcon icon={faYoutube} />
                    </a>
                    <a href="#">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="#">
                        <FontAwesomeIcon icon={faPinterest} />
                    </a>
                    <a href="#">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </div>
            </div>
            <p className="footer-attribution">
                Challenge by{' '}
                <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer">
                    Frontend Mentor
                </a>
                . Coded by <a href="https://github.com/nterebentin">Nterebentin</a>
            </p>
        </footer>
    );
};

export default Footer;
