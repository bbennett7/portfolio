import React, { Component } from 'react';
import HomeIcon from './HomeIcon';
import IUGrey from '../images/grey/iu-grey.jpg';
import IUColor from '../images/color/iu-color.jpg';

export default class Home extends Component {
    render() {
        return(
            <div className="Home">
                <HomeIcon greyFile={IUGrey} colorFile={IUColor}/>
                <HomeIcon which="Flatiron"/>
                <HomeIcon which="VelvetHammer"/>
                <HomeIcon which="Writer for Medium"/>
                <HomeIcon which="TreePeople"/>
                <HomeIcon which="Hack For LA"/>
                <HomeIcon which="Dog Mom"/>
                <HomeIcon which="Reader"/>
                <HomeIcon which="Outdoor Activities"/>
            </div>
        )
    }
}