import React from "react"
import Layout from "../../components/Layout"
import TestimonialSlider from "../../components/TestimonialSlider"
import Statistics from "../../components/Statistics"
import ProjectSlider from "../../components/ProjectSlider"
import portraitWebp from "../../images/portrait.webp"
import portraitPng from "../../images/portrait.png"
import Particles from "react-particles-js"
import scrollTo from "gatsby-plugin-smoothscroll"

const Web = (props) => {
  return (
    <Layout location={props.location}>
      <main className="w-full  flex-grow flex flex-col justify-around">
      </main>
    </Layout>
  )
}

export default Web