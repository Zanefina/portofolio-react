import React from 'react';
import './Aboutme.css';
import profilePicture from'../Images/Me.JPG';

const Aboutme = () => {
    return (
      <div id="about-section">
        <img src={profilePicture} alt="Me" />
        <p>Hi,I am Zanefina! A Fullstack-Developer based in Varberg,Sweden.</p>
      </div>
    );
  };
export default Aboutme;