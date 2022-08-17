import React from "react";
import Link from "next/link";
import Button from "components/common/Button";
import SearchIcon from "../../../public/static/svg/search/white_search.svg";

const SearchRoomButton: React.FC = () => {
  return (
    <Link href="/room">
      <a>
        <Button icon={<SearchIcon />} color="amaranch" width="89px">
          검색
        </Button>
      </a>
    </Link>
  );
};

export default SearchRoomButton;
