import React from "react"
import Slider from "react-slick"
import heroImage from "../images/hero-image.svg"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default class ProjectSlider extends React.Component {
    render() {
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 1,
            speed: 500,
            variableWidth: true
        };

        const elements = ["1", "1", "1", "1", "1", "1", "1"];

        return (
            <>
                <div>
                    <button className="bg-primary text-sm text-white font-semibold py-2 px-4 my-2 mx-2 focus:outline-none">Software Projects</button>
                    <button className="border-2 border-primary text-sm text-white font-semibold py-2 px-4 my-2 mx-2 focus:outline-none">Website Projects</button>
                </div>
                <div className="w-full mt-4">
                    <Slider {...settings}>
                        {elements.map((value, index) => {
                            return (
                                <div className="px-3" style={{width: 700}}>
                                    <img className="w-full bg-light-dark p-20" src={heroImage} alt="Gatsby and Tailwind CSS together" />
                                </div>
                            )
                        })}
                    </Slider>
                </div>
            </>
        );
    }
}