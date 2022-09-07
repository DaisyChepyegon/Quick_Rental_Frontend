import {Route, Routes} from "react-router-dom";
import { useState } from "react";
import Home from "./Home/Home";
import Houses from "./Houses/Houses";
import Header from "./Header/Header";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  return (
    <>
    <Header setLoggedIn={setLoggedIn}/>
    <div className="container">

        <Routes>
          <Route exact path="/" element={<Home loggedIn={loggedIn} />} />
          <Route exact path="/houses" element={<Houses  />} />
          <Route exact path="/login" element={<Login setLoggedIn={setLoggedIn}/>} />
          <Route exact path="/signup" element={<Signup />} />

        </Routes>
      </div>
    </>
  );
}

export default App;
