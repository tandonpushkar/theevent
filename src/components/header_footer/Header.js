import React, { Component } from 'react';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import { Menu } from '@material-ui/icons';

import SideBar from './SideBar'



class Header extends Component {

    state = {
        drawerOpen: false,
        headerShow: false
    }

    componentDidMount(){
        window.addEventListener('scroll' , this.handleScroll);
    }

    handleScroll = () => {
        if(window.scrollY > 0)
        {
            this.setState ({
                headerShow : true
            })
        }
        else
        {
            this.setState ({
                headerShow : false
            })
        }
    }

    


    toggleDrawer = (value) => {
        this.setState({
            drawerOpen: value
        })
    }

    render() {
        return (
            <AppBar
                position="fixed"
                style={{
                    backgroundColor: this.state.headerShow ? '#2f2f2f' : 'transparent',
                    boxShadow: 'none',
                    padding: '10px',
                }}
            >
                <Toolbar>
                    <div className="header_logo">
                        <div className="font_righteous header_logo_venue">The Venue</div>
                        <div className="header_logo_title">Art Events</div>
                    </div>
                    

                    <IconButton
                        aria-label="Menu"
                        color="inherit"
                        onClick={() => this.toggleDrawer(true)}

                    >
                        <Menu />
                    </IconButton>

                    <SideBar
                        open={this.state.drawerOpen}
                        onClose={(value) => this.toggleDrawer(value)}
                    />

                </Toolbar>

            </AppBar>
        );
    }
}

export default Header;