import React from 'react';
import Divider from './Divider';
import './AboutMe.scss';

const AboutMe = () => (
  <>
    <Divider bottomStyle={{ fill: '#FFC0C7' }} divStyle={{ position: 'absolute', marginTop: '-100px' }} />
    <div className="aboutMe">
      <h3 className="aboutMeTitle" id="aboutme">About Me</h3>
      <div className="uk-card uk-card-default card">
        <div className="cardBody">
          <div className="bodyLeft">
            <p className="description">I have been teaching coding and programming close to 5 years now, and been offering my services online for the last two years. If you are looking for a tutor that is patient, pedagogic and pragmatic, then I'm the one for you ;) Check out the “what I teach Section” to learn more about what I teach. To learn more about my professional background check out my linkedin and W3Schools public profile</p>
            <h3 className="sign">Adrienne</h3>
          </div>
          <div className="bodyRight">
            <img className="uk-border-circle" width="250" height="250" src="images/avatar.jpg" alt="Adrienne" />
            <h3 className="sign">Adrienne</h3>
          </div>
        </div>
      </div>
    </div>
    <Divider topStyle={{ fill: '#FFC0C7' }} />
  </>
);

export default AboutMe;


