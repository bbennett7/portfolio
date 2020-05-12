import React, { Component } from 'react';
import styles from './HomeIcon.module.scss';

export default class HomeIcon extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.iconWrapper}>
            <div className={styles.icon}>
              <img className={styles.greyIcon} src={this.props.greyFile} height="150" width="150" />
            </div>
            <div className={styles.icon}>
              <img
                className={styles.colorIcon}
                src={this.props.colorFile}
                height="150"
                width="150"
              />
            </div>
          </div>
        </div>
        <div className={styles.iconTextWrapper}>
          <h4 className={styles.iconText}>{this.props.title}</h4>
          <h6 className={styles.iconText}>{this.props.firstLine}</h6>
          <h6 className={styles.iconText}>{this.props.secondLine}</h6>
          <h6 className={styles.iconText}>{this.props.thirdLine}</h6>
          <h6 className={styles.iconText}>{this.props.fourthLine}</h6>
        </div>
      </div>
    );
  }
}
