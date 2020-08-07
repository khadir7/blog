import React, { useState, useRef, useEffect } from "react"
import Laptop from "../images/mini-profile-bg-01.jpg"
import Pot from "../images/mini-profile-bg-02.jpg"
import app from "../images/app.gif"
import { navigate } from "gatsby"
// import logo from './logo.svg';
// import './App.css';
const MAX_ITEMS = 3
const projects = [
  {
    desc:
      "Integer id malesuada ligula. Cras in fringilla nibh, sed semperturpis. Aliquam efficitur nisl nec.",
    gif: app,
    link: "/credit",
  },
  {
    desc:
      "Integer id malesuada ligula. Cras in fringilla nibh, sed semperturpis. Aliquam efficitur nisl nec.",
  },
  {
    desc:
      "Integer id malesuada ligula. Cras in fringilla nibh, sed semperturpis. Aliquam efficitur nisl nec.",
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
                    Welcome to Mini Profile Page
                  </h2>
                  <p className="pb-0">
                    This is Bootstrap v4.3.1 parallax layout for you. Credit
                    goes to{" "}
                    <a rel="nofollow" href="https://www.pexels.com">
                      Pexels
                    </a>{" "}
                    for 2 background images. In odio sapien, commodo id
                    ullamcorper ac, dignissim at sapien. Nullam leo massa, vaius
                    ac massa et, tincidunt imperdiet turpis.{" "}
                  </p>
                </div>
              </div>
              <div className="col-md-5">
                <div className="tm-welcome-right">
                  <i className="fas fa-4x fa-address-card p-3 tm-welcome-icon"></i>
                  <p className="mb-0">
                    Please spread a word about templatemo website. Anyone can
                    download free Bootstrap CSS templates.
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
                  Project Manager
                </div>
                <div className="tm-portfolio-description">
                  <h3 className="tm-text-green">
                    New Company
                    <span className="tm-title-small">
                      (2019 January to Present)
                    </span>
                  </h3>
                  <p className="mb-0">
                    Nullam a tellus ultricies, ornare purus vel, porttitor
                    massa. Aliquam facilisis purus ac eros sollicidudin, in
                    mollis neque facilisis. Duis malesuada, mi non elementum
                    malesuada.
                  </p>
                </div>
              </div>

              <div className="tm-portfolio-item">
                <div className="tm-portfolio-name text-white tm-bg-orange">
                  Senior UX Designer
                </div>
                <div className="tm-portfolio-description">
                  <h3 className="tm-text-orange">
                    Studio One
                    <span className="tm-title-small">
                      (2017 April to 2018 Dec)
                    </span>
                  </h3>
                  <p className="mb-0">
                    Phasellus ac nulla egestas, malesuada dolor quis,
                    scelerisque arcu. Morbi aliquam, nunc vel blandit mattis,
                    sapien nisl convallis sem, quis hendrerit nisl tellus in
                    lectus. Proin at nibh bibendum, tincidunt mauris sit amet,
                    porta risus. Integer id malesuada ligula.
                  </p>
                </div>
              </div>

              <div className="tm-portfolio-item">
                <div className="tm-portfolio-name text-white tm-bg-blue">
                  Graphic Designer
                </div>
                <div className="tm-portfolio-description">
                  <h3 className="tm-text-blue">
                    Digital Com
                    <span className="tm-title-small">
                      (2015 Jan to 2016 Dec)
                    </span>
                  </h3>
                  <p className="mb-0">
                    Etiam porta est nisl, consectetur dapibus ante faucibus id.
                    Nunc ullamcorper a quam eget tincidunt. Proin vehicula
                    mauris ipsum, euismod dignissim dolor convallis ac.
                  </p>
                </div>
              </div>

              <div className="tm-portfolio-item">
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
        }}
        className="parallax-window"
        data-parallax="scroll"
      >
        <div className="container-fluid">
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
            <footer className="col-12">
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
          style={{ padding: "25px", display: "flex", justifyContent: "center" }}
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
