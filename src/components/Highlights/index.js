import React from 'react';
import Description from './Description';
import Discount from './Discount';

const Highlights = () => {
    return (
        <div className="highlight_wrapper">
            <div className="innerHighlight_wrapper">
                <Description />
                <Discount />
            </div>
        </div>
    );
};

export default Highlights;