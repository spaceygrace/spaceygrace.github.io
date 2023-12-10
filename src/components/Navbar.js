import { NavLink } from "react-router-dom"
import { useState } from "react"

const Navbar = () => {
  const [ showNavBar, setShowNavBar ] = useState(false);
  const handleShowNavbar = () => {
    setShowNavBar(!showNavBar)
  }

  return (
    <nav class="navbar">
      <div class="nav-container">
        <div class="logo">
          <span class="fa-regular fa-heart"/>
        </div>
        <div class="nav-menu" onClick={handleShowNavbar} >
          <span class="fa-solid fa-bars"/>
        </div>
        <div className={`nav-elements ${showNavBar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
                <NavLink to="/details">Details</NavLink>
            </li>
            <li>
              <NavLink to="/faq">FAQ</NavLink>
            </li>
            <li>
              <NavLink to="/gallery">Gallery</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Navbar;