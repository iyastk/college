import React from "react";

import Slider from "../components/Slider";
import QuickLink from "../components/QuickLink";
import MissionCards from "../components/MissionCards";
import PrincipalCard from "../components/PrincipalCard";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <QuickLink></QuickLink>
      <MissionCards></MissionCards>
      <PrincipalCard></PrincipalCard>
      <Footer></Footer>
    </div>
  );
};

export default Home;
