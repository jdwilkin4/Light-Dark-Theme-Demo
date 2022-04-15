import React from "react";
import { Homepage } from "./pages/Homepage";
import { RickSanchezPage } from "./pages/RickSanchez";
import { MortySmithPage } from "./pages/MortySmith";
import ThemeBtn from "./components/ThemeBtn";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
function App() {
  return (
    <>
      <ThemeBtn />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/rick" element={<RickSanchezPage />} />
        <Route path="/morty" element={<MortySmithPage />} />
      </Routes>
    </>
  );
}

export default App;
