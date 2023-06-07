import React from 'react';
import iconOnline from '../../assets/svg/icon-online.svg';
import iconBudgeting from '../../assets/svg/icon-budgeting.svg';
import iconOnboarding from '../../assets/svg/icon-onboarding.svg';
import iconApi from '../../assets/svg/icon-api.svg';
import './Features.scss';

const Features = () => {
  return (
    <section className="features">
      <div className="features-wrapper">
        <div className="features-text">
          <h2>Why choose Easybank?</h2>
          <p>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
        </div>
        <div className="features-options">
          <div className="option">
            <img src={iconOnline} alt="online icon" />
            <h2>Online Banking</h2>
            <p>Our modern web and mobile applications allow you to keep track of your finances
              wherever you are in the world.</p>
          </div>
          <div className="option">
            <img src={iconBudgeting} alt="online budgeting" />
            <h2>Simple Budgeting</h2>
            <p>See exactly where your money goes each month. Receive notifications when you’re
              close to hitting your limits.</p>
          </div>
          <div className="option">
            <img src={iconOnboarding} alt="settings icon" />
            <h2>Fast Onboarding</h2>
            <p>We don’t do branches. Open your account in minutes online and start taking control
              of your finances right away.
            </p>
          </div>
          <div className="option">
            <img src={iconApi} alt="design for API"/>
              <h2>Open API</h2>
              <p>Manage your savings, investments, pension, and much more from one account. Tracking
                your money has never been easier.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
