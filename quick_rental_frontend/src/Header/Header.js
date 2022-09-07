import { NavLink } from "react-router-dom"
import {useNavigate} from "react-router-dom"

 function Header({setLoggedIn}) {
  const navigate = useNavigate();
//navigate back to login after logout 
  function handleClick() {
    setLoggedIn(false);
    navigate("/login");
    localStorage.clear()
  }

  return (
    <nav className="nav">
        <NavLink to="/" >Home </NavLink>
        <NavLink to="/houses">Houses</NavLink>
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>

      <button onClick={handleClick}>Logout</button>

    </nav>
  )
}


export default Header