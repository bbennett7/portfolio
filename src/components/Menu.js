import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as Menu} from '../../src/images/icons8-menu.svg';


export default class MenuBar extends Component {
    constructor() {
        super();
        this.state = {
            path: "",
            mobileDisplay: "Display-false"
        }
    }

    handleOnClick = (event) => {
        let path = event.target.innerHTML.toLowerCase().replace(" ", "").replace(" ", "");

        this.setState ({
            path: path,
            mobileDisplay: "Display-false"
        })
    }

    getClass = (component) => {
        if (this.state.path === component) {
            return "Active"
        } else {
            return "Inactive"
        }
    }

    menuDisplay = () => {
        console.log(this.state)
        let status = "";

        if (this.state.mobileDisplay === "Display-false") {
            status = "Display-true";
        } else if (this.state.mobileDisplay === "Display-true") {
            status = "Display-false";
        }

        this.setState({
            ...this.state,
            mobileDisplay: status
        })
    }


    render() {
        return(
            <div className="Menu">
                <Menu id="Mobile-menu" onClick={this.menuDisplay}/>
                <div className="Menu-links" id={this.state.mobileDisplay}>
                    <h4 onClick={this.handleOnClick}> <Link to="/home" className={`${this.getClass("home")} menuLink`}>Home</Link> </h4>
                    <h4 onClick={this.handleOnClick}> <Link to="/about" className={`${this.getClass("about")} menuLink`}>About</Link></h4>
                    <h4 onClick={this.handleOnClick}> <Link to="/propertii" className={`${this.getClass("propertii")} menuLink`}>Propertii</Link> </h4>
                    <h4 onClick={this.handleOnClick}> <Link to="/erinboyledesign" className={`${this.getClass("erinboyledesign")} menuLink`}>Erin Boyle Design</Link> </h4>
                    <h4 onClick={this.handleOnClick}> <Link to="/wikitrash" className={`${this.getClass("wikitrash")} menuLink`}>WikiTrash</Link> </h4>
                    <h4 onClick={this.handleOnClick}> <Link to="/codecoach" className={`${this.getClass("codecoach")} menuLink`}>CodeCoach</Link> </h4>
                    <h4 onClick={this.handleOnClick}> <Link to="/contact" className={`${this.getClass("contact")} menuLink`}>Contact</Link> </h4>
                </div>
             </div>
        )
    }
}