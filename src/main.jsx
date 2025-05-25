import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/main.css";
import Characters from "./components/Characters";
import Movies from "./components/Movies";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Spells from "./components/Spells";
import Quiz2 from "./components/Quiz2";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <BrowserRouter>
      <div className="menu">
        <nav>
          <ul>
            <li>
              <Link to="/wstep">Home</Link>
            </li>
            <li>
              <Link to="/characters">Characters</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
            <li>
              <Link to="/spells">Spells</Link>
            </li>
            <li>
              <Link to="/quizes">Quiz</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/characters" element={<Characters />} />
        <Route path="/spells" element={<Spells />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/quizes" element={<Quiz2 />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>
);

