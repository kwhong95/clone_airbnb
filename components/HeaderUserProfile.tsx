import React, { useState } from "react";
import { useDispatch } from "react-redux";
import OutsideClickHandler from "react-outside-click-handler";
import { logoutAPI } from "lib/api/auth";
import { userActions } from "store/user";

import HambugerIcon from "../public/static/svg/header/hambuger.svg";
import { useSelector } from "store";

const HeaderUserProfile = () => {
  const dispatch = useDispatch();
  //* 유저 메뉴 열고, 닫힘 여부
  const [isUsermenuOpened, setIsUsermenuOpened] = useState(false);
  const userProfileImage = useSelector((state) => state.user.profileImage);

  //* 로그아웃 하기
  const logout = async () => {
    try {
      await logoutAPI();
      dispatch(userActions.initUser());
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <OutsideClickHandler
        onOutsideClick={() => {
          if (isUsermenuOpened) {
            setIsUsermenuOpened(false);
          }
        }}
      >
        <button
          className="header-user-profile"
          type="button"
          onClick={() => setIsUsermenuOpened(!isUsermenuOpened)}
        >
          <HambugerIcon />
          <img
            src={userProfileImage}
            className="header-user-profile-image"
            alt=""
          />
        </button>
        {isUsermenuOpened && (
          <ul className="header-usermenu">
            <li>숙소 관리</li>
            <li>숙소 등록하기</li>
            <div className="header-usermenu-divider" />
            <li role="presentation" onClick={logout}>
              로그아웃
            </li>
          </ul>
        )}
      </OutsideClickHandler>
    </>
  );
};

export default HeaderUserProfile;
