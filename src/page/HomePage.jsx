import React from "react";
import Header from "../components/Header/Header";
import Content from "../components/Content/Content";
import Footer from "../components/Footer/Footer";
import ArrowUp from "../components/ArrowUp/ArrowUp";
import Tarikh from "../components/Tarikh/Tarikh";
import ShowSlider from "../components/Slider/ShowSlider";

export default function HomePage() {
  return (
    <>
      <Header />
      <ShowSlider />
      <Content />
      <Footer />
      <ArrowUp />
    </>
  );
}
