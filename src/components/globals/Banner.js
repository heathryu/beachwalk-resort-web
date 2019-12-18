import React from 'react';
import styled from 'styled-components';
import { setColor } from '../../styles';

const Banner = ({ className, title, text, greeting, children }) => {
  return (
    <div className={className}>
      <h1>
        {greeting} <span>{title}</span>
      </h1>
      <div className="info">
        <p>{text}</p>
        {children}
      </div>
    </div>
  );
};

const BannerWrapper = styled(Banner)`
  background: rgba(0, 0, 0, 0.7);
  text-align: center;
  padding: 60px 32px; /* TODO: Use setRem */
  letter-spacing: 3px; /* TODO: Use setLetterSpacing */
  color: ${setColor.mainWhite};

  h1 {
    text-transform: capitalize;
    font-size: 48px;
    /* TODO: Use setRem */
    color: ${setColor.primaryColor};
    span {
      color: ${setColor.mainWhite};
    }
  }

  p {
    width: 85%;
    margin: 0 auto;
  }

  @media (min-width: 768px) {
    width: 70vw;
    border: 6px solid ${setColor.primaryColor}; /* TODO: use setBorder */
    p {
      width: 75%;
    }
  }

  h1 {
    /* TODO: Add animation */
  }
  .info {
    /* TODO: Add animation */
  }
`;

export default BannerWrapper;
