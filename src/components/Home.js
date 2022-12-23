import React from "react";
import "../style/Home.scss";
import { Slider } from "./Home/Slider";
import { StrictMode } from "react";
import { Box } from "./Home/Box";
import { Header } from "./Home/Header";
export const Home = () => {
  return (
    <div>
      <Header></Header>
      <Slider></Slider>
      <Box></Box>
    </div>
  );
};
