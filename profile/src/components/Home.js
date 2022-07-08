import React from 'react';
import styles from "./styles/Home.module.css";
import Logo from "./assets/image/mypicprof.jpg";
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className={styles.container}>
            <div className={styles.about}>
               <span>سلام یاسین عوض زاده هستم </span><br/>
               <span>توسعه دهنده فرانت </span><br/>
               <span>:مسلط به </span><br/>
               <span>React , JavaScript , Css , Html , bootstarp , ssas</span><br/>
               <br/>
               <br/>
               <Link to="about" >More</Link>
            </div>
            <div className={styles.logo}>
            <img src={Logo} alt="logo" />
            </div>
        </div>
    );
};

export default Home;