import React from "react"
import javascript from "../img/javascript.png"
import mongo from "../img/mongodb.png"
import sass from "../img/sass.png"
import nodejs from "../img/nodejs.png"
import reactNative from "../img/react-native.png"

const About = () => {
  return (
    <div>
      <main id="about">
        <h1 className="lg-heading">
          About
          <span className="text-secondary">Me</span>
        </h1>
        <h2 className="sm-heading">Let me tell you a few things...</h2>
        <div className="about-info">
          <img src="img/portrait.jpg" alt="John Doe" className="bio-image" />

          <div className="bio">
            <h3 className="text-secondary">BIO</h3>
            <p>
              I am a hard working web developer my experience in my past jobs
              gave me the ability to work in highly regulated corporate
              environment. I am looking to grow as a Software Developer i
              attribute this experience thru countless of days working in a fast
              paced environment that helped me gain an ability in problem
              solving and communicating with the user's or customers.
            </p>
          </div>

          <div className="job job-1">
            {/* <h3>123 Webshop</h3>
            <h6>Full Stack Developer</h6> */}
            <p>
              My expertise lies in: React, React Native, JavaScript,
              Express/Node.js, mongoDB, SQL, Ruby
            </p>
            <div className="Project">
              <img
                className="icon animated bounceInDown"
                style={{ maxWidth: "4rem", margin: "0.5rem" }}
                src={javascript}
                alt="C"
              />
              <img
                className="icon animated bounceInDown"
                style={{ maxWidth: "4rem", margin: "0.5rem" }}
                src={mongo}
                alt="C"
              />
              <img
                className="icon animated bounceInDown"
                style={{ maxWidth: "4rem", margin: "0.5rem" }}
                src={sass}
                alt="C"
              />
              <img
                className="icon animated bounceInDown"
                style={{ maxWidth: "4rem", margin: "0.5rem" }}
                src={nodejs}
                alt="C"
              />
              <img
                className="icon animated bounceInDown"
                style={{ maxWidth: "4rem", margin: "0.5rem" }}
                src={reactNative}
                alt="C"
              />
              <img
                className="icon animated bounceInDown"
                style={{ maxWidth: "4rem", margin: "0.5rem" }}
                src="https://icongr.am/devicon/express-original-wordmark.svg?size=128&color=0dab5e"
                alt="C"
              />
            </div>
          </div>
          {/* <div className="job job-2">
            <h3>Designers ABC</h3>
            <h6>Front End Developer</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates perferendis totam enim. Nesciunt porro dolores expedita
              dolor necessitatibus deserunt nemo.
            </p>
          </div>

          <div className="job job-3">
            <h3>Webworks</h3>
            <h6>Graphic Designer</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates perferendis totam enim. Nesciunt porro dolores expedita
              dolor necessitatibus deserunt nemo.
            </p>
          </div> */}
        </div>
      </main>
    </div>
  )
}

export default About
