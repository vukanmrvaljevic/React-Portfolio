import React from "react"
import { Link } from "react-router-dom"
import "../sass/nav.scss"

const Navbar = () => {
  return (
    <div>
      <nav id="hamnav">
        {/* THE HAMBURGER */}
        <label htmlFor="hamburger">&#9776;</label>
        <input type="checkbox" id="hamburger" />
        {/* MENU ITEMS */}
        <div id="hamitems">
          <Link className="links" to="/home">
            <b>Home</b>
          </Link>
          <Link className="links" to="/about">
            <b>About Me</b>
          </Link>
          <Link className="links" to="/work">
            <b>My Work</b>
          </Link>
          <Link className="links" to="/contact">
            <b>Contact-Me</b>
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
