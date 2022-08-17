import React from "react";
import Link from "next/link";
import { useSelector } from "store";
import Button from "components/common/Button";
import SearchIcon from "../../../public/static/svg/search/white_search.svg";
import { makeQueryString } from "lib/utils";

const SearchRoomButton: React.FC = () => {
  const searchRoom = useSelector((state) => state.searchRoom);

  const roomListHref = makeQueryString("/room", searchRoom);

  return (
    <Link href={roomListHref}>
      <a>
        <Button icon={<SearchIcon />} color="amaranch" width="89px">
          검색
        </Button>
      </a>
    </Link>
  );
};

export default SearchRoomButton;
