import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Home from "./pages/Home";
import Create from "./pages/Create";

import "./App.css";

function App() {
  const [anime, setAnime] = useState([]);

  function addAnime(newAnime) {
    setAnime([...anime, newAnime])
  }

  return (
    <Router>
      <nav className="navbar">
        <Link to="/" className="navbar_title">
          <h1>AnimeHub</h1>
        </Link>
        <div className="navbar_links">
          <Link to="/" className="navbar_link">
            Home
          </Link>
          <Link to="/create" className="navbar_link">
            Share
          </Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home anime={anime} setAnime={setAnime}/>}/>
        <Route path="/create" element={<Create addAnime={addAnime}/>} />
      </Routes>
    </Router>
  );
}

export default App;
