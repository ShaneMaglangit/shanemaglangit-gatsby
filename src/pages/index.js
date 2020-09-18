import React, {useState} from "react"
import Layout from "../components/Layout"
import heroImage from "../images/hero-image.svg"
import SiteData from "../../content/site-data.json"

const CircularLinkedList = require("../classes/CircularLinkedList.js");

var currentTestimonial = new CircularLinkedList().addArray(SiteData.testimonials).get(0);

const Index = (props) => {
  const [testimonial, setTestimonial] = useState(currentTestimonial);

  function moveTestimonial(isForward) {
    if(isForward) currentTestimonial = currentTestimonial.next;
    else currentTestimonial = currentTestimonial.prev;
    setTestimonial(currentTestimonial);
  }

  return (
    <Layout>
      <main className="w-full flex-grow flex flex-col justify-around">
        {/* Layout for the header section / hero */}
        <div id="header" className="w-11/12 mx-auto min-h-screen sm:flex sm:items-center">
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
          <div className="w-11/12 mx-auto min-h-screen sm:flex sm:items-center">
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>

        {/* Layout for the portfolio section */}
        <div id="project" className="w-11/12 mx-auto min-h-screen sm:flex sm:items-center">
          <div className="w-11/12 mx-auto min-h-screen flex flex-col justify-center items-center">
            <span className="text-sm text-primary font-semibold pr-2">
              Projects
            </span>
            <h1 className="px-4 text-6xl text-center text-white font-bold sm:text-3xl">
              Previous Projects
            </h1>
            <div class="flex">
            </div>
          </div>
        </div>

        {/* Layout for the testimonials section */}
        <div id="testimonial" className="bg-darker min-h-screen w-full">
          <div className="w-11/12 mx-auto min-h-screen flex flex-col justify-center items-stretch">
            <span className="text-sm text-center text-primary font-semibold pr-2">
              Testimonials
            </span>
            <h1 className="px-4 text-6xl text-center text-white font-bold sm:text-3xl">
              Client Feedbacks
            </h1>
            <div class="flex justify-center">
              <div className="w-3/12 flex items-end justify-end focus:outline-none">
                <div className="flex items-center mx-3">
                  <svg className="fill-current text-primary h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/>
                  </svg>
                  <button onClick={() => moveTestimonial(false)} className="text-right focus:outline-none">
                      <p className="text-xs font-thin text-white opacity-50">
                        {testimonial.prev.data.company}
                      </p>
                      <h4 className="text-lg text-white font-semibold">
                        {testimonial.prev.data.name}
                      </h4>
                  </button>
                </div>
              </div>
              <div className="w-6/12 flex flex-col bg-primary text-white p-8 mt-4 mx-4 min-h-half">
                <div className="flex flex-grow items-center">
                  <p className="">"{testimonial.data.message}"</p>
                </div>
                <div>
                  <h4 className="text-lg text-right font-semibold">{testimonial.data.name}</h4>
                  <p className="w-full text-xs text-right">{testimonial.data.company}</p>
                </div>
              </div>
              <div className="w-3/12 flex items-end justify-start focus:outline-none">
                <div className="flex items-center mx-3">
                  <button onClick={() => moveTestimonial(true)} className="text-left ZZfocus:outline-none">
                    <p className="text-xs font-thin text-white opacity-50">
                      {testimonial.next.data.company}
                    </p>
                    <h4 className="text-lg text-white font-semibold">
                      {testimonial.next.data.name}
                    </h4>
                  </button>
                  <svg className="fill-current text-primary h-8 w-8 ml-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* {SiteData.testimonials.map((data, index) => {
              return <li key={`testimonial_${index}`}>{data.name}</li>
              })} */}
          </div>
        </div>

        {/* Layour for the call to action section */}
        {/* <div className="w-11/12 mx-auto min-h-half sm:flex sm:items-center">
          <sub className="text-white">Call to Action Section</sub>
        </div> */}
      </main>
    </Layout>
  )
}

export default Index