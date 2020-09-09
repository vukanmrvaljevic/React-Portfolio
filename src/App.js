import React from "react"
import { Route } from "react-router-dom"
import "./App.scss"
import "./sass/style.scss"
import Home from "./screens/Home"
import About from "./screens/About"
import Work from "./screens/Work"
import Contact from "./screens/Contact"
import Navbar from "./Navbar/Navbar"

function App() {
  return (
    <div>
      <Navbar />
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/home" exact>
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/work">
        <Work />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
    </div>
  )
}

export default App
