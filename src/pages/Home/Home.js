import React, { Component } from 'react';
import styles from './Home.module.scss';
import HomeIcon from '../../components/HomeIcon/HomeIcon';
import IUGrey from '../../assets/grey/iu-grey.png';
import IUColor from '../../assets/color/iu-color.png';
import VHGrey from '../../assets/grey/vh-grey.png';
import VHColor from '../../assets/color/vh-color.png';
import MGrey from '../../assets/grey/m-grey.png';
import MColor from '../../assets/color/m-color.png';
import TPGrey from '../../assets/grey/tp-grey.png';
import TPColor from '../../assets/color/tp-color.png';
import ZGrey from '../../assets/grey/z-grey.png';
import ZColor from '../../assets/color/z-color.png';
import RGrey from '../../assets/grey/r-grey.png';
import RColor from '../../assets/color/r-color.png';
import HGrey from '../../assets/grey/h-grey.png';
import HColor from '../../assets/color/h-color.png';
import SGrey from '../../assets/grey/s-grey.png';
import SColor from '../../assets/color/s-color.png';
import STColor from '../../assets/color/st-color.png';

export default class Home extends Component {
  render() {
    return (
      <div className={styles.container}>
        <HomeIcon
          greyFile={IUGrey}
          colorFile={IUColor}
          title="Indiana University"
          firstLine="The Kelley School of Business"
          secondLine="The Jacobs School of Music"
        />
        <HomeIcon
          greyFile={STColor}
          colorFile={STColor}
          title="Stealth Startup"
          firstLine="Full-stack software engineer for a stealth startup in the fintech space."
        />
        <HomeIcon
          greyFile={SGrey}
          colorFile={SColor}
          title="Syntx"
          firstLine="Full-stack software engineer building Node.js and React.js applications"
        />
        <HomeIcon
          greyFile={VHGrey}
          colorFile={VHColor}
          title="Velvet Hammer Music and Management"
          firstLine="Junior manager for Grammy-award winning artists"
        />
        <HomeIcon
          greyFile={MGrey}
          colorFile={MColor}
          title="Writer"
          firstLine="Contributor to Medium publications The Startup (500k+ followers), Better Programming (90k+ followers), and JavaScript in Plain English (12.3k+ followers)"
        />
        <HomeIcon
          greyFile={TPGrey}
          colorFile={TPColor}
          title="Tree People"
          firstLine="Volunteer tree planter"
        />
        <HomeIcon
          greyFile={ZGrey}
          colorFile={ZColor}
          title="Animal Lover"
          firstLine="Dog mom to Zuma, Bryn's rescued shepadoodle and baby"
        />
        <HomeIcon
          greyFile={RGrey}
          colorFile={RColor}
          title="Avid Reader"
          firstLine="Favorite Books:"
          secondLine="The Dharma Bums, Jack Kerouac"
          thirdLine="Travels with Charlie, John Steinbeck"
          fourthLine="Islands in the Stream, Ernest Hemingway"
        />
        <HomeIcon
          greyFile={HGrey}
          colorFile={HColor}
          title="Wellness and Active Lifestyle Enthusiast"
          firstLine="Yogi"
          secondLine="Runner"
          thirdLine="Rock climber"
          fourthLine="Meditation novice"
        />
      </div>
    );
  }
}
