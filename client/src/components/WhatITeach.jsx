import React from 'react';
import './WhatITeach.scss';

const WhatITeach = () => (
  <div className="whatITeach">
    <h3 className="whatITeachTitle" id="whatiteach">What I teach</h3>
    <div className="skills">
      <div className="uk-card uk-card-default card">
        <img className="cardMedia" src="images/front-end-development.jpg" alt="Frontend development" />
        <div className="cardBody">
          <h3 className="cardTitle">Front End Development</h3>
          <p className="cardDescription">Learn the basics of web development getting familiarized with HTML, CSS, and Javascript languages</p>
        </div>
      </div>
      <div className="uk-card uk-card-default card">
        <img className="cardMedia" src="images/back-end-development.jpg" alt="Backend development" />
        <div className="cardBody">
          <h3 className="cardTitle">Back End Development</h3>
          <p className="cardDescription">Go beyond static websites. Get familiarize with server-side programming languages to build powerful web applications.</p>
        </div>
      </div>
      <div className="uk-card uk-card-default card">
        <img className="cardMedia" src="images/machine-learning.jpg" alt="Machine learning" />
        <div className="cardBody">
          <h3 className="cardTitle">Machine Learning</h3>
          <p className="cardDescription">Interested in AI and its applications? In these classes we will cover the key elements to create and train your own AI machine.</p>
        </div>
      </div>
    </div>
  </div>
);

export default WhatITeach;


