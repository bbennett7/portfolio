import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Menu.module.scss';
import { ReactComponent as Menu } from '../../assets/icons8-menu.svg';

const MenuBar = () => {
  const [mobileDisplay, setMobileDisplay] = useState(false);

  const menuDisplay = () => {
    if (!mobileDisplay) {
      return setMobileDisplay(true);
    }
    return setMobileDisplay(false);
  };

  return (
    <div className={styles.container}>
      <Menu className={styles.mobileMenu} onClick={menuDisplay} />
      <div className={styles.wrapper} id={mobileDisplay}>
        <Link to="/" className={styles.menuLink}>
          Home
        </Link>
        <Link to="/about" className={styles.menuLink}>
          About
        </Link>
        <Link to="/propertii" className={styles.menuLink}>
          Propertii
        </Link>
        <Link to="/erinboyledesign" className={styles.menuLink}>
          Erin Boyle Design
        </Link>
        <Link to="/wikitrash" className={styles.menuLink}>
          WikiTrash
        </Link>
        <Link to="/codecoach" className={styles.menuLink}>
          CodeCoach
        </Link>
        <Link to="/contact" className={styles.menuLink}>
          Contact
        </Link>
      </div>
    </div>
  );
};

export default MenuBar;
