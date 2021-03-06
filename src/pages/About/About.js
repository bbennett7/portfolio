import React from 'react';
import styles from './About.module.scss';
import HeadShot from '../../assets/WebsiteImg.png';

const About = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.pageHeader}>About</h2>
      <div className={styles.wrapper}>
        <p>
          <img className={styles.headshot} src={HeadShot} />
          Based in Los Angeles, CA, Bryn is a full-stack engineer with a background in the music
          industry. Her career started at Velvet Hammer Music and Management Group, where she worked
          with artists such as System Of A Down, The Smashing Pumpkins, Code Orange, AFI, Deftones,
          Alice In Chains, and others on all aspects of their careers, from record rollouts, to
          publishing and rights management, to international tours.
        </p>
        <p>
          After leaving to pursue software engineering, she joined the Syntx team as a full-stack
          engineer. At Syntx she used Node, React, Express, and PostgreSQL to build applications
          from the ground up, as well as collaborated with other teams to add new functionality to
          existing applications.
        </p>
        <p>
          She now works at a stealth startup in the fintech space, and while the nature of her work
          is at this time secret, it is a very exciting and unique project.
        </p>
        <p>
          In her free time, you can find Bryn outside with her dog, friends, family, or all of the
          above. She is often hiking the Santa Monica Mountains, or volunteering with Tree People.
          Bryn&apos;s other passions include literature, vintage records, traveling, and gardening.
        </p>
      </div>
    </div>
  );
};

export default About;
