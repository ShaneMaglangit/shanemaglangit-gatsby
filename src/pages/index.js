import React from "react"
import Layout from "../components/Layout"
import Particles from "react-particles-js"
import TestimonialSlider from "../components/TestimonialSlider"
import Statistics from "../components/Statistics"
import portraitWebp from "../images/portrait.webp"
import portraitPng from "../images/portrait.png"
import scrollTo from "gatsby-plugin-smoothscroll"

const Index = (props) => {
  return (
    <Layout location={props.location}>
      <main className="w-full flex-grow flex flex-col justify-around">
          {/* Layout for the header section / hero */}
          <div id="header" className="relative w-full h-screen-full flex flex-col items-center justify-center">
            <h1 className="px-3 md:px-0 text-3xl md:text-4xl xl:text-5xl text-center text-primary font-bold">
                I'm Shane Maglangit,<br /> 
              <span className="text-white">
                I design and build Software.
              </span>
            </h1>
            <button onClick={() => scrollTo("#about")} className="z-20 absolute bottom-0 animate-bounce focus:outline-none">
              <p className="text-white text-xs">Scroll Down</p>
              <svg className="fill-current text-white mx-auto" xmlns="https://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/>
              </svg>
            </button>

            <Particles className="z-0 absolute top-0 left-0 w-full h-full"
              params={{
                particles: {
                  number: {
                    value: 60,
                    density: {
                      enable: true,
                      value_area: 800
                    }
                  },
                  color: {
                    value: "#ffffff"
                  },
                  shape: {
                    type: "edge",
                    stroke: {
                      width: 0,
                      color:"#000000"
                    },
                    polygon: {
                      nb_sides: 5
                    },
                    image: {
                      width: 100,
                      height: 100
                    }
                  },
                  opacity: {
                    value: 0.2,
                    random: true,
                    anim: {
                      enable: true,
                      speed: 1,
                      opacity_min: 0,
                      sync: false
                    }
                  },
                  size: {
                    value: 4,
                    random: true,
                    anim: {
                      enable: false,
                      speed: 4,
                      size_min: 0.3,
                      sync: false
                    }
                  },
                  line_linked: {
                    enable: false,
                    distance: 150,
                    color: "#ffffff",
                    opacity: 0.4,
                    width: 1
                  },
                  move: {
                    enable: true,
                    speed: 1,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                      enable: false,
                      rotateX: 600,
                      rotateY: 600
                    }
                  }
                },
                interactivity: {
                  detect_on: "canvas",
                  events: {
                    onhover: {
                      enable: false,
                      mode: "bubble"
                    },
                    onclick: {
                      enable: false,
                      mode: "repulse"
                    },
                    resize: true
                  },
                  modes: {
                    grab: {
                      distance: 400,
                      line_linked: {
                        opacity: 1
                      }
                    },
                    bubble: {
                      distance: 250,
                      size: 0,
                      duration: 2,
                      opacity: 0,
                      speed: 3
                    },
                    repulse: {
                      distance: 400,
                      duration: 0.4
                    },
                    push: {
                      particles_nb: 4
                    },
                    remove: {
                      particles_nb: 2
                    }
                  }
                },
                retina_detect: true
                }
              }
            />
          </div>

          {/* Layout for the about section */}
          <div id="about" className="z-20 bg-darker xl:min-h-screen">
            <div className="container w-11/12 mx-auto h-full flex flex-col py-20 md:py-0 md:flex-row min-h-screen md:min-h-0 xl:min-h-screen items-center">
              <div className="md:w-5/12 md:py-20 md:pr-6">
                <div className="mb-2 flex flex-wrap">
                  <p className="text-primary text-xs font-normal tracking-widest">
                    <span role="img" aria-label="philippines">👦 </span> 
                    SHANE MAGLANGIT |&nbsp;
                  </p>
                  <p className="text-xs font-normal tracking-widest text-white animate-pulse">
                    SOFTWARE DEVELOPER
                    </p>
                </div>
                <div className="relative bg-light-dark shadow-md rounded">
                  <picture className="h-full pt-8 mx-auto">
                    <source srcSet={portraitWebp} type="image/webp" />
                    <source srcSet={portraitPng} type="image/png" /> 
                    <img className="w-full h-full" src={portraitPng} alt="Shane Maglangit Portrait"></img>
                  </picture>
                </div>
              </div>
              <div className="md:w-7/12 md:px-4">
                <p className="mt-4 md:mt-8 w-100 text-sm text-primary font-semibold pr-2">
                  About me
                </p>
                <h2 className="text-xl xl:text-3xl text-left text-white font-bold">
                  Based on the Philippines,<br />I am a student and a developer&nbsp;&nbsp;<span role="img" aria-label="rocket">🚀</span>
                </h2>
                <p className="pt-2 text-gray-400 text-sm xl:text-base">
                  I am currently 19 years old taking up a bachelors degree in Computer Science under National University Manila in the Philippines. Along with my studies, I also work on freelance projects for software and web development.
                </p>
              </div>
            </div>
          </div>

          {/* Layout for the statistics section */}
          <div id="statistics" className="w-full mx-auto flex items-center justfy-center py-20 xl:py-auto">
            <div className="container w-11/12 mx-auto flex flex-col items-center">
                <span className="w-full text-left text-sm text-primary font-semibold pr-2">
                  Statistics
                </span>
                <h1 className="w-full text-left pt-2 text-2xl md:text-3xl text-white font-bold">
                  What I achieved so far <span role="img" aria-label="fire">🔥</span>
                </h1>
                <Statistics />
            </div>
          </div>

          {/* Layout for the testimonials section */}
          <div id="testimonial" className="flex justify-center items-center bg-darker py-20 xl:py-auto  min-h-screen md:min-h-0 xl:min-h-screen w-full">
              <div className="container w-full md:w-11/12 flex flex-col justify-center items-stretch py-1">
                  <span className="text-sm text-center text-primary font-semibold pr-2">
                    Testimonials
                  </span>
                  <h1 className="px-4 pt-2 text-2xl md:text-3xl text-center text-white font-bold">
                    Client Feedbacks
                  </h1>
                  <TestimonialSlider />
              </div>
          </div>
      </main>
    </Layout>
  )
}

export default Index