import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styleForSlider.css";
import { useEffect } from "react";
import { useState } from "react";
import TemplateOfSlider from "./TemplateOfSlider";
export default function ShowSlider() {
  const [nowPlayingMovie, setNowPlayingMovie] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=360eec290c1f282ea30004cd946075a7&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((response2) => {
        setNowPlayingMovie(response2.results);
      });
  }, []);
  const nowPlayingMovies =
    nowPlayingMovie.length &&
    nowPlayingMovie.map((movie) => {
      return <TemplateOfSlider key={movie.id} {...movie} />;
    });
  var settings = {
    dots: true,

    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 3000,
    

  };
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <Slider {...settings}>{nowPlayingMovies && nowPlayingMovies}</Slider>
        </div>
      </div>
    </>
  );
}
