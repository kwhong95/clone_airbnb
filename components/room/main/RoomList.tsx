import React from "react";
import { useSelector } from "store";
import styled, { css } from "styled-components";
import RoomCard from "./RoomCard";

const Container = styled.ul<{ showMap: boolean }>`
  display: flex;
  flex-wrap: wrap;
  padding-top: 50px;
  width: 100%;
  ${({ showMap }) =>
    showMap &&
    css`
      flex-direction: column;
    `}
`;

interface IProps {
  showMap: boolean;
}

const RoomList: React.FC<IProps> = ({ showMap }) => {
  const rooms = useSelector((state) => state.room.rooms);
  console.log(rooms);
  return (
    <Container showMap={showMap}>
      {rooms.map((room) => (
        <RoomCard key={room.id} room={room} showMap={showMap} />
      ))}
    </Container>
  );
};

export default RoomList;
