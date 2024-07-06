import React, { useEffect } from "react";
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import { RECAPTCHA_SITE_KEY } from './config';

const App = () => {
  useEffect(() => {
    // Attach Recaptcha script
    const id = 'recaptchaScript'
    const isTagExist = document.getElementById(id);

    if (!isTagExist) {
      const script = document.createElement("script");

      script.id = id;
      script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;

      document.body.appendChild(script);
    }
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<div>No page found</div>} />
      </Routes>
    </div>
  );
}

export default App;
