import { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Skills from "./Skills";
import axios from "axios";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";

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
      <div className="">
        <div className="nav-section sticky-top">
          <div className="promotion">
            <div className="subscribe-link">
              <Link to="/subscribe">
              
                <span className="subscribe-icon">
                  <AiOutlineMail />
                </span>
                subscribe to weekly newsletter
             </Link>
            </div>
            <div className="discount-sales">
              
            </div>
          </div>

          <Navbar />
        </div>
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
                <div className="about-left">
                  <h5 className="">Who am I?</h5>
                  <p className="about-text">
                    Passionate web developer, weaving innovation and artistry
                    into every line of code. With an eye for captivating design
                    and a commitment to seamless user experiences, I bring
                    digital visions to life. From dynamic e-commerce platforms
                    to sleek corporate websites, I craft tailored solutions that
                    leave a lasting impact. Let's collaborate and transform your
                    online presence into something extraordinary.
                  </p>
                  <a href="#contact" className=" btn project-button">
                    Contact
                  </a>
                </div>
                <div className="about-right mb-3">
                  <h5 className="skills">What I do</h5>
                  <Skills />
                </div>
              </div>
            </div>
            <div className="works py-3" id="projects">
              <h2 className="projects-heading">Projects</h2>
              <div className="span">
                <span></span>
              </div>
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
