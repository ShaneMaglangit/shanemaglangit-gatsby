import React from "react"
import Layout from "../components/Layout"
import TestimonialSlider from "../components/TestimonialSlider"
import ProjectSlider from "../components/ProjectSlider"
import heroImage from "../images/hero-image.svg"

const Index = (props) => {
  return (
    <Layout>
      <main className="w-full flex-grow flex flex-col justify-around">
        {/* Layout for the header section / hero */}
        <div id="header" className="w-11/12 mx-auto min-h-screen sm:flex sm:items-center py-16">
          <div className="sm:px-2">
            <div className="flex items-center w-100 px-4 mt-8 sm:mt-8">
              <span className="text-sm text-primary font-semibold pr-2">
                Software Developer
              </span>
              <div className="bg-primary h-1 w-1/6"></div>
            </div>
            <h1 className="px-4 text-6xl text-left text-white font-bold sm:text-3xl">
              My name is Shane,<br />I design and build Software.
            </h1>
          </div>
          <img
            className="w-full max-w-lg mt-16 mx-auto sm:w-1/2"
            src={heroImage}
            alt="Gatsby and Tailwind CSS together"
          />
        </div>

        {/* Layout for the about section */}
        <div id="about" className="bg-darker min-h-screen">
          <div className="w-11/12 mx-auto min-h-screen sm:flex sm:items-center py-16">
            <img
                className="max-w-xl mt-16 mx-auto sm:w-1/2"
                src={heroImage}
                alt="Gatsby and Tailwind CSS together"
              />
            <div className="sm:px-2">
              <div className="flex items-center w-100 px-4 mt-8 sm:mt-8">
                <span className="text-sm text-primary font-semibold pr-2">
                  About me
                </span>
                <div className="bg-primary h-1 w-1/6"></div>
              </div>
              <h1 className="px-4 text-6xl text-left text-white font-bold sm:text-3xl">
                Based on the Philippines,<br />I am a student and a developer.
              </h1>
              <p className="px-4 pt-2 text-gray-400 text-sm">
                I am currently 19 years old taking up a bachelors degree in Computer Science under National University Manila in the Philippines. Along with my studies, I currently focus on working on different software and web development side projects. I also work as a freelancer developer for the clients that I meet through freelancing sites and from contracts that I've made from some online communities for developers.
              </p>
            </div>
          </div>
        </div>

        {/* Layout for the portfolio section */}
        <div id="project" className="w-11/12 mx-auto min-h-screen py-16">
          <div className="w-11/12 mx-auto text-center">
            <span className="text-sm text-primary font-semibold pr-2">
              Projects
            </span>
            <h1 className="px-4 text-6xl text-center text-white font-bold sm:text-3xl">
              Previous Projects
            </h1>
            <ProjectSlider />
          </div>
        </div>

        {/* Layout for the testimonials section */}
        <div id="testimonial" className="bg-darker min-h-screen w-full py-16">
            <div className="w-11/12 mx-auto min-h-screen flex flex-col justify-center items-stretch">
                <span className="text-sm text-center text-primary font-semibold pr-2">
                  Testimonials
                </span>
                <h1 className="px-4 text-6xl text-center text-white font-bold sm:text-3xl">
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