import styled from 'styled-components';
import {
  setColor,
  setRem,
  setBorder,
  setLetterSpacing,
  setFont,
  setTransition
} from '../../styles';

export const PrimaryButton = styled.button`
  display: inline-block;
  background: ${setColor.primaryColor};
  color: ${setColor.mainWhite};
  text-transform: capitalize;
  font-size: ${setRem(18)};
  text-decoration: none;
  cursor: pointer;

  ${setFont.main};
  ${setLetterSpacing(3)};

  padding: ${setRem(17)} ${setRem(36)};
  ${setBorder({ color: setColor.primaryColor })};

  ${setTransition()};

  ${props =>
    `margin: ${props.t || 0} ${props.r || 0} ${props.b || 0} ${props.l || 0}`};

  &:hover {
    background: transparent;
    color: ${setColor.primaryColor};
  }
`;
