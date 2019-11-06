import React, { Component } from 'react';
import HeadShot from '../images/WebsiteImg.png';

export default class About extends Component {
    render() {
        return(
            <div className="About">
                <h2 className="Page-header">About</h2>
                <img id="Headshot" src={HeadShot} />
                <p>Based in Los Angeles, CA, Bryn is a full-stack engineer with a background in the music industry. Her career started at Velvet Hammer Music and Management Group, where she worked with artists such as System Of A Down, The Smashing Pumpkins, Code Orange, AFI, Deftones, Alice In Chains, and others on all aspects of their careers, from record rollouts, to publishing and rights management, to international tours.</p>
                <p>After leaving to pursue software engineering, she joined the Syntx team as a full-stack engineer, where she currently works building full stack Node.js applications using Express, React, PostgreSQL, Redis, and more.</p>
                <p>In her free time, you can find Bryn outside with her dog, friends, family, or all of the above. She is often hiking the Santa Monica Mountains, or volunteering with Tree People. Bryn's other passions include literature, vintage records, traveling, and gardening.</p>
            </div>
        )
    }
}