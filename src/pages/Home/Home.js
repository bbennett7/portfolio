import React from 'react';
import styles from './Home.module.scss';
import iconData from './IconData';
import HomeIcon from '../../components/HomeIcon/HomeIcon';

const Home = () => {
  const renderIcons = () => {
    return iconData.map(icon => {
      const { greyFile, colorFile, title, firstLine, secondLine, thirdLine, fourthLine } = icon;
      return (
        <div className={styles.wrapper} key={title}>
          <HomeIcon
            greyFile={greyFile}
            colorFile={colorFile}
            title={title}
            firstLine={firstLine}
            secondLine={secondLine}
            thirdLine={thirdLine}
            fourthLine={fourthLine}
          />
        </div>
      );
    });
  };
  return <div className={styles.container}>{renderIcons()}</div>;
};

export default Home;
