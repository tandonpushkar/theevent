import React from 'react';

import { scroller } from 'react-scroll';

import { Drawer, List, ListItem } from '@material-ui/core'


const SideBar = (props) => {


    const ScrollToElement = (element) => {
        scroller.scrollTo(element, {
            duration: 1500,
            delay: 500,
            smooth: true,
            offset: -80

        });
        props.onClose(false)
    }

    return (
        <Drawer
            anchor="right"
            open={props.open}
            onClose={() => props.onClose(false)}

        >


            <List component="nav">
                <ListItem button onClick={() => ScrollToElement('featured')}>
                    Event Starts in
                </ListItem>

                <ListItem button onClick={() => ScrollToElement('venueinfo')}>
                    Venue
                </ListItem>

                <ListItem button onClick={() => ScrollToElement('highlights')}>
                    Highlights
                </ListItem>

                <ListItem button onClick={() => ScrollToElement('sketches')}>
                    Sketches
                </ListItem>

                <ListItem button onClick={() => ScrollToElement('pricing')}>
                    Pricing
                </ListItem>

                <ListItem button onClick={() => ScrollToElement('location')}>
                    Location
                </ListItem>
            </List>
        </Drawer>
    );
};


export default SideBar;