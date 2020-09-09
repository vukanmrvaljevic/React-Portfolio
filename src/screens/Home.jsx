import React from "react"

const home = () => {
  let url = "https://www.linkedin.com/in/vukan-mrvaljevic/"
  return (
    <div id="background-picture">
      <main id="home">
        <h1 className="lg-heading">
          Vukan
          <span className="text-secondary">Mrvaljevic</span>
        </h1>
        <h2 className="sm-heading">Web Developer, Programmer & Designer</h2>
        <div className="icons">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>

          <a
            href="https://github.com/vukanmrvaljevic"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github fa-2x"></i>
          </a>
        </div>
      </main>
    </div>
  )
}

export default home
