import React, {useState} from "react"
import { graphql, StaticQuery } from "gatsby"

const CircularLinkedList = require("../classes/CircularLinkedList.js");

// Queries the data and render the testimonial slider
export default function TestimonialSlider(props) { 
    return(
        // Static graphql query for retrieving the json data from ./content/testimonial.json
        <StaticQuery
            query={
                graphql`query TestimonialQuery {
                    allTestimonialsJson {
                        edges {
                            node {
                                name
                                company
                                message
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
    var root = new CircularLinkedList().addNodes(data.allTestimonialsJson.edges).get(0);

    // useState for the testimonials
    const [testimonial, setTestimonial] = useState(root);

    return(
        <>
            {/* Main wrapper for the testimonial slider */}
            <div className="flex justify-center">
                {/* Left button section for selecting previous testimonial */}
                <div className="w-3/12 flex items-end justify-end focus:outline-none">
                    <div className="flex items-center mx-3">
                        <svg className="h-8 w-8 mr-2" width="54" height="54" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.495 24.829"><path d="M3.667,0,0,3.667,7.333,11,0,18.333,3.667,22l11-11Z" transform="translate(16.081 23.414) rotate(180)" fill="none" stroke="#F26C4F" stroke-miterlimit="10" stroke-width="2"/></svg>
                        {/* Set the current testimonial to the previous node on buton click */}
                        <button onClick={() => setTestimonial(testimonial.prev)} className="text-right focus:outline-none">
                            <p className="text-xs font-thin text-white opacity-50">{testimonial.prev.data.company}</p>
                            <h4 className="text-lg text-white font-semibold">{testimonial.prev.data.name}</h4>
                        </button>
                    </div>
                </div>
                {/* Main section for the selected testimonial */}
                <div className="w-6/12 flex flex-col bg-primary text-white p-8 mt-4 mx-4 min-h-half">
                    <div className="flex flex-grow items-center">
                        <p className="">"{testimonial.data.message}"</p>
                    </div>
                    <div>
                        <h4 className="text-lg text-right font-semibold">{testimonial.data.name}</h4>
                        <p className="w-full text-xs text-right">{testimonial.data.company}</p>
                    </div>
                </div>
                {/* Right button section for selecting the next testimonial */}
                <div className="w-3/12 flex items-end justify-start focus:outline-none">
                    <div className="flex items-center mx-3">
                        {/* Set the current testimonial to the next node on buton click */}
                        <button onClick={() => setTestimonial(testimonial.next)} className="text-left focus:outline-none">
                            <p className="text-xs font-thin text-white opacity-50">{testimonial.next.data.company}</p>
                            <h4 className="text-lg text-white font-semibold">{testimonial.next.data.name}</h4>
                        </button>
                        <svg className="fill-current text-primary h-8 w-8 ml-2"  xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 14.667 22"><path d="M318.667,387,315,390.667,322.333,398,315,405.333,318.667,409l11-11Z" transform="translate(-315 -387)"/></svg>
                    </div>
                </div>
            </div>
        </>
    )
}