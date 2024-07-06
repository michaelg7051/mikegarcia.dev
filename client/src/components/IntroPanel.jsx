import React from 'react';
import './IntroPanel.scss';

const IntroPanel = () => (
  <div className="uk-background-cover uk-panel uk-flex uk-flex-center uk-flex-middle introPanel">
    <div className="contents">
      <img className="uk-border-circle" width="145" height="145" src="images/avatar.jpg" alt="Adrienne" />
      <div className="title">
        <span className="subTitle">Online tutoring with Adrienne</span>
        <h3 className="mainTitle">Learn Coding & Programming</h3>
      </div>
      <a className="uk-button uk-button-default uk-button-medium actionButton" href="#whatiteach">What I teach</a>
      <div className="highlights">
        <div className="highlight">
          <span className="point-1">1 & 1</span>
          <span className="point-2">Online Tutoring</span>
        </div>
        <div className="highlight">
          <span className="point-1">Accelerate</span>
          <span className="point-2">Code Learning</span>
        </div>
        <div className="highlight">
          <span className="point-1">Improve</span>
          <span className="point-2">Coding skills</span>
        </div>
        <div className="highlight">
          <span className="point-1">Build</span>
          <span className="point-2">Developer Confidence</span>
        </div>
      </div>
    </div>
  </div>
);

export default IntroPanel;


