import React from 'react';
import styled from 'styled-components';
import Section from '../globals/Section';
import Title from '../globals/Title';
import aboutImg from '../../images/aboutBcg.jpeg';
import {
  setRem,
  setBorder,
  setColor,
  setLetterSpacing,
  media
} from '../../styles';
import { PrimaryButton } from '../globals/Buttons';

const About = () => {
  return (
    <Section>
      <AboutCenter>
        <div className="about-img">
          <img src={aboutImg} alt="About Us" />
        </div>
        <div className="about-info">
          <Title title="About Us"></Title>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <PrimaryButton>Read More</PrimaryButton>
        </div>
      </AboutCenter>
    </Section>
  );
};

const AboutCenter = styled.div`
  width: 90vw;
  margin: 0 auto;

  .about-img,
  .about-info {
    padding: ${setRem(30)};
  }

  .about-img {
    img {
      width: 100%;
      display: block;
      ${setBorder({ width: setRem(6), color: setColor.primaryColor })}
    }
  }

  .about-info {
    p {
      ${setLetterSpacing(3)};
    }
  }

  ${media.desktop`
    width: 100vw;
    max-width: ${setRem(1170)};
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: ${setRem(32)};
    
    .about-img,.about-info {
      padding: 0
      align-self: center;
    }
    .about-info {
      p {
        width: 80%;
      }
    }
  `};
`;

export default About;
