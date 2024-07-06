import React from 'react';
import AboutMe from './AboutMe';
import ContactMe from './ContactMe';
import Footer from './Footer';
import HowITeach from './HowITeach';
import IntroPanel from './IntroPanel';
import NavigationBar from './NavigationBar';
import Pricing from './Pricing';
import Testimonials from './Testimonials';
import WhatITeach from './WhatITeach';

const Home = () => (
  <>
    <NavigationBar />
    <IntroPanel />
    <AboutMe />
    <WhatITeach />
    <HowITeach />
    <Testimonials />
    <Pricing />
    <ContactMe />
    <Footer />
  </>
);

export default Home;
