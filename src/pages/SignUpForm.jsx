import React from "react";
import { signInWithGooglePopup } from "./../components/Store/Firebase";

const LoginPage = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };
  return (
    <div>
      <button onClick={logGoogleUser}>sign in with Google</button>
    </div>
  );
};

export default LoginPage;
