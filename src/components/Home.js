import React, { Component } from 'react';
import HomeIcon from './HomeIcon';
import IUGrey from '../images/grey/iu-grey.png';
import IUColor from '../images/color/iu-color.png';
import FIGrey from '../images/grey/fi-grey.jpg';
import FIColor from '../images/color/fi-color.jpg';
import VHGrey from '../images/grey/vh-grey.png';
import VHColor from '../images/color/vh-color.png';
import MGrey from '../images/grey/m-grey.png';
import MColor from '../images/color/m-color.png';
import TPGrey from '../images/grey/tp-grey.png';
import TPColor from '../images/color/tp-color.png';
import ZGrey from '../images/grey/z-grey.png';
import ZColor from '../images/color/z-color.png';
import RGrey from '../images/grey/r-grey.png';
import RColor from '../images/color/r-color.png';
import HGrey from '../images/grey/h-grey.png';
import HColor from '../images/color/h-color.png';


export default class Home extends Component {
    render() {
        return(
            <div className="Home">
                <HomeIcon greyFile={IUGrey} colorFile={IUColor} title="Indiana University" firstLine="The Kelley School of Business" secondLine="The Jacobs School of Music"/>
                <HomeIcon greyFile={FIGrey} colorFile={FIColor} title="The Flatiron School" firstLine="Full-stack Software Engineering Course" />
                <HomeIcon greyFile={VHGrey} colorFile={VHColor} title="Velvet Hammer Music and Management" firstLine="Junior manager for Grammy-award winning artists"/>
                <HomeIcon greyFile={MGrey} colorFile={MColor} title="Writer" firstLine="Contributor to The Startup, 500k+ followers" secondLine="Contributor to JavaScript in Plain English, 12.3k+ followers"/>
                <HomeIcon greyFile={TPGrey} colorFile={TPColor} title="Tree People" firstLine="Volunteer tree planter"/>
                <HomeIcon greyFile={ZGrey} colorFile={ZColor} title="Animal Lover" firstLine="Dog mom to Zuma, Bryn's rescued shepadoodle and baby"/>
                <HomeIcon greyFile={RGrey} colorFile={RColor} title="Avid Reader" firstLine="Favorite Books:" secondLine="The Dharma Bums, Jack Kerouac" thirdLine="Travels with Charlie, John Steinbeck" fourthLine="Islands in the Stream, Ernest Hemingway"/>
                <HomeIcon greyFile={HGrey} colorFile={HColor} title="Wellness and Active Lifestyle Enthusiast" firstLine="Yogi" secondLine="Runner" thirdLine="Rock climber" fourthLine="Meditation novice"/>
            </div>
        )
    }
}