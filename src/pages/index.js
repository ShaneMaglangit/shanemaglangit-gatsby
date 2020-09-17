import React from "react"
import Layout from "../components/Layout"
import heroImage from "../images/hero-image.svg"

export default () => {
  return (
    <Layout>
      <main className="w-11/12 flex-grow mx-auto flex flex-col justify-around">
        <div className="min-h-screen sm:flex sm:items-center">
          <div className="sm:px-2">
            <p className="px-4 mt-8 text-sm te  xt-orange-500 sm:mt-8">
              Software Developer
            </p>
            <h1 className="px-4 pt-5 text-2xl text-left text-white font-bold sm:text-3xl">
              My name is Shane,<br />I design and build Software.
            </h1>
          </div>
          <img
            className="w-full max-w-lg mt-16 mx-auto sm:w-1/2"
            src={heroImage}
            alt="Gatsby and Tailwind CSS together"
          />
        </div>

        <div className="flex items-center p-3 mx-2 bg-white rounded shadow-xs sm:mx-auto">
          <code className="text-gray-600 text-xs leading-xl">
            http://github.com/shanemaglangit
          </code>
        </div>
      </main>
    </Layout>
  )
}
