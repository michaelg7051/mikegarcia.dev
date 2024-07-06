import React from 'react';
import Divider from './Divider';
import './Testimonials.scss';

const Testimonials = () => (
  <>
    <Divider bottomStyle={{ fill: '#FFC0C7' }} />
    <div className="testimonials">
      <h3 className="title">Testimonials</h3>
      <div className="cards">
        <div className="uk-card uk-card-default card">
          <img className="uk-border-circle" src="images/samuel-raita.jpg" width="250" height="250" alt="" />
          <div className="testimonial">
            <p className="comment">"Adrienne is an incredible tutor! She has a way of breaking down complex coding concepts and making them easy to understand. I have seen a huge improvement in my frontend coding skills since I started learning from Adrienne."</p>
            <h3 className="sign">Samuel Raita</h3>
          </div>
        </div>
        <div className="uk-card uk-card-default card">
          <img className="uk-border-circle" src="images/joanna-nix.jpg" width="250" height="250" alt="" />
          <div className="testimonial">
            <p className="comment">"I have been working with Adrienne for a few months now and I can confidently say that she is one of the best tutors I have ever had. Her teaching style is patient, clear and effective. I highly recommend her developer tutoring service."</p>
            <h3 className="sign">Joanna Nix</h3>
          </div>
        </div>
        <div className="uk-card uk-card-default card">
          <img className="uk-border-circle" src="images/amit-ranjan.jpg" width="250" height="250" alt="" />
          <div className="testimonial">
            <p className="comment">"Adrienne is amazing! She is very knowledgeable and always willing to go the extra mile to make sure I understand the material. Adrienne is an excellent resource for anyone looking to improve their fullstack coding skills."</p>
            <h3 className="sign">Amit Ranjan</h3>
          </div>
        </div>
        <div className="uk-card uk-card-default card">
          <img className="uk-border-circle" src="images/yusron-el-jihan.jpg" width="250" height="250" alt="" />
          <div className="testimonial">
            <p className="comment">"I was struggling to understand certain coding concepts to develop my dream mobile application, but Adrienne was able to explain them in a way that made them click for me. I highly recommend Adrienne's classes. She is an excellent teacher and has helped me improve my skills significantly."</p>
            <h3 className="sign">Yusron El Jihan</h3>
          </div>
        </div>
      </div>
    </div>
    <Divider topStyle={{ fill: '#FFC0C7' }} />
  </>
);

export default Testimonials;


