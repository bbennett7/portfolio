import React, { Component } from 'react';
import HeadShot from '../images/WebsiteImg.png';

export default class About extends Component {
    render() {
        return(
            <div className="About">
                <h2 className="Page-header">About</h2>
                <img id="Headshot" src={HeadShot} />
                <p>Based in Los Angeles, CA, Bryn is a passionate, full-stack software engineer with a background in the music industry. Her career started at Velvet Hammer Music and Management Group, where she worked with artists such as System Of A Down, The Smashing Pumpkins, Code Orange, AFI, Deftones, Alice In Chains, and others on all aspects of their careers, from record rollouts, to publishing and rights management, to international tours.</p>
                <p>After leaving Velvet Hammer, she enrolled in and completed The Flatiron School's full-time software engineering course, where she become proficient in Ruby on Rails, JavaScript, NodeJS, React, and Redux. During this time, she supplemented the work with other courses and materials on computer science, the MERN stack, IoT, Golang, and more. These skills have been applied to various freelance web development projects, as well as Bryn's time at Erin Boyle Design, where she worked as a graphic designer and web developer for the design firm.</p>
                <p>In her free time, you can usually find Bryn outside with her dog, friends, family, or all of the above. She is often hiking the Santa Monica Mountains, or volunteering with Tree People, one of her favorite non-profit organizations. Bryn's other passions include literature, vintage records, traveling, guitars, and gardening.</p>
            </div>
        )
    }
}