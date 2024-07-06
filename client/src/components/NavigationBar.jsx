import React from 'react';

import './NavigationBar.scss';

const closeSliderMenu = () => {
  const backdrop = document.querySelector('.backdrop');
  const sideDrawer = document.querySelector('.mobileHeader');

  backdrop.style.display = 'none';
  sideDrawer.classList.remove('open');
};
const openSliderMenu = () => {
  const backdrop = document.querySelector('.backdrop');
  const sideDrawer = document.querySelector('.mobileHeader');

  backdrop.style.display = 'block';
  sideDrawer.classList.add('open');
};

const NavigationBar = () => {
  return (
    <>
      <div className="backdrop" onClick={closeSliderMenu}></div>
      <div className="mainHeader">
        <div className="headerTitle">
          <a href="/">TUTOR </a>
          <a className="headerTitlename" href="/">Adrienne</a>
        </div>
        <div className="menuItems">
          <a className="menuItem" href="#aboutme">About</a>
          <a className="menuItem" href="#whatiteach">What I Teach</a>
          <a className="menuItem" href="#pricing">Pricing</a>
          <a className="menuItem" href="#contactme">Contact</a>
        </div>
        <button id="menuToggleButton" className="menuToggleButton" onClick={openSliderMenu}>Menu</button>
      </div>
      <div className="mobileHeader">
        <div className="mobileHeaderTitle">
          <span className="menuText">Menu</span>
        </div>
        <div className="mobileMenuItems" onClick={closeSliderMenu}>
          <a className="mobileMenuItem" href="#aboutme">About</a>
          <a className="mobileMenuItem" href="#whatiteach">What I Teach</a>
          <a className="mobileMenuItem" href="#pricing">Pricing</a>
          <a className="mobileMenuItem" href="#contactme">Contact</a>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
