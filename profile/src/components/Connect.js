import React from 'react';
import github from "./assets/icons/github-svgrepo-com.svg";
import instagram from "./assets/icons/instagram-svgrepo-com.svg";
import whatsapp from "./assets/icons/whatsapp-svgrepo-com.svg";
import linkedin from "./assets/icons/linkedin-svgrepo-com.svg";
import styles from "./styles/Connect.module.css";
import profile from "./assets/image/mypicprof.jpg"

const Connect = () => {
    return (
        <div className={styles.container}>
            <div className={styles.cartContainer}>
                <div><img src={profile} alt='mypic'/></div>
                <div className={styles.info}>
                    <p>Yasin Avazzadeh</p>
                    <p>front-end Developer</p>
                    <p>+98 9303711924</p>
                    <p>yasinava291@gmail.com</p>
                </div>
            </div>
            <div className={styles.logoContainer}>
                <a href='https://github.com/yasinava/profile'><img src={github} alt="logo"/></a>
                <a href='https://instagram.com/yasinava/?__a=1'><img src={instagram} alt="logo1"/></a>
                <a href='#'><img src={linkedin} alt="logo3"/></a>
                <a href='https://wa.me/989303711924'><img src={whatsapp} alt="logo2"/></a>
            </div>
        </div>
    );
};

export default Connect;