import React, { useState } from 'react';
import { toast } from 'react-toastify';
import validator from 'validator'
import { sendMessage } from '../actions/message';
import { RECAPTCHA_SITE_KEY } from '../config';
import Divider from './Divider';

import './ContactMe.scss';

const ContactMe = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  const resetForm = () => {
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };
  const onSendButtonClick = async () => {
    if (isDisabled) return;
    setIsDisabled(true);
    if (!(name && email && subject && message)) {
      setIsDisabled(false);
      return toast.error('Please enter all fields!');
    }
    if (!validator.isEmail(email)) {
      setIsDisabled(false);
      return toast.error('Please enter valid email!');
    }
    window.grecaptcha.ready(async () => {
      const sendPromise = window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'sendMessage' })
        .then((token) => sendMessage({ name, email, subject, message, token }))
        .then((status) => {
          setIsDisabled(false);
          if (status) {
            return resetForm();
          }
          throw new Error('Failed');
        });

      toast.promise(sendPromise, {
        pending: 'Sending your message!',
        success: 'Message sent!',
        error: 'Failed to send your message, please try again later!'
      });
    });
  };

  return (
    <>
      <Divider bottomStyle={{ fill: '#47423F' }} />
      <div className="contactMe">
        <h3 className="title" id="contactme">Contact Me</h3>
        <div className="contactMeForm">
          <div className="uk-margin">
            <label className="label">Name</label>
            <input className="uk-input" type="text" placeholder="your name..." onChange={({ target }) => setName(target.value)} value={name} />
          </div>
          <div className="uk-margin">
            <label className="label">Email</label>
            <input className="uk-input" id="email" type="text" placeholder="your email..." onChange={({ target }) => setEmail(target.value)} value={email} />
          </div>
          <div className="uk-margin">
            <label className="label">Subject</label>
            <input className="uk-input" id="subject" type="text" placeholder="provide a subject..." onChange={({ target }) => setSubject(target.value)} value={subject} />
          </div>
          <div className="uk-margin">
            <label className="label">Message</label>
            <textarea className="uk-textarea" id="message" type="text" placeholder="your message to us..." rows="5" onChange={({ target }) => setMessage(target.value)} value={message} />
          </div>
          <div className="uk-margin actionBar">
            <button className="uk-button uk-button-default uk-button-medium sendButton" onClick={onSendButtonClick} disabled={isDisabled}>Send</button>
          </div>
        </div>
      </div>
      <Divider topStyle={{ fill: '#47423F' }} />
    </>
  );
};

export default ContactMe;


