import React from "react";
import Logo from "../images/logo.png";
import Links from "./Utilities/Links";

function TitleMenu() {
  return (
    <div className=" flex p-1 bg-white justify-between items-center px-20 shadow-md sticky top-0  z-50 ">
      <img src={Logo} width="250rem" height="100rem" alt="college" />
      <div className="flex gap-10 mr-10">
        <Links linkText="Home" linkUrl="/"></Links>
        <Links linkText="About" linkUrl="/About"></Links>
        <Links linkText="Admission" linkUrl="/Admission"></Links>
        <Links linkText="Department" linkUrl="/Department"></Links>
        <Links linkText="contact" linkUrl="/contact"></Links>
        <Links linkText="Login" linkUrl="/signIn"></Links>
      </div>
    </div>
  );
}

export default TitleMenu;
