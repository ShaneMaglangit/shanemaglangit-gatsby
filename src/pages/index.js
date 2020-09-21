import React from "react"
import Layout from "../components/Layout"
import TestimonialSlider from "../components/TestimonialSlider"
import ProjectSlider from "../components/ProjectSlider"
import portraitWebp from "../images/portrait.webp"
import portraitPng from "../images/portrait.png"

const Index = (props) => {
  return (
    <Layout>
      <main className="w-full flex-grow flex flex-col justify-around">
        {/* Layout for the header section / hero */}
        <div id="header" className="w-full h-screen flex flex-col items-center justify-center">
          <h1 className="px-4 text-5xl text-center text-primary font-bold">
            My name is Shane, <br /> 
            <span className="text-white">
              I design and build Software.
            </span>
          </h1>
        </div>

        {/* Layout for the about section */}
        <div id="about" className="bg-darker min-h-screen">
          <div className="w-11/12 mx-auto min-h-screen sm:flex sm:items-center">
            <picture className="w-5/12 pt-16 mx-auto">
              <source srcset={portraitWebp} type="image/webp" />
              <source srcset={portraitPng} type="image/png" /> 
              <img className="w-full h-full" src={portraitPng} alt="Portrait"></img>
            </picture>
            <div className="w-7/12 sm:px-2">
              <div className="flex items-center w-100 px-4 mt-8 sm:mt-8">
                <span className="text-sm text-primary font-semibold pr-2">
                  About me
                </span>
                <div className="bg-primary h-1 w-1/6"></div>
              </div>
              <h2 className="px-4 text-3xl text-left text-white font-bold">
                Based on the Philippines,<br />I am a student and a developer.
              </h2>
              <p className="px-4 pt-2 text-gray-400 text-base">
                I am currently 19 years old taking up a bachelors degree in Computer Science under National University Manila in the Philippines. Along with my studies, I currently focus on working on different software and web development side projects. I also work as a freelancer developer for the clients that I meet through freelancing sites and from contracts that I've made from some online communities for developers.
              </p>
            </div>
          </div>
        </div>

        {/* Layout for the portfolio section */}
        <div id="project" className="w-11/12 mx-auto flex flex-col items-center justify-center min-h-screen py-1">
          <div className="w-full flex flex-col items-center">
            <span className="text-sm text-primary font-semibold pr-2">
              Projects
            </span>
            <h1 className="px-4 text-3xl text-center text-white font-bold">
              Previous Projects
            </h1>
            <ProjectSlider />
          </div>
        </div>

        {/* Layout for the testimonials section */}
        <div id="testimonial" className="bg-darker min-h-screen w-full">
            <div className="w-11/12 mx-auto min-h-screen flex flex-col justify-center items-stretch py-1">
                <span className="text-sm text-center text-primary font-semibold pr-2">
                  Testimonials
                </span>
                <h1 className="px-4 text-3xl text-center text-white font-bold">
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