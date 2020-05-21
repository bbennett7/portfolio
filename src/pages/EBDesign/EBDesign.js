import React, { Component } from 'react';
import styles from './EBDesign.module.scss';
import EBDesignImg from '../../assets/EB-Design.png';
import { ReactComponent as Github } from '../../assets/icons8-github.svg';
import { ReactComponent as Web } from '../../assets/icons8-website.svg';

export default class EBDesign extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.headerWrapper}>
          <h2 className="Page-header">Erin Boyle Design</h2>
          <div>
            <div className={styles.iconWrapper}>
              <a href="https://www.erinboyledesign.com/" target="_blank" rel="noopener noreferrer">
                <Web className={styles.icon} />
              </a>
            </div>
            <div className={styles.iconWrapper}>
              <a
                href="https://github.com/bbennett7/ebdesign"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className={styles.icon} />
              </a>
            </div>
          </div>
        </div>
        <p className={styles.tech}>React</p>
        <p>
          Built using the JavaScript React library and Bootstrap, this web application showcases the
          work of renowned Los Angeles interior design firm, Erin Boyle Design. From multi-family
          housing units to upscale residential redecorating, this breadth of work is displayed
          through React components, vanilla CSS styling and Bootstrap for elements such as the
          navigation.
        </p>
        <div>
          <img src={EBDesignImg} className={styles.image} />
        </div>
      </div>
    );
  }
}
