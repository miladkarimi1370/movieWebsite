import React, { useEffect, useState } from "react";
import "./arrowUp.css";
import "animate.css";
export default function ArrowUp() {
  const [isShowArrowUp, setIsShowArrowUp] = useState("invisible");

  useEffect(() => {
    window.onscroll = () => {
      window.scrollY > 800
        ? setIsShowArrowUp("visible")
        : setIsShowArrowUp("invisible");
    };
  }, []);

  function ArrowUpHandler() {
    window.scroll(0, 0);
  }
  return (
    <>
      <div
        className="arrowUp animate__animated  animate__fadeInUp"
        onClick={ArrowUpHandler}
      >
        <i
          className={`fa-solid fa-circle-chevron-up fa-2xl ${isShowArrowUp}`}
          style={{ color: "#9db2bf" }}
        ></i>
      </div>
    </>
  );
}
