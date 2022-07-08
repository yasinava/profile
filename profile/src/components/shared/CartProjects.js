import React from "react";
import styles  from "../styles/CartProject.module.css";
import github from "../assets/icons/github-svgrepo-com.svg";

const CartProjects = ({ data }) => {
  console.log(data);
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={data.image.logo} alt="pic"  />
      </div>
      <div className={styles.text}>
        <h1>{data.title}</h1>
        <div className={styles.buttons}>
        <a className={styles.buttonsVisit} href={data.link}>visit</a>
        <a href="#"><img src={github} alt="git"/></a>
        </div>
      </div>
    </div>
  );
};

export default CartProjects;
