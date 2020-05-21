import React from 'react';
import styles from './PageHeader.module.scss';
import { ReactComponent as Github } from '../../assets/icons8-github.svg';
import { ReactComponent as Web } from '../../assets/icons8-website.svg';

const PageHeader = ({ pageName, liveLink, beLink, feLink }) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.header}>{pageName}</h2>
      <div>
        <div className={styles.iconWrapper}>
          <a href={liveLink} target="_blank" rel="noopener noreferrer">
            <Web className={styles.icon} />
          </a>
        </div>
        {feLink ? (
          <div className={styles.iconWrapper}>
            <a href={feLink} target="_blank" rel="noopener noreferrer">
              <Github className={styles.icon} />
            </a>
            FE
          </div>
        ) : null}
        {beLink ? (
          <div className={styles.iconWrapper}>
            <a href={beLink} target="_blank" rel="noopener noreferrer">
              <Github className={styles.icon} />
            </a>
            BE
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default PageHeader;
