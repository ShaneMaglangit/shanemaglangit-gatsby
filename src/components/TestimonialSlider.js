import React, {useState} from "react"
import { graphql, StaticQuery } from "gatsby"

const CircularLinkedList = require("../classes/CircularLinkedList.js");

// Queries the data and render the testimonial slider
const TestimonialSlider = ({props}) => { 
    return(
        // Static graphql query for retrieving the json data from ./content/testimonial.json
        <StaticQuery
            query={
                graphql`query TestimonialQuery {
                    allStrapiTestimonials {
                        edges {
                            node {
                                name
                                message
                                company
                            }
                        }
                    }
                }`
            }
            // Pass the data to the layout and render
            render={data => <TestimonialSliderLayout data={data} {...props} />}
        />
    )
}

const TestimonialSliderLayout = ({ data }) => {
    // Get all of the data from the graphql query result and convert it into a circular doubly linked list
    var root = new CircularLinkedList().addNodes(data.allStrapiTestimonials.edges).get(0);

    // useState for the testimonials
    const [testimonial, setTestimonial] = useState(root);

    return(
        <>
            {/* Main wrapper for the testimonial slider */}
            <div className="flex flex-wrap lg:flex-no-wrap justify-center">
                {/* Left button section for selecting previous testimonial */}
                <div className="w-6/12 lg:w-3/12 flex items-end justify-start lg:justify-end mt-4 focus:outline-none order-2 lg:order-1">
                    <button onClick={() => setTestimonial(testimonial.prev)} className="flex items-center mx-3 focus:outline-none">
                        <svg className="h-8 w-8 mr-2" width="54" height="54" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 17.495 24.829"><path d="M3.667,0,0,3.667,7.333,11,0,18.333,3.667,22l11-11Z" transform="translate(16.081 23.414) rotate(180)" fill="none" stroke="#F26C4F" strokeMiterlimit="10" strokeWidth="2"/></svg>
                        {/* Set the current testimonial to the previous node on buton click */}
                        <div className="text-right">
                            <p className="text-left md:text-right text-xs font-thin text-white opacity-50">{testimonial.prev.data.company}</p>
                            <h4 className="text-left text-sm md:text-lg text-white font-semibold">{testimonial.prev.data.name}</h4>
                        </div>
                    </button>
                </div>
                {/* Main section for the selected testimonial */}
                <div className="w-full lg:w-6/12 flex flex-col bg-primary text-white p-8 mt-4 mx-4 min-h-half md:min-h-quarter xl:min-h-half order-1 lg:order-2">
                    <div className="flex flex-grow items-center">
                        <p className="text-base">"{testimonial.data.message}"</p>
                    </div>
                    <div>
                        <h4 className="text-lg text-right font-semibold">{testimonial.data.name}</h4>
                        <p className="w-full text-xs text-right">{testimonial.data.company}</p>
                    </div>
                </div>
                {/* Right button section for selecting the next testimonial */}
                <div className="w-6/12 lg:w-3/12 flex items-end justify-end lg:justify-start focus:outline-none order-3 mt-4">
                    <button onClick={() => setTestimonial(testimonial.next)} className="focus:outline-none flex items-center mx-3">
                        {/* Set the current testimonial to the next node on buton click */}
                        <div className="text-left focus:outline-none">
                            <p className="text-right md:text-left text-xs font-thin text-white opacity-50">{testimonial.next.data.company}</p>
                            <h4 className="text-right text-sm md:text-lg text-white font-semibold">{testimonial.next.data.name}</h4>
                        </div>
                        <svg className="fill-current text-primary h-8 w-8 ml-2"  xmlns="https://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 14.667 22"><path d="M318.667,387,315,390.667,322.333,398,315,405.333,318.667,409l11-11Z" transform="translate(-315 -387)"/></svg>
                    </button>
                </div>
            </div>
        </>
    )
}

export default TestimonialSlider