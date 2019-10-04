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


export default class Home extends Component {
    render() {
        return(
            <div className="Home">
                <HomeIcon greyFile={IUGrey} colorFile={IUColor}/>
                <HomeIcon greyFile={FIGrey} colorFile={FIColor}/>
                <HomeIcon greyFile={VHGrey} colorFile={VHColor}/>
                <HomeIcon greyFile={MGrey} colorFile={MColor}/>
                <HomeIcon which="TreePeople"/>
                <HomeIcon which="Dog Mom"/>
                <HomeIcon which="Reader"/>
                <HomeIcon which="Outdoor Activities"/>
            </div>
        )
    }
}