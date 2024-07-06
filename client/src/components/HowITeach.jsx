import React from 'react';
import './HowITeach.scss';

const HowITeach = () => (
  <div className="howITeach">
    <h3 className="howITeachTitle">How I teach</h3>
    <div className="modes">
      <div className="uk-card uk-card-default card">
        <img className="cardMedia" src="images/video-meetings.jpg" alt="Video meetings" />
        <div className="cardBody">
          <h3 className="cardTitle">Video Meetings</h3>
          <p className="cardDescription">All 1 on 1 tutoring takes place Online in  Video Conferencing tool of your choosing. Personally I am most familiar with Google Meet, Skype, Facebook Messenger and Microsoft Teams.</p>
        </div>
      </div>
      <div className="uk-card uk-card-default card">
        <img className="cardMedia" src="images/w3schools.jpg" alt="W3Schools" />
        <div className="cardBody">
          <h3 className="cardTitle">Learning Material</h3>
          <p className="cardDescription">All Learning material needed for what I teach can be found from W3Schools. I’ve been using their website for years and their content is the best! Easy to understand and follow!</p>
        </div>
      </div>
    </div>
  </div>
);

export default HowITeach;


