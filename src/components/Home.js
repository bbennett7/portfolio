import React, { Component } from 'react';
import HomeIcon from './HomeIcon';
import IUGrey from '../images/grey/iu-grey.jpg';
import IUColor from '../images/color/iu-color.jpg';
import FIGrey from '../images/grey/fi-grey.jpg';
import FIColor from '../images/color/fi-color.jpg';
import VHGrey from '../images/grey/vh-grey.jpg';
import VHColor from '../images/color/vh-color.jpg';
import MGrey from '../images/grey/m-grey.jpg';
import MColor from '../images/color/m-color.jpg';
import TPGrey from '../images/grey/tp-grey.jpg';
import TPColor from '../images/color/tp-color.jpg';
import ZGrey from '../images/grey/z-grey.jpg';
import ZColor from '../images/color/z-color.jpg';
import RGrey from '../images/grey/r-grey.jpg';
import RColor from '../images/color/r-color.jpg';
import HGrey from '../images/grey/h-grey.jpg';
import HColor from '../images/color/h-color.jpg';


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
                <HomeIcon greyFile={RGrey} colorFile={RColor} title="Avid Reader" firstLine="Favorite Books:" secondLine="The Dharma Bums by Jack Kerouac" thirdLine="Travels with Charlie by John Steinbeck" fourthLine="Islands in the Stream by Ernest Hemingway"/>
                <HomeIcon greyFile={HGrey} colorFile={HColor} title="Wellness and Active Lifestyle Enthusiast" firstLine="Yogi" secondLine="Runner" thirdLine="Rock climber" fourthLine="Meditation novice"/>
            </div>
        )
    }
}