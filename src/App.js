import React from "react";
import "./style.css";
import HomePage from "./page/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SpecificMovie from "./page/SpecificMovie";
import { ContextProvider } from "./contextfile/context";

export default function App() {
  return (
    <>
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<HomePage />} />
            <Route path="/SpecificMovie" element={<SpecificMovie />} />
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </>
  );
}
