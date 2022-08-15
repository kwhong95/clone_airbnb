import React from "react";
import { NextPage } from "next";
import dynamic from "next/dynamic";

const RegisterRoomGeoMetry = dynamic(
  import("../../../components/room/register/RegisterRoomGeometry"),
  { ssr: false }
);

const geometry: NextPage = () => <RegisterRoomGeoMetry />;

export default geometry;
