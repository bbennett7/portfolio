import React, { Component } from 'react';
import EBDesignImg from '../../assets/EB-Design.png';
import {ReactComponent as Github} from '../../assets/icons8-github.svg';
import {ReactComponent as Web} from '../../assets/icons8-website.svg';

export default class EBDesign extends Component {
    render() {
        return(
            <div className="EB-Design">
                <div className='componentHeaderWrapper'>
                    <h2 className="Page-header">Erin Boyle Design</h2>
                    <a href="https://www.erinboyledesign.com/" target="blank"><Web className='linkIcon' /></a>
                    <a href="https://github.com/bbennett7/ebdesign" target="blank"><Github className='linkIcon' /></a>
                </div>
                <p>React</p>
                <p>Built using the JavaScript React library and Bootstrap, this web application showcases the work of renowned Los Angeles interior design firm, Erin Boyle Design. From multi-family housing units to upscale residential redecorating, this breadth of work is displayed through React components, vanilla CSS styling and Bootstrap for elements such as the navigation.</p>
                <img src={EBDesignImg} className="projectImg" />
            </div>
        )
    }
}