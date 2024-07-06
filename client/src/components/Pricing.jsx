import React from 'react';
import './Pricing.scss';

const Pricing = () => (
  <div className="pricing">
    <h3 className="title" id="pricing">Pricing</h3>
    <span className="offer">I offer various price options. Choose the one that best fit you</span>
    <div className="cards">
      <div className="cardHolder">
        <span className="bestTag"></span>
        <div className="uk-card uk-card-default card">
          <span className="noOfLessons">1</span>
          <span className="lesson">Lesson</span>
          <span className="price">$19.99</span>
          <span className="noOfHours">2</span>
          <span className="hour">Hour Tutoring</span>
          <span className="save"></span>
        </div>
      </div>
      <div className="cardHolder">
        <span className="bestTag"></span>
        <div className="uk-card uk-card-default card">
          <span className="noOfLessons">3</span>
          <span className="lesson">Lessons</span>
          <span className="price">$59.99</span>
          <span className="noOfHours">6</span>
          <span className="hour">Hour Tutoring</span>
          <span className="save">Save 10%</span>
        </div>
      </div>
      <div className="cardHolder">
        <span className="bestTag"></span>
        <div className="uk-card uk-card-default card">
          <span className="noOfLessons">6</span>
          <span className="lesson">Lessons</span>
          <span className="price">$99.99</span>
          <span className="noOfHours">12</span>
          <span className="hour">Hour Tutoring</span>
          <span className="save">Save 20%</span>
        </div>
      </div>
      <div className="cardHolder">
        <span className="bestTag">Best Value!</span>
        <div className="uk-card uk-card-default card">
          <span className="noOfLessons">9</span>
          <span className="lesson">Lessons</span>
          <span className="price">$109.99</span>
          <span className="noOfHours">18</span>
          <span className="hour">Hour Tutoring</span>
          <span className="save">Save 40%</span>
        </div>
      </div>
    </div>
    <span className="offer">We will agree on time and schedule that best fit your :)</span>
    <a className="uk-button uk-button-default uk-button-medium contactMe" href="#contactme">Contact Me!</a>
  </div>
);

export default Pricing;


