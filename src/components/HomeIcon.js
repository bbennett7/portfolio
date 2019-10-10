import React, { Component } from 'react';

export default class HomeIcon extends Component {
    render() {
        return(
            <div className="Home-icon" >
                <img className="Grey-icon" src={this.props.greyFile} height="150" width="150" />
                <img className="Color-icon" src={this.props.colorFile} height="150" width="150" />
                <div id="Icon-text">
                    <h4 className="Icon-text">{this.props.title}</h4>
                    <h6 className="Icon-text">{this.props.firstLine}</h6>
                    <h6 className="Icon-text">{this.props.secondLine}</h6>
                    <h6 className="Icon-text">{this.props.thirdLine}</h6>
                    <h6 className="Icon-text">{this.props.fourthLine}</h6>
                </div>
            </div>
        )
    }
}