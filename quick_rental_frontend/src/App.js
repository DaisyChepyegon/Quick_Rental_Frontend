import {Route, Routes} from "react-router-dom";
import Home from "./Home/Home";
import Houses from "./Houses/Houses";
import Header from "./Header/Header";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";

function App() {
  return (
    <>
    <Header />
    <div className="container">

        <Routes>
          <Route exact path="/" element={<Home  />} />
          <Route exact path="/houses" element={<Houses  />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />

        </Routes>
      </div>
    </>
  );
}

export default App;
