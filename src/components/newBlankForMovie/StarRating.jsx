import React, { useState } from "react";

import { Rating } from "react-simple-star-rating";
export default function StarRating() {
  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
  };
  const onPointerEnter = () => console.log("Enter");
  const onPointerLeave = () => console.log("Leave");
  const onPointerMove = (value, index) => console.log(value, index);
  return (
    <>
      <div className="App">
        <Rating
          onClick={handleRating}
          onPointerEnter={onPointerEnter}
          onPointerLeave={onPointerLeave}
          onPointerMove={onPointerMove}
        />
        <div>
            <h6 className="text-center">3.18 from 698 votes</h6>
        </div>
      </div>
    </>
  );
}
