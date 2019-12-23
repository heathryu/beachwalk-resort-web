import React from 'react';
import { SmallButton } from '../globals/Buttons';
import styled from 'styled-components';
import {
  setRem,
  setLetterSpacing,
  setTransition,
  setColor,
  setBorder,
  setShadow
} from '../../styles';
import PropTypes from 'prop-types';

const Room = ({
  className,
  room: { img = '', title = '', info = '', price = 0 }
}) => {
  return (
    <article className={className}>
      <div className="img-container">
        <img src={img} alt={title} />
        <div className="price">${price}</div>
      </div>
      <div className="room-info">
        <h4>{title}</h4>
        <p>{info}</p>
        <SmallButton>More Info</SmallButton>
      </div>
    </article>
  );
};

Room.propTypes = {
  room: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  })
};

export default styled(Room)`
  background: ${setColor.mainWhite};
  margin: ${setRem(32)} 0;
  ${setShadow.light};
  ${setTransition()};

  &:hover {
    ${setShadow.dark};
  }

  .img-container {
    background: ${setColor.mainBlack};
    position: relative;

    .price {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: ${setColor.mainWhite};
      ${setLetterSpacing(5)};
      font-size: ${setRem(22)};
      padding: ${setRem(10)} ${setRem(33)};
      ${setBorder({ color: setColor.mainWhite })};
      opacity: 0;
      ${setTransition()};
    }

    img {
      width: 100%;
      display: block;
      ${setTransition};
    }

    &:hover {
      img {
        opacity: 0.5;
      }
      .price {
        opacity: 1;
      }
    }
  }

  .room-info {
    padding: ${setRem()};

    h4 {
      text-transform: capitalize;
      ${setLetterSpacing()};
    }

    p {
      ${setLetterSpacing()};
    }
  }
`;
