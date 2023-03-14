import React from "react";
import { Outlet } from "react-router-dom";
import MainMenu from "./MainMenu";
import TitleMenu from "./TitleMenu";

const Navigation = () => {
  return (
    <div>
      <MainMenu></MainMenu>
      <TitleMenu></TitleMenu>
      <Outlet />
    </div>
  );
};

export default Navigation;
