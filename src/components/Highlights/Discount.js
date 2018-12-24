import React, { Component } from 'react';
import { Fade, Slide } from 'react-reveal';
import MyButton from '../utils/MyButton';




class Discount extends Component {

    state = {
        discountStart: 0,
        discountEnd: 30
    }

    handleDiscount = () => {
        if (this.state.discountStart < this.state.discountEnd) {
            this.setState({
                discountStart: this.state.discountStart + 1
            })
        }
    }

    componentDidUpdate() {
        setTimeout(() => {
            this.handleDiscount()
        }, 30)
    }


    render() {
        return (
            <div className="center_wrapper">


                <div className="discount_wrapper">

                    <Fade
                        onReveal={() => this.handleDiscount()}
                    >

                        <div className="discount_porcentage">
                            <span>{this.state.discountStart}%</span>
                            <span>OFF</span>

                        </div>
                    </Fade>

                    <Slide right>
                        <div className="discount_description">

                            <div><h3>Book tickets before 30 June 2019</h3></div>
                            <div><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur consectetur corporis quis sint nobis? Reiciendis cum corrupti, fugiat alias ipsam veritatis ex iusto earum voluptatibus neque, qui repudiandae officiis quas.</p></div>
                            <div><MyButton
                                text="Book Tickets"
                                bck="#ffa800"
                                color="#ffffffff"
                                link="http://google.com"


                            /></div>
                        </div>
                    </Slide>

                </div>
            </div>
        );
    }
}

export default Discount;