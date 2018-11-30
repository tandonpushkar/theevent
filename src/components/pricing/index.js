import React, { Component } from 'react';

import MyButton from '../utils/MyButton';

import Zoom from 'react-reveal/Zoom'

class Pricing extends Component {

    state = {
        price: [1000, 1500, 2000],
        position: ['Exhibition', 'Membership', 'Workshop'],
        desc: ['Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim porro quis voluptatem sed dolore quibusdam?',
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim porro quis voluptatem sed dolore quibusdam?',
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim porro quis voluptatem sed dolore quibusdam?'
        ],
        linkto: ['http://sales.a', 'http://sales.b', 'http://sales.c'],
        delay:[500,0,500]

    }

    ShowBoxes = () => (

        this.state.price.map((box, i) => (

            <Zoom
            delay={this.state.delay[i]}
            key={i}
            >
            <div className="pricing_item">
            <div className="pricing_inner_wrapper">
                <div className="pricing_title">
                    <span>₹ {this.state.price[i]}</span>
                    <span>{this.state.position[i]}</span>
                </div>
                <div className="pricing_description">
                    {this.state.desc[i]}
                </div>
                <div className="pricing_buttons">
                    <MyButton
                        text="Purchase"
                        bck="#ffa800"
                        color="#ffffffff"
                        link={this.state.linkto[i]}
                    />
                </div>
            </div>
        </div>
            
            
            </Zoom>

            
        ))

    )


    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>

                    <div className="pricing_wrapper">
                        {this.ShowBoxes()}
                    </div>
                </div>

            </div>
        );
    }
}

export default Pricing;