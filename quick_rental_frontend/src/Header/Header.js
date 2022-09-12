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

  //add the navigation links
  return (
    <nav className="nav">
        <NavLink to="/" >Home </NavLink>
        <NavLink to="/houses">Houses</NavLink>
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>

      <p onClick={handleClick}>Logout</p>

    </nav>
  )
}


export default Header