import '../Home/Home.css';

import React, { Component } from 'react';

import CardCarousel from './CardCarousel/CardCarousel';
import Footer from './Footer/Footer';

// import NavBar from "./Navbar/Navbar";

class Home extends Component{
    render(){


        return(
            <div>
                <CardCarousel/>
                <Footer/>
           </div>
        )
    }
    
}
export default Home;