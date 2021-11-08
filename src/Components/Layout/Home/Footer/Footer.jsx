// import SocialMedia from './SocialMedia';
import Facebook from '../../../../assets/facebook.png'
import { Image } from 'react-bootstrap';
import Instagram from '../../../../assets/instagram.png'
import React from "react";
import Twitter from '../../../../assets/twitter-sign.png'
import styles from './Footer.module.css';
export const Footer =()=>{
    return(
    
        <div className={styles.footer}> 
            <Image src={Twitter}  className={styles.img} />
            <Image src={Facebook} className={styles.img} />
            <Image src={Instagram} className={styles.img}  />
        </div>
    )
        
}
