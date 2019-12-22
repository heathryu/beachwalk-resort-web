import styled from 'styled-components';
import { setColor, setRem } from '../../styles';

const Section = styled.section`
  padding: ${setRem(64)} 0;
  background: ${props => props.backgroundColor || setColor.mainWhite};
`;

export default Section;
