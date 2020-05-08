import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Menu.module.scss';
import { ReactComponent as Menu } from '../../assets/icons8-menu.svg';

export default class MenuBar extends Component {
  state = {
    path: '',
    mobileDisplay: 'Display-false'
  };

  handleOnClick = event => {
    const path = event.target.innerHTML
      .toLowerCase()
      .replace(' ', '')
      .replace(' ', '');

    this.setState({
      path,
      mobileDisplay: 'Display-false'
    });
  };

  getClass = component => {
    if (this.state.path === component) {
      return styles.active;
    }
    return styles.inactive;
  };

  menuDisplay = () => {
    console.log(this.state);
    let status = '';

    if (this.state.mobileDisplay === 'Display-false') {
      status = 'Display-true';
    } else if (this.state.mobileDisplay === 'Display-true') {
      status = 'Display-false';
    }

    this.setState({
      ...this.state,
      mobileDisplay: status
    });
  };

  render() {
    return (
      <div className={styles.container}>
        <Menu className={styles.mobileMenu} onClick={this.menuDisplay} />
        <div className={styles.wrapper} id={this.state.mobileDisplay}>
          <div onClick={this.handleOnClick}>
            {' '}
            <Link to="/home" className={`${this.getClass('home')} ${styles.menuLink}`}>
              Home
            </Link>{' '}
          </div>
          <div onClick={this.handleOnClick}>
            {' '}
            <Link to="/about" className={`${this.getClass('about')} ${styles.menuLink}`}>
              About
            </Link>
          </div>
          <div onClick={this.handleOnClick}>
            {' '}
            <Link to="/propertii" className={`${this.getClass('propertii')} ${styles.menuLink}`}>
              Propertii
            </Link>{' '}
          </div>
          <div onClick={this.handleOnClick}>
            {' '}
            <Link
              to="/erinboyledesign"
              className={`${this.getClass('erinboyledesign')} ${styles.menuLink}`}
            >
              Erin Boyle Design
            </Link>{' '}
          </div>
          <div onClick={this.handleOnClick}>
            {' '}
            <Link to="/wikitrash" className={`${this.getClass('wikitrash')} ${styles.menuLink}`}>
              WikiTrash
            </Link>{' '}
          </div>
          <div onClick={this.handleOnClick}>
            {' '}
            <Link to="/codecoach" className={`${this.getClass('codecoach')} ${styles.menuLink}`}>
              CodeCoach
            </Link>{' '}
          </div>
          <div onClick={this.handleOnClick}>
            {' '}
            <Link to="/contact" className={`${this.getClass('contact')} ${styles.menuLink}`}>
              Contact
            </Link>{' '}
          </div>
        </div>
      </div>
    );
  }
}
