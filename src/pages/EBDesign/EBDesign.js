import React from 'react';
import styles from './EBDesign.module.scss';
import EBDesignImg from '../../assets/EB-Design.png';
import PageHeader from '../../components/PageHeader/PageHeader';

const EBDesign = () => {
  return (
    <div className={styles.container}>
      <PageHeader
        pageName={'Erin Boyle Design'}
        liveLink={'https://www.erinboyledesign.com/'}
        feLink={'https://github.com/bbennett7/ebdesign'}
      />

      <p className={styles.tech}>React</p>
      <p>
        Built using the JavaScript React library and Bootstrap, this web application showcases the
        work of renowned Los Angeles interior design firm, Erin Boyle Design. From multi-family
        housing units to upscale residential redecorating, this breadth of work is displayed through
        React components, vanilla CSS styling and Bootstrap for elements such as the navigation.
      </p>
      <div>
        <img src={EBDesignImg} className={styles.image} />
      </div>
    </div>
  );
};

export default EBDesign;
