import React from "react"
import ExpandedProjectList from "../../components/ExpandedProjectList"
import Layout from "../../components/Layout"

const Software = (props) => {
  return (
    <Layout location={props.location}>
        <main className="container mx-auto flex-grow flex flex-col justify-around mt-10">
            <div className="w-11/12 mx-auto flex flex-row flex-wrap">
                <ExpandedProjectList category="software" />
            </div>
        </main>
    </Layout>
  )
}

export default Software