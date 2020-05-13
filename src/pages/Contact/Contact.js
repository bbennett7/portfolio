import React, { Component } from 'react';
import styles from './Contact.module.scss';
import Animation from '../../components/Animation/Animation';

export default class Contact extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h2>Contact</h2>
        <h3>
          If you would like to connect, send Bryn a note at{' '}
          <a href="mailto:bryn.bennett@gmail.com" className={styles.email}>
            bryn.bennett@gmail.com
          </a>
          . She is especially happy to speak with up and coming developers.
        </h3>
        <Animation />
        {/* <img className="Mountain" src={Mountain} /> */}
      </div>
    );
  }
}
