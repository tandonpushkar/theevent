import React, { Component } from 'react';

import hrithiksketch from '../../resources/images/hrithiksketch.jpg';
import womensketch from '../../resources/images/womensketch.jpg';
import ironmansketch from '../../resources/images/ironmansketch.jpg';
import handsketch from '../../resources/images/handsketch.jpg';
import sketch5 from '../../resources/images/sketch5.jpg';
import sketch6 from '../../resources/images/sketch6.jpg';
import sketch7 from '../../resources/images/sketch7.jpg';
import sketch8 from '../../resources/images/sketch8.jpg';
import sketch9 from '../../resources/images/sketch9.jpg';

import Zoom from 'react-reveal/Zoom'

class Sketches extends Component {


    state = {
        Key: [0, 1, 2, 3, 4, 5, 6, 7, 8],
        images: [`url(${hrithiksketch})`, `url(${womensketch})`, `url(${handsketch})`, `url(${ironmansketch})`,
        `url(${sketch5})`, `url(${sketch6})`, `url(${sketch7})`, `url(${sketch8})`,
        `url(${sketch9})`],

        delay:[0,500,1000,0,500,1000,0,500,1000]
    }


    ShowSketches = () => (

        this.state.Key.map((i) => (


            <Zoom
            delay={this.state.delay[i]}
            key={i}
            >

            <div className="pricing_item">
                <div className="pricing_inner_wrapper"

                    style={{
                        background: this.state.images[i],
                        height: '250px',
                        width: '230px',
                        backgroundSize: 'cover'
                    }}>

                </div>
            </div>

            </Zoom>


        ))






    )





    render() {
        return (
            <div className="bck_red">
                <div className="center_wrapper pricing_section">
                    <h2>Sketches</h2>

                    <div className="pricing_wrapper">
                        {this.ShowSketches()}
                    </div>
                </div>

            </div>
        );
    }
}

export default Sketches;