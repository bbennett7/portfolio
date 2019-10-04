import React, { Component } from 'react';

export default class HomeIcon extends Component {
    render() {
        return(
            <div className="Home-icon" >
                <img className="Grey-icon" src={this.props.greyFile} height="150" width="150" />
                <img className="Color-icon" src={this.props.colorFile} height="150" width="150" />
            </div>
        )
    }
}