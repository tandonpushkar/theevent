import React, { Component } from 'react';
import './resources/styles.css';

import Header from './components/header_footer/Header';
import Featured from './components/Featured/index';
import VenueNfo from './components/venueNfo/index';
import Highlights from './components/Highlights/index';
import Sketches from './components/Sketches/index';
import Pricing from './components/pricing';
import Location from './components/location';
import Footer from './components/header_footer/footer';

import { Element } from 'react-scroll';


class App extends Component {
  render() {
    return (
      <div className="App" >


      
      <Header />
        

        <Element name="featured">
        <Featured/>
        </Element>

        <Element name="venueinfo">
        <VenueNfo/>
        </Element>
        
        

        <Element name="highlights">
        <Highlights/>
        </Element>

        <Element name="sketches">
        <Sketches/>
        </Element>
        

        <Element name="pricing">
        <Pricing />
        </Element>


        <Element name="location">
        <Location/>
        </Element>

        <Footer/>
        
       
        
      </div>
    );
  }
}

export default App;
