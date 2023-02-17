import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Area from "./components/Area";
import PrefectureInfo from "./components/PrefectureInfo";
import Favorites from "./components/Favorites";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/area/:id" element={<Area />}></Route>
          <Route path="/prefectures/:id" element={<PrefectureInfo />}></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
