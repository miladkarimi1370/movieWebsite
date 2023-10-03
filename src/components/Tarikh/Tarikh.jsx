import React from "react";
import "./styleOfTarikh.css";
import { useState } from "react";
import { useEffect } from "react";
export default function Tarikh() {
  const [dateNow, setDateNow] = useState("");
  useEffect(() => {
    const T = setInterval(() => {
      setDateNow(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(T);
  }, []);
  return (
    <>
      <p className="text-center text-white p-3 custom-tarikh bg-info rounded-pill fw-bold">
        {dateNow && dateNow}
      </p>
    </>
  );
}
