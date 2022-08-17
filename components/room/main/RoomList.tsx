import React from "react";
import { useSelector } from "store";
import styled from "styled-components";
import RoomCard from "./RoomCard";

const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-top: 50px;
  width: 100%;
`;

const RoomList = () => {
  const rooms = useSelector((state) => state.room.rooms);
  console.log(rooms);
  return (
    <Container>
      {rooms.map((room) => (
        <RoomCard key={room.id} room={room} />
      ))}
    </Container>
  );
};

export default RoomList;
