import React, { Component } from 'react';

// import CardCarousel from './CardCarousel/CardCarousel';
import Footer from './Footer/Footer.jsx';
import NavBar from './Navbar/Navbar.jsx';
import styles from '../Home/Home.module.css';

// import UserService from "../../../services/user.service"

// import NavBar from "./Navbar/Navbar";

class Home extends Component{
    //  componentDidMount() {
    //     UserService.getPublicContent().then(
    //       response => {
    //         this.setState({
    //           content: response.data
    //         });
    //       },
    //       error => {
    //         this.setState({
    //           content:
    //             (error.response && error.response.data) ||
    //             error.message ||
    //             error.toString()
    //         });
    //       }
    //     );
    //   }
    render(){


        return(
            <div className={styles.container}>
               <NavBar/> 

                {/* <CardCarousel/> */}
                <Footer/>
           </div>
        )
    }
    
}
export default Home;