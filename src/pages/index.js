import React from "react"
import Layout from "../components/Layout"
import heroImage from "../images/hero-image.svg"

export default () => {
  return (
    <Layout>
      <main className="max-w-4xl flex-grow mx-auto flex flex-col justify-around">
        <div className="sm:flex sm:flex-row-reverse sm:items-center">
          <div className="sm:px-2">
            <h1 className="px-4 pt-5 text-2xl text-left text-orange-500 font-bold sm:text-3xl">
              Starter Template
            </h1>
            <p className="px-4 mt-8 text-lg text-white sm:mt-8">
              This is a starter template that already integrates Tailwind for styling.
            </p>
          </div>
          <img
            className="w-full max-w-lg mt-16 mx-auto sm:w-1/2"
            src={heroImage}
            alt="Gatsby and Tailwind CSS together"
          />
        </div>

        <div className="mx-auto">
          <a
            href="https://shanemaglangit.com/"
            className="p-4 bg-teal-500 text-white text-xs rounded shadow hover:bg-teal-400"
          >
            View on current site
          </a>
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
