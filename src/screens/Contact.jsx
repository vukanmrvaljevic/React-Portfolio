import React from "react"
import PopUp from "./PopUp"

const Reach = () => {
  //   let url1 = "https://www.linkedin.com/in/vukan-mrvaljevic/"
  //   let url2 = "https://github.com/vukanmrvaljevic"
  return (
    <div>
      <main id="contact">
        <h1 className="lg-heading">
          Contact
          <span className="text-secondary">Me</span>
        </h1>
        <h2 className="sm-heading">This is how you can reach me...</h2>
        <div className="boxes">
          <div>
            <span className="text-secondary">Email: </span>
            <span className="text-secondary-email">
              vukanmrvaljevic@gmail.com
            </span>
          </div>
          <div>
            <span className="text-secondary">Phone: </span> (347) 712-8131
          </div>
        </div>
        {/* <div className="icons">
          <span className="text-secondary">Other Forms of Contact</span>
          <a href={url1} target="_blank" rel="noopener noreferrer">
            <i class="fab fa-twitter fa-2x"></i>
          </a>
          <a href={url2} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github fa-2x"></i>
          </a>
        </div> */}
        <PopUp />
      </main>
    </div>
  )
}

export default Reach
