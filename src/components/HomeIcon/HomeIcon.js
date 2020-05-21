import React from 'react';
import styles from './HomeIcon.module.scss';

const HomeIcon = props => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.iconWrapper}>
          <div className={styles.icon}>
            <img className={styles.greyIcon} src={props.greyFile} height="150" width="150" />
          </div>
          <div className={styles.icon}>
            <img className={styles.colorIcon} src={props.colorFile} height="150" width="150" />
          </div>
        </div>
      </div>
      <div className={styles.iconTextWrapper}>
        <h4 className={styles.iconText}>{props.title}</h4>
        <h6 className={styles.iconText}>{props.firstLine}</h6>
        <h6 className={styles.iconText}>{props.secondLine}</h6>
        <h6 className={styles.iconText}>{props.thirdLine}</h6>
        <h6 className={styles.iconText}>{props.fourthLine}</h6>
      </div>
    </div>
  );
};

export default HomeIcon;
