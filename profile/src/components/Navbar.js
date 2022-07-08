import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./styles/Navbar.module.css"


const Navbar = () => {
    return (
        <div className={styles.container}>   
            <div>
                <Link to="/" >Yasin Evzdh</Link>
            </div>
            <div className={styles.titles}>
                <Link to="/" >Home</Link>
                <Link to="projects" >Projects</Link>
                <Link to="connect" >Connect</Link>
            </div>
        </div>
    );
};

export default Navbar;