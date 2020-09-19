import React, {useState} from "react"
import { graphql, StaticQuery } from "gatsby"
import PropTypes from "prop-types"

const CircularLinkedList = require("../classes/CircularLinkedList.js");

TestimonialSlider.propTypes = {
    data: PropTypes.shape({
        allTestimonialsJson: PropTypes.shape({
            edges: PropTypes.shape({
                node: PropTypes.shape({
                    name: PropTypes.string.isRequired,
                    company: PropTypes.string.isRequired,
                    message: PropTypes.string.isRequired,
                }).isRequired,
            }).isRequired,
        }).isRequired,
    }).isRequired,
}

export default function TestimonialSlider(props) { 
    return(
        <StaticQuery
            query={
                graphql`query MyQuery {
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
            render={data => <TestimonialSliderLayout data={data} {...props} />}
        />
    )
}

const TestimonialSliderLayout = ({ data }) => {
    var root = new CircularLinkedList().addNodes(data.allTestimonialsJson.edges).get(0);
    const [testimonial, setTestimonial] = useState(root);

    return(
        <>
            <div className="flex justify-center">
                <div className="w-3/12 flex items-end justify-end focus:outline-none">
                    <div className="flex items-center mx-3">
                        <svg className="h-8 w-8 mr-2" width="54" height="54" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.495 24.829"><path d="M3.667,0,0,3.667,7.333,11,0,18.333,3.667,22l11-11Z" transform="translate(16.081 23.414) rotate(180)" fill="none" stroke="#F26C4F" stroke-miterlimit="10" stroke-width="2"/></svg>
                        <button onClick={() => setTestimonial(testimonial.prev)} className="text-right focus:outline-none">
                            <p className="text-xs font-thin text-white opacity-50">{testimonial.prev.data.company}</p>
                            <h4 className="text-lg text-white font-semibold">{testimonial.prev.data.name}</h4>
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