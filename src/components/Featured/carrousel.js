import React from 'react';
import Slider from "react-slick";

//Images importing
import slide_one from '../../resources/images/slide_one.jpeg';
import slide_two from '../../resources/images/slide_two.jpeg';
import slide_three from '../../resources/images/slide_three.jpeg';


const Carrousel = () => {

    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        speed: 500

    };

    return (
        <div className="carrousel_wrapper"

        >

            <Slider {...settings}>
                <div>

                    <div className="carrousel_image"
                        style={{
                            background: `url(${slide_one})`,
                            height: `${window.innerHeight}px`
                        }}
                    >
                    </div>

                </div>
                <div>
                    <div className="carrousel_image"
                        style={{
                            background: `url(${slide_two})`,
                            height: `${window.innerHeight}px`
                        }}
                    >
                    </div>
                </div>
                <div>
                    <div className="carrousel_image"
                        style={{
                            background: `url(${slide_three})`,
                            height: `${window.innerHeight}px`
                        }}
                    >
                    </div>
                </div>

            </Slider>

        </div>
    );
};


export default Carrousel;