import React, { useState } from "react"
import SEO from "./SEO"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Contact from "./Contact"
import CallToAction from "./CallToAction"

const Layout = ({ children }) => {
  const[contactVisible, setContactVisibility] = useState(false)

  function showContact() {
    setContactVisibility(true);
  }

  function hideContact() {
    setContactVisibility(false);
  }

  const childrenWithProps = React.cloneElement(children, { foo: "true" } )

  return (
    <>
      <SEO />
      <div className="container flex flex-col bg-dark font-body focus:outline-none">
        <Navbar showContact={showContact} />
        {childrenWithProps}
        <Contact contactVisible={contactVisible} hideContact={hideContact} />
        <CallToAction showContact={showContact} />
        <Footer />
      </div>
    </>
  )
}

export default Layout
