import React, { useState, useRef, useEffect } from "react"
import Laptop from "../images/mini-profile-bg-01.jpg"
import Pot from "../images/mini-profile-bg-02.jpg"
import app from "../images/app.gif"
import population from "../images/population.gif"
import credit from "../images/credit.gif"
import { navigate } from "gatsby"
// import logo from './logo.svg';
// import './App.css';
const MAX_ITEMS = 3
const projects = [
  {
    desc:
      "Dictionary widget, a simple chrome extension which is helpful for search a definition and save custom terms ",
    gif: app,
    link: "/credit",
  },
  {
    desc:
      "An animated display of world countries population executed using sample data.",
    gif: population,
    link: "/bars",
  },
  {
    desc:
      "Interactive credit card application. (NOT COMPLETED STILL UNDER PROGRESS!)",
    gif: credit,
    link: "/credit",
  },
  {
    desc:
      "Decimal id malesuada ligula. Cras in fringilla nibh, sed semperturpis. Aliquam efficitur nisl nec.",
  },
  {
    desc:
      "Float id malesuada ligula. Cras in fringilla nibh, sed semperturpis. Aliquam efficitur nisl nec.",
  },
]

function HomePage({ modal, showModal }) {
  return (
    <React.Fragment>
      <section
        id="tmWelcome"
        style={{
          backgroundImage: `url(${Laptop})`,
          backgroundAttachment: `fixed`,
          backgroundRepeatX: `no-repeat`,
          backgroundSize: `cover`,
        }}
        className="parallax-window"
        data-parallax="scroll"
      >
        <div className="container-fluid tm-brand-container-outer">
          <div className="row">
            <div className="col-12">
              <div className="ml-auto mr-0 tm-bg-black-transparent text-white tm-brand-container-inner">
                <div className="tm-brand-container text-center">
                  <h1 className="tm-brand-name">Khadir Syed</h1>
                  <p className="tm-brand-description mb-0">
                    Front End Developer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tm-bg-white-transparent tm-welcome-container">
          <div className="container-fluid">
            <div className="row h-100">
              <div className="col-md-7 tm-welcome-left-col">
                <div className="tm-welcome-left">
                  <h2 className="tm-welcome-title">
                    Welcome to My Profile Page
                  </h2>
                  <p className="pb-0">
                    Seeking a position to utilize my skills and abilities in
                    Information Technology industry that offers professional
                    growth while being resourceful, innovative and flexible.
                  </p>
                </div>
              </div>
              <div className="col-md-5">
                <div className="tm-welcome-right">
                  <i className="fas fa-4x fa-address-card p-3 tm-welcome-icon"></i>
                  <p className="mb-0">
                    Passionate front end web developer with 4.5 years of
                    experience, primarily using Javascript, HTML, CSS and React
                    js
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="tmPortfolio">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="tm-portfolio-item">
                <div className="tm-portfolio-name text-white tm-bg-green">
                  Senior Software Engineer
                </div>
                <div className="tm-portfolio-description">
                  <h3 className="tm-text-green">
                    OvalEdge
                    <span className="tm-title-small">
                      (2019 November to Present)
                    </span>
                  </h3>
                  <p className="mb-0">
                    OvalEdge crawls all your databases, data lake, and your
                    back-end systems to create an easy-to-use smart data
                    catalog. Governs tools to define standard business glossary
                    and other data assets.
                  </p>
                </div>
              </div>

              <div className="tm-portfolio-item">
                <div className="tm-portfolio-name text-white tm-bg-orange">
                  Software Engineer
                </div>
                <div className="tm-portfolio-description">
                  <h3 className="tm-text-orange">
                    Tricon Infotech Pvt. Ltd.
                    <span className="tm-title-small">
                      (2017 July to 2019 Nov)
                    </span>
                  </h3>
                  <p className="mb-0">
                    Worked for CK-12 organisation. It is an educational website,
                    where it's used mostly in U.S. It is helpful for both
                    students and teachers. The teachers assign assignments so
                    that the students can attend them and get feedback from the
                    respective teachers.
                  </p>
                </div>
              </div>

              <div className="tm-portfolio-item">
                <div className="tm-portfolio-name text-white tm-bg-dark-gray">
                  Associate Software Engineer
                </div>
                <div className="tm-portfolio-description">
                  <h3 className="tm-text-orange">
                    Tricon Infotech Pvt. Ltd.
                    <span className="tm-title-small">
                      (2016 July to 2017 July)
                    </span>
                  </h3>
                  <p className="mb-0">
                    Was responsible to maintain complex modules which were
                    implemented in backbone js, jQuery, react js and various
                    front end technologies
                  </p>
                </div>
              </div>

              <div className="tm-portfolio-item" style={{ display: "none" }}>
                <div className="tm-portfolio-name text-white tm-bg-dark-gray">
                  Design School
                </div>
                <div className="tm-portfolio-description">
                  <h3 className="tm-text-dark-gray">
                    Art Design College
                    <span className="tm-title-small">
                      (2012 May to 2014 Dec)
                    </span>
                  </h3>
                  <p className="mb-0">
                    Etiam porta est nisl, consectetur dapibus ante faucibus id.
                    Nunc ullamcorper a quam eget tincidunt. Proin vehicula
                    mauris ipsum, euismod dignissim dolor convallis ac.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        id="tmContact"
        style={{
          backgroundImage: `url(${Pot})`,
          backgroundAttachment: `fixed`,
          backgroundRepeatX: `no-repeat`,
          backgroundSize: `cover`,
        }}
        className="parallax-window"
        data-parallax="scroll"
      >
        <div className="container-fluid">
          <div style={{ fontSize: "xx-large" }}>Recent Work</div>
          <Carousel />
          <div className="row">
            <div className="col-12">
              <form
                action="index.html"
                method="POST"
                id="tmContactForm"
                className="tm-bg-white-transparent"
              >
                <div className="form-group">
                  <input
                    type="text"
                    id="contact_name"
                    name="contact_name"
                    className="form-control rounded-0 border-top-0 border-right-0 border-left-0"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    id="contact_email"
                    name="contact_email"
                    className="form-control rounded-0 border-top-0 border-right-0 border-left-0"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    rows="4"
                    id="contact_message"
                    name="contact_message"
                    className="form-control rounded-0 border-top-0 border-right-0 border-left-0"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn tm-btn-submit rounded-0 text-white"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="row">
            <footer className="col-12" style={{ display: "none" }}>
              <p className="text-center tm-copyright-text">
                Copyright 2019 Mini Profile Page - Design:{" "}
                <a rel="nofollow" href="https://www.facebook.com/templatemo">
                  TemplateMo
                </a>
              </p>
            </footer>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

const Carousel = () => {
  const [translate, setTranslate] = useState(0)
  const [itemWidth, setItemWidth] = useState(300)
  const [pageNum, setPageNum] = useState(1)
  let isLeftDisabled = pageNum === 1 ? true : false
  let isRightDisabled =
    projects.length - pageNum * MAX_ITEMS <= 0 ? true : false
  const carouselRef = useRef(null)
  const slideLeft = () => {
    if (isLeftDisabled) return
    isRightDisabled = false
    setTranslate(translate + 100)
    if (pageNum === 2) {
      isLeftDisabled = true
    }
    setPageNum(pageNum - 1)
  }
  const slideRight = () => {
    if (isRightDisabled) return
    setTranslate(translate - 100)
    isLeftDisabled = false
    if (projects.length - (pageNum + 1) * MAX_ITEMS <= 0) {
      isRightDisabled = true
    }
    setPageNum(pageNum + 1)
  }
  useEffect(() => {
    setItemWidth(
      (carouselRef?.current?.clientWidth - MAX_ITEMS * 35) / MAX_ITEMS
    )
  })
  return (
    <div className="row">
      <div
        ref={carouselRef}
        className="col-12 p-0"
        style={{ marginBottom: "80px", overflowX: `hidden`, margin: `0 15px` }}
      >
        <div
          style={{
            transform: `translateX(${translate}%)`,
            transition: `transform 500ms ease`,
            marginBottom: "50px",
          }}
        >
          <div
            className="tm-contact-items-container"
            style={{ width: "max-content" }}
          >
            {projects.map((project, key) => (
              <div
                key={key}
                className="tm-contact-item tm-bg-white-transparent"
                style={{ width: `${itemWidth || 300}px` }}
              >
                <div className="fas fa-5x fa-briefcase tm-contact-item-icon">
                  <img
                    style={{ height: "100%", width: "100%", cursor: "pointer" }}
                    src={project.gif}
                    onClick={() => navigate(project.link)}
                  />
                </div>
                <p className="mb-0">{project.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div
          style={{ padding: "25px", display: "none", justifyContent: "center" }}
        >
          <div
            style={{
              display: "flex",
              width: "100px",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                width: "28px",
                borderRadius: "50%",
                background: "white",
                textAlign: "center",
                cursor: "pointer",
                opacity: isLeftDisabled ? "0.5" : "1",
              }}
              onClick={slideLeft}
            >
              &lt;
            </div>
            <div
              style={{
                width: "28px",
                borderRadius: "50%",
                background: "white",
                textAlign: "center",
                cursor: "pointer",
                opacity: isRightDisabled ? "0.5" : "1",
              }}
              onClick={slideRight}
            >
              &gt;
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
