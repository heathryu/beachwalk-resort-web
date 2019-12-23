import { css } from 'styled-components';
import aboutImg from './images/aboutBcg.jpeg';

export const setColor = {
  primaryColor: '#af9a7d',
  mainWhite: '#fff',
  mainBlack: '#222',
  mainGrey: '#ececec',
  lightGrey: '#f7f7f7'
};

export const setFont = {
  main: "font-family: 'Lato', sans-serif;",
  slanted: "font-family: 'Courgette', cursive;"
};

export const setFlex = ({ x = 'center', y = 'center' } = {}) => {
  return `display: flex; justify-content:${x}; align-items:${y};`;
};

export const setBackground = ({
  img = aboutImg,
  color = 'rgba(0, 0, 0, 0)'
} = {}) => {
  return `background: linear-gradient(${color}, ${color}),
    url(${img}) center/cover fixed no-repeat;`;
};

export const setRem = (pixels = 16) => {
  return `${pixels / 16}rem`;
};

export const setLetterSpacing = (pixels = 2) => {
  return `letter-spacing: ${pixels}px;`;
};

export const setBorder = ({
  width = '2px',
  style = 'solid',
  color = 'black'
} = {}) => {
  return `border: ${width} ${style} ${color}`;
};

export const setTransition = ({
  property = 'all',
  time = '0.3s',
  timing = 'ease-in-out'
} = {}) => {
  return `transition: ${property} ${time} ${timing}`;
};

export const setShadow = {
  light: 'box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75)',
  dark: 'box-shadow: 6px 6px 5px 0px rgba(0,0,0,0.75)',
  darkest: 'box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75)'
};

const sizes = {
  large: 1200,
  desktop: 992,
  tablet: 768,
  phone: 576
};

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});
