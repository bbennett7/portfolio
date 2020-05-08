import React, { Component } from "react";
import styles from "./Header.module.scss";
import Github from "../../assets/socialicons/github.png";
import Twitter from "../../assets/socialicons/twitter.png";
import Linkedin from "../../assets/socialicons/linkedin.png";
import Medium from "../../assets/socialicons/medium.png";

export default class Header extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.header}>Bryn Catherine Bennett</div>
          <div className={styles.subHeader}>
            Full-Stack Software Developer | Problem Solver | Adventurer
          </div>
          <div className={styles.techList}>
            JavaScript | React | Express | Node | Ruby On Rails | SQL | HTML |
            CSS | Sass | AWS | Heroku | PostgreSQL | Redis | APIs | Firebase
          </div>
        </div>

        <div className={styles.iconsWrapper}>
          <a
            href="https://twitter.com/BrynBennett7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Twitter} className={styles.icon} />
          </a>
          <a
            href="https://medium.com/@bryn.bennett"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Medium} className={styles.icon} />
          </a>
          <a
            href="https://www.linkedin.com/in/bryncbennett/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Linkedin} className={styles.icon} />
          </a>
          <a
            href="https://github.com/bbennett7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Github} className={styles.icon} />
          </a>
        </div>
      </div>
    );
  }
}
