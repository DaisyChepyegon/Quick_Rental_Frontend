import {Route, Routes} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">

        <Routes>
          <Route exact path="/" element={<Home  />} />
          <Route exact path="/houses" element={<Houses  />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />

        </Routes>
      
    </div>
  );
}

export default App;
