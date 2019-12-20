import React from 'react';
import Hero from '../globals/Hero';
import Banner from '../globals/Banner';
import { PrimaryButton } from '../globals/Buttons';
import homeImg from '../../images/homeBcg.jpeg';

const Header = () => {
  return (
    <Hero img={homeImg}>
      <Banner
        greeting="Welcome to"
        title="Beachwalk Resort"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      >
        <PrimaryButton t="1rem">View Details</PrimaryButton>
      </Banner>
    </Hero>
  );
};

export default Header;
