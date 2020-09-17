import React from "react"
import Layout from "../components/Layout"
import heroImage from "../images/hero-image.svg"

export default () => {
  return (
    <Layout>
      <main className="w-full flex-grow flex flex-col justify-around">
        {/* Layout for the header section / hero */}
        <div id="header" className="w-11/12 mx-auto min-h-screen sm:flex sm:items-center">
          <div className="sm:px-2">
            <div className="flex items-center w-100 px-4 mt-8 sm:mt-8">
              <span className="text-sm text-orange-500 font-semibold pr-2">
                Software Developer
              </span>
              <div className="bg-orange-500 h-1 w-1/5"></div>
            </div>
            <h1 className="px-4 mt-5 text-6xl text-left text-white font-bold sm:text-3xl">
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
          <div className="w-11/12 mx-auto min-h-screen sm:flex sm:items-center">
            <img
                className="w-full max-w-xl mt-16 mx-auto sm:w-1/2"
                src={heroImage}
                alt="Gatsby and Tailwind CSS together"
              />
            <div className="sm:px-2">
              <div className="flex items-center w-100 px-4 mt-8 sm:mt-8">
                <span className="text-sm text-orange-500 font-semibold pr-2">
                  About me
                </span>
                <div className="bg-orange-500 h-1 w-1/5"></div>
              </div>
              <h1 className="px-4 mt-5 text-6xl text-left text-white font-bold sm:text-3xl">
                Based on the Philippines,<br />I am a student and a developer.
              </h1>
              <p className="px-4 pt-4 text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>

        {/* Layout for the portfolio section */}
        <div id="project" className="w-11/12 mx-auto min-h-screen sm:flex sm:items-center">
            <sub class="text-white">Portfolio Section</sub>
          </div>

        {/* Layout for the testimonials section */}
        <div id="testimonial" className="bg-darker min-h-screen">
          <div className="w-11/12 mx-auto min-h-screen sm:flex sm:items-center">
            <sub class="text-white">Testimonials Section</sub>
          </div>
        </div>

        {/* Layour for the call to action section */}
        <div className="w-11/12 mx-auto min-h-half sm:flex sm:items-center">
          <sub class="text-white">Call to Action Section</sub>
        </div>
      </main>
    </Layout>
  )
}
