import React from 'react';
import './Hero.scss';
import heroImage from '../../assets/images/image-mockups.png';


const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Next generation digital banking</h1>
        <p className="hero-subtitle">
          Take your financial life online. Your Easybank account will be your one-stop-shop for spending, saving,
          budgeting, investing, and much more.
        </p>
        <a className="hero-btn" href="#">
          Request Invite
        </a>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Mockups" />
      </div>
    </section>
  );
};

export default Hero;
