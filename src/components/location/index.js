import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.423651290976!2d77.21387391455785!3d28.55703849424572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce26a96f63163%3A0xb60275b5330174ee!2sNature+Morte!5e0!3m2!1sen!2sin!4v1543526128498" 
        title="Nature Morte"
        width="100%" 
        height="500px" 
        frameBorder="0" 
         
        allowFullScreen></iframe>

        <div className="location_tag">
            <div>
                Location
            </div>
        </div>
            
        </div>
    );
};

export default Location;