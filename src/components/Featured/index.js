import React from 'react';
import Carrousel from './carrousel';
import TimeUntil from './TimeUntil';

const Featured = () => {
    return (
        <div style={{ position: "relative" }}>
            <Carrousel />

            <div className="artist_name">

                <div className="wrapper">
                    Pushkar Tandon
                </div>

            </div>

            <TimeUntil />

        </div>
    );
};

export default Featured;