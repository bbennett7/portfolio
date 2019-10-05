import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class MenuBar extends Component {
    constructor() {
        super();
        this.state = {
            path: ""
        }
    }

    handleOnClick = (event) => {
        console.log(event.target.innerHTML)
        let path = event.target.innerHTML.toLowerCase().replace(" ", "");
        console.log(path)
        this.setState ({
            path: path
        })
        console.log(this.state)
    }

    getClass = (component) => {
        if (this.state.path === component) {
            return "Active"
        } else {
            return "Inactive"
        }
    }


    render() {
        return(
            <div className="Menu">
                <h4 onClick={this.handleOnClick}> <Link to="/home" className={this.getClass("home")}>Home</Link> </h4>
                <h4 onClick={this.handleOnClick}> <Link to="/about" className={this.getClass("about")}>About</Link></h4>
                <h4 onClick={this.handleOnClick}> <Link to="/erinboyledesign" className={this.getClass("erinboyledesign")}>Erin Boyle Design</Link> </h4>
                <h4 onClick={this.handleOnClick}> <Link to="/wikiTrash" className={this.getClass("wikitrash")}>WikiTrash</Link> </h4>
                <h4 onClick={this.handleOnClick}> <Link to="/codecoach" className={this.getClass("codecoach")}>CodeCoach</Link> </h4>
                <h4 onClick={this.handleOnClick}> <Link to="/bucketList" className={this.getClass("bucketlist")}>BucketList</Link> </h4>
                <h4 onClick={this.handleOnClick}> <Link to="/contact" className={this.getClass("contact")}>Contact</Link> </h4>
             </div>
        )
    }
}