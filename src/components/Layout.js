import React, { useState } from "react"
import SEO from "./SEO"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Contact from "./Contact"
import CallToAction from "./CallToAction"

const Layout = ({ location, children }) => {
  const[contactVisible, setContactVisibility] = useState(false);

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
      <div className="flex flex-col bg-dark font-body focus:outline-none">
        <Navbar location={location} showContact={showContact} />
        {childrenWithProps}
        <CallToAction showContact={showContact} />
        <Contact contactVisible={contactVisible} hideContact={hideContact} />
        <Footer />
      </div>
    </>
  )
}

export default Layout
