import React from "react"
import Layout from "../../components/Layout"
import TestimonialSlider from "../../components/TestimonialSlider"
import Statistics from "../../components/Statistics"
import ProjectSlider from "../../components/ProjectSlider"
import portraitWebp from "../../images/portrait.webp"
import portraitPng from "../../images/portrait.png"
import Particles from "react-particles-js"
import scrollTo from "gatsby-plugin-smoothscroll"

const Software = (props) => {
  return (
    <Layout location={props.location}>
      <main className="w-full flex-grow flex flex-col justify-around">
          <div className="flex">
              <div className="w-full flex">
                  <div className="w-4/12"></div>
                  <div className="w-8/12">
                      <p>Project Title</p>
                      <p>Project Tags</p>
                      <p>Project Description</p>
                  </div>
              </div>
          </div>
      </main>
    </Layout>
  )
}

export default Software