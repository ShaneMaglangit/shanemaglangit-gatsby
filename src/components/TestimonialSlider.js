import React, {useState} from "react"
import SiteData from "../../content/site-data.json"

const CircularLinkedList = require("../classes/CircularLinkedList.js");

var currentTestimonial = new CircularLinkedList().addArray(SiteData.testimonials).get(0);

const TestimonialSlider = () => {
    const [testimonial, setTestimonial] = useState(currentTestimonial);
  
    function moveTestimonial(isForward) {
      if(isForward) currentTestimonial = currentTestimonial.next;
      else currentTestimonial = currentTestimonial.prev;
      setTestimonial(currentTestimonial);
    }

    return(
        <>
            <div class="flex justify-center">
                <div className="w-3/12 flex items-end justify-end focus:outline-none">
                    <div className="flex items-center mx-3">
                    <svg className="fill-current text-primary h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/>
                    </svg>
                    <button onClick={() => moveTestimonial(false)} className="text-right focus:outline-none">
                        <p className="text-xs font-thin text-white opacity-50">
                            {testimonial.prev.data.company}
                        </p>
                        <h4 className="text-lg text-white font-semibold">
                            {testimonial.prev.data.name}
                        </h4>
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
                        <button onClick={() => moveTestimonial(true)} className="text-left focus:outline-none">
                            <p className="text-xs font-thin text-white opacity-50">
                            {testimonial.next.data.company}
                            </p>
                            <h4 className="text-lg text-white font-semibold">
                            {testimonial.next.data.name}
                            </h4>
                        </button>
                        <svg className="fill-current text-primary h-8 w-8 ml-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/>
                        </svg>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TestimonialSlider