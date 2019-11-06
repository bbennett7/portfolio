import React, { Component } from 'react';
import EBDesignImg from '../images/EB-Design.png'

export default class EBDesign extends Component {
    render() {
        return(
            <div className="EB-Design">
                <h2 className="Page-header">Erin Boyle Design</h2>
                <h4><a href="https://www.erinboyledesign.com/" className="App-link" target="blank">Visit Erin Boyle Design</a></h4>
                <h4><a href="https://github.com/bbennett7/ebdesign" className="App-link" target="blank">GitHub Repository</a></h4>
                <p>React</p>
                <p>Built using the JavaScript React library and Bootstrap, this web application showcases the work of renowned Los Angeles interior design firm, Erin Boyle Design. From multi-family housing units to upscale residential redecorating, this breadth of work is displayed through React components, vanilla CSS styling and Bootstrap for elements such as the navigation.</p>
                <img src={EBDesignImg} id="EB-Design" />
            </div>
        )
    }
}