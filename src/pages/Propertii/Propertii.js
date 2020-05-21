import React from 'react';
import styles from './Propertii.module.scss';
import PageHeader from '../../components/PageHeader/PageHeader';
import PropertiiHome from '../../assets/PropertiiHome.png';
import PropertiiAccount from '../../assets/PropertiiAccount.png';
import PropertiiMgmtHome from '../../assets/PropertiiBuildingMgmtHome.png';

const Propertii = () => {
  return (
    <div className={styles.container}>
      <PageHeader
        pageName={'Propertii'}
        liveLink={'https://propertii.us/'}
        feLink={'https://github.com/bbennett7/properti-web-app'}
        beLink={'https://github.com/bbennett7/properti-server'}
      />

      <p className={styles.tech}>React, Express, PostgreSQL, Yelp API, Firebase</p>
      <p>
        Propertii is a web application that allows building managers and residents to connect on and
        track building repairs. Built using React, Express, and PostgreSQL, residents can open up
        tasks that need tending to and add notes about what exactly is wrong.
      </p>
      <p>
        Once this has been added, the building manager will see it on their list of open tasks. The
        building manager can then search for a local service (through integration with the Yelp
        API), change the status of the repair, and contact the resident.
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
};

export default Propertii;
