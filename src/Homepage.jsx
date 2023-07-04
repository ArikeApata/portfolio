import { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Skills from "./Skills";
import axios from "axios";
import "./style.css";

// import banner from"./banner-image.jpeg"

const Homepage = ({ projects, submit }) => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        "http://localhost:4000/new",
        {
          yourName: inputs.name,
          email: inputs.email,
          describeYourProject: inputs.description,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log("worked!!", res);
        window.location.reload();
      });

    // fetch("http://localhost:4000/new", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     yourName: inputs.name,
    //     email: inputs.email,
    //     describeYourProject: inputs.description,
    //   }),
    // })
    // .then(res => res.json())
    // .then(data => console.log("worked!", data))
  };

  return (
    <div className="home">
      <div className=" ">
        <Navbar />
        <div className="content">
          <div className="banner">
            <div class="py-4 hero-image h-100">
              <div class="hero-text">
                <h1>Hi! My name is Priscilla Apata.</h1>
                <p>
                  And I'm a Fullstack Web Developer{" "}
                  <span>
                    <code>:)</code>
                  </span>
                </p>
                <a className="btn project-button" href="#contact">
                  Hire Now
                </a>
              </div>
            </div>
          </div>

          <div className="main-content">
            <div className="about" id="about">
              <h2 className="main text-center py-3">About </h2>
              {/* <p className="text-center p-3">
                Find out more about me especially what I do as a web developer
                including my skillset as a programmer
              </p> */}
              <div className="about-description">
                <div className="row ">
                  <div className="col-6">
                    <h5 className="">Who am I?</h5>
                    <p className="about-text">
                      Passionate about crafting exceptional web experiences, I
                      am a dedicated and detail-oriented web developer. With a
                      keen eye for design and a strong command of coding
                      languages such as HTML, CSS, and JavaScript, I have the
                      skills to transform your digital dreams into reality. From
                      concept to execution, I thrive on bringing innovative
                      ideas to life. I take a holistic approach to web
                      development, ensuring that every website I create is not
                      only visually stunning but also highly functional and
                      user-friendly. I believe in the power of seamless user
                      experiences and strive to create intuitive interfaces that
                      leave a lasting impression on visitors. With a focus on
                      responsive design, I ensure that your website looks
                      amazing and performs flawlessly across all devices.
                      Whether it's a sleek corporate site, a dynamic e-commerce
                      platform, or a creative portfolio, I tailor each project
                      to reflect your unique brand identity and goals. I thrive
                      on challenges and enjoy finding innovative solutions to
                      complex problems.
                    </p>
                    <a href="#contact" className=" btn project-button">
                      Contact
                    </a>
                  </div>
                  <div className="col-6 mb-3">
                    <h5 className="skills">What I do</h5>
                    <Skills />
                  </div>
                </div>
              </div>
            </div>
            <div className="works py-3" id="projects">
              <h2 className="projects-heading">Projects</h2>
              <div className="span"><span></span></div>
              {projects && <Projects projects={projects} />}
            </div>
             <div className="contact py-3" id="contact">
              <h2 className="text-center">Start a Project</h2>
              <form
                onSubmit={handleSubmit}
                className="my-3 contact-form bg-light"
                action="POST"
              >
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Your Name
                  </label>
                  <input
                    onChange={handleChange}
                    value={inputs.name}
                    type="text"
                    className="form-control inputs"
                    id="name-value"
                    placeholder="Enter Your Name"
                    name="name"
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">
                    Email address
                  </label>
                  <input
                    onChange={handleChange}
                    value={inputs.email}
                    type="email"
                    className="form-control inputs"
                    id="email-value"
                    placeholder="Enter Your Email"
                    name="email"
                  />
                </div>
                <div className="mb-3">
                  <label
                    for="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Describe your project
                  </label>
                  <textarea
                    className="form-control inputs"
                    id="about-value"
                    rows="7"
                    placeholder="Describe Your Project"
                    name="description"
                    onChange={handleChange}
                    value={inputs.description}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-secondary mb-3 project-button"
                >
                  Submit
                </button>
              </form>
            </div> 
          </div>
        </div>
        <Footer /> 
      </div>
    </div>
  );
};

export default Homepage;