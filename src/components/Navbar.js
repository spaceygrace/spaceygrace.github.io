import { useState } from "react"
import { NavLink } from "react-router-dom"

export default function Navbar  ()  {
  const [ showNavBar, setShowNavBar ] = useState(false);
  const handleShowNavbar = () => {
    setShowNavBar(!showNavBar)
  }

  return (
    <nav class="navbar">

      <div class="nav-menu" onClick={handleShowNavbar} >
        <span class="fa-solid fa-bars"/>
      </div>

      <div class="flexcol">
        <div class="flexrow">
          <div id="lily" class="flexrow">
            <span id="lily1">L</span>
            <span id="lily2">ily</span>
          </div>
          <div id="and">&</div>
          <div id="dan" class="flexrow">
            <span id="dan1">D</span>
            <span id="dan2">anny</span>
          </div>
        </div>

        <div class="flexcol">
            <hr id="line" width="100%" size="1" align="left"/>
          <h2>ARE GETTING MARRIED</h2>
        </div>
      </div>

      <div className={`nav-links ${showNavBar && 'active'}`}>
        <ul class="link-list">
          <li><NavLink to="/home">Home</NavLink></li>
          <li><NavLink to="/details">Details</NavLink></li>
          <li><NavLink to="/gallery">Gallery</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}
