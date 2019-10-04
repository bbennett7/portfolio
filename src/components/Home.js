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
                <HomeIcon greyFile={IUGrey} colorFile={IUColor}/>
                <HomeIcon greyFile={FIGrey} colorFile={FIColor}/>
                <HomeIcon greyFile={VHGrey} colorFile={VHColor}/>
                <HomeIcon greyFile={MGrey} colorFile={MColor}/>
                <HomeIcon greyFile={TPGrey} colorFile={TPColor}/>
                <HomeIcon greyFile={ZGrey} colorFile={ZColor}/>
                <HomeIcon greyFile={RGrey} colorFile={RColor}/>
                <HomeIcon greyFile={HGrey} colorFile={HColor}/>
            </div>
        )
    }
}