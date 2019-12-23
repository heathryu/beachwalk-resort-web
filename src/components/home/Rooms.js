import React from 'react';
import styled from 'styled-components';
import Title from '../globals/Title';
import Section from '../globals/Section';
import Room from './Room';
import { setColor, setRem, media } from '../../styles';
import rooms from '../../roomsData';

const Rooms = () => {
  return (
    <Section backgroundColor={setColor.lightGrey}>
      <Title title="Our Rooms" center />
      <RoomsCenter>
        {rooms.map(room => (
          <Room key={room.id} room={room} />
        ))}
      </RoomsCenter>
    </Section>
  );
};

const RoomsCenter = styled.div`
  width: 90vw;
  margin: 0 auto;

  ${media.large`
    width: 100vw;
    max-width: 1170px;
  `};

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  grid-column-gap: ${setRem(45)};
`;

export default Rooms;
