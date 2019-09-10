import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class MenuBar extends Component {
    render() {
        return(
            <div className="Menu">
                <h4> <Link to="/">  Home  </Link> </h4>
                <h4> <Link to="/About"> About </Link></h4>
                <h4> <Link to="/ErinBoyleDesign"> Erin Boyle Design </Link> </h4>
                <h4> <Link to="/WikiTrash"> WikiTrash </Link> </h4>
                <h4> <Link to="/CodeCoach"> CodeCoach </Link> </h4>
                <h4> <Link to="/BucketList"> BucketList </Link> </h4>
                <h4> <Link to="/Contact"> Contact </Link> </h4>
             </div>
        )
    }
}