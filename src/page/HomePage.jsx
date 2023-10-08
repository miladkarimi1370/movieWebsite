import React from "react";
import Header from "../components/Header/Header";
import Content from "../components/Content/Content";
import Footer from "../components/Footer/Footer";
import ArrowUp from "../components/ArrowUp/ArrowUp";
import ShowSlider from "../components/Slider/ShowSlider";
import Filter from "../components/Search/Filter";

export default function HomePage() {
  return (
    <>
      <Header />
      <ShowSlider />
      <Filter />
      <Content />
      <Footer />
      <ArrowUp />
    </>
  );
}
