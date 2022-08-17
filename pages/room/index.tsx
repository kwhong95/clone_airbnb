import React from "react";
import { NextPage } from "next";
import RoomMain from "components/room/main/RoomMain";
import { getRoomListAPI } from "lib/api/room";
import { roomActions } from "store/room";

const index: NextPage = () => <RoomMain />;

index.getInitialProps = async ({ store, query }: any) => {
  const {
    checkInDate,
    checkOutDate,
    adultCount,
    childrenCount,
    latitude,
    longitude,
    limit,
    page = "1",
  } = query;

  try {
    const { data } = await getRoomListAPI({
      checkInDate,
      checkOutDate,
      adultCount,
      childrenCount,
      latitude,
      longitude,
      limit: limit || "20",
      page: page || "1",
      //? 한글은 encode 해준다.
      location: query.location
        ? encodeURI(query.location as string)
        : undefined,
    });
    store.dispatch(roomActions.setRooms(data));
  } catch (e) {
    console.log(e);
  }

  return {};
};

export default index;
