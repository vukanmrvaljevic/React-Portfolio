import React from "react"
import { ExternalLink } from "react-external-link"
import Quiz from "../img/Non-Sensical-Quiz.png"
import Shelter from "../img/Barc-Shelter.png"
import Covid19 from "../img/covid-19 (home-page).png"

const Work = () => {
  const myStyle = {
    width: "370px",
    height: "300px",
    borderRadius: "10px",
  }
  return (
    <div>
      <main id="work">
        <h1 className="lg-heading">
          My
          <span className="text-secondary">Work</span>
        </h1>
        <h2 className="sm-heading">Check out some of my projects...</h2>
        <div className="projects">
          <div className="item">
            <img src={Covid19} alt="Covid" style={myStyle} />
            <ExternalLink
              href="https://wizardly-pasteur-cadc61.netlify.app/"
              className="btn-light"
            >
              <i className="fas fa-eye"></i> Covid-19
            </ExternalLink>
            <ExternalLink
              href="https://github.com/vukanmrvaljevic/Covid-19"
              className="btn-dark"
            >
              <i className="fab fa-github"></i> Github
            </ExternalLink>
          </div>
          <div className="item">
            {/* <a href="#!"> */}
            <img src={Shelter} alt="Quiz" style={myStyle} />
            {/* </a> */}
            <ExternalLink
              href="https://silly-bhabha-ac3008.netlify.app/"
              className="btn-light"
            >
              <i className="fas fa-eye"></i> Barch-Shelter
            </ExternalLink>
            <ExternalLink
              href="https://github.com/vukanmrvaljevic/Barc-Shelter"
              className="btn-dark"
            >
              <i className="fab fa-github"></i> Github
            </ExternalLink>
          </div>
          <div className="item">
            <a href="#!" target="_blank">
              <img src="img/projects/project4.jpg" alt="Project" />
            </a>
            <ExternalLink href="https://www.tmz.com/" className="btn-light">
              <i className="fas fa-eye"></i> Workout-Website
            </ExternalLink>
            <ExternalLink
              href="https://github.com/vukanmrvaljevic/Final_Project"
              className="btn-dark"
            >
              <i className="fab fa-github"></i> Github
            </ExternalLink>
          </div>
          <div className="item">
            <img src={Quiz} alt="Quiz" style={myStyle} />
            <ExternalLink
              href="https://vukanmrvaljevic.github.io/Non-Sensical-Quiz/"
              className="btn-light"
            >
              <i className="fas fa-eye"></i> Non-Sensical Quiz
            </ExternalLink>
            <ExternalLink
              href="https://github.com/vukanmrvaljevic/Non-Sensical-Quiz"
              className="btn-dark"
            >
              <i className="fab fa-github"></i> Github
            </ExternalLink>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Work
