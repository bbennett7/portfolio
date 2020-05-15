import React, { Component } from 'react';
import styles from './Propertii.module.scss';
import { ReactComponent as Github } from '../../assets/icons8-github.svg';
import { ReactComponent as Web } from '../../assets/icons8-website.svg';
import PropertiiHome from '../../assets/PropertiiHome.png';
import PropertiiAccount from '../../assets/PropertiiAccount.png';
import PropertiiMgmtHome from '../../assets/PropertiiBuildingMgmtHome.png';

export default class Propertii extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.componentHeaderWrapper}>
          <h2 className={styles.header}>Propertii</h2>
          <div className={styles.iconsWrapper}>
            <div className={styles.iconWrapper}>
              <a
                href="https://propertii.us/"
                className="App-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Web className={styles.icon} />
              </a>
            </div>
            <div className={styles.iconWrapper}>
              <a
                href="https://github.com/bbennett7/properti-web-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className={styles.icon} />
              </a>
              FE
            </div>
            <div className={styles.iconWrapper}>
              <a
                href="https://github.com/bbennett7/properti-server"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className={styles.icon} />
              </a>
              BE
            </div>
          </div>
        </div>
        <p className={styles.tech}>React, Express, PostgreSQL, Yelp API, Firebase</p>
        <p>
          Propertii is a web application that allows building managers and residents to connect on
          and track building repairs. Built using React, Express, and PostgreSQL, residents can open
          up tasks that need tending to and add notes about what exactly is wrong.
        </p>
        <p>
          Once this has been added, the building manager will see it on their list of open tasks.
          The building manager can then search for a local service (through integration with the
          Yelp API), change the status of the repair, and contact the resident.
        </p>

        <div className={styles.imageWrapper}>
          <img src={PropertiiHome} className={styles.image} />
        </div>
        <div className={styles.imageWrapper}>
          <img src={PropertiiAccount} className={styles.image} />
        </div>
        <div className={styles.imageWrapper}>
          <img src={PropertiiMgmtHome} className={styles.image} />
        </div>
      </div>
    );
  }
}
