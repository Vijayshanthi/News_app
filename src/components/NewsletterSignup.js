import React from 'react';
import './NewsletterSignup.css'; // Create a CSS file for styling

function NewsletterSignup() {
  return (
    <div className="newsletter-box">
      <p className="newsletter-title">Sign up for the newsletter</p>
      <input
        type="email"
        placeholder="Enter your email..."
        className="email-input"
      />
      <button className="signup-button">Sign Up</button>
    </div>
  );
}

export default NewsletterSignup;
