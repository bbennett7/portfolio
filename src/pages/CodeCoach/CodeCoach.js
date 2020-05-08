import React, { Component } from 'react';
import { ReactComponent as Github } from '../../assets/icons8-github.svg';
import { ReactComponent as Web } from '../../assets/icons8-website.svg';

export default class CodeCoach extends Component {
  render() {
    return (
      <div className="Code-Coach">
        <div className="componentHeaderWrapper">
          <h2 className="Page-header">CodeCoach</h2>
          <a
            href="https://code-coach-app.herokuapp.com"
            className="App-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Web className="linkIcon" />
          </a>
          <a
            href="https://github.com/bbennett7/codecoach"
            className="App-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="linkIcon" />
          </a>
        </div>
        <p>JavaScript, Ruby on Rails</p>
        <p>
          Inspired by the idea that, with a little guidance in traversing the world of open source
          resources, the opportunity to learn software engineering can be available to students from
          all over the globe and all walks of life, CodeCoach is a web application that allows
          students to connect with software engineers for mentorship in this very area.
        </p>

        <p>
          When a student signs up, she can view and select an unpaired software engineer to be her
          coach based on the engineer&apos;s experience, programming languages, GitHub, and
          location. This relationship is made possible through a self-referential join table on the
          back-end. Once the selection is made, the coach can upload links to open source materials
          based on a student&apos;s interests and experience level, creating a custom curriculum
          tailored to the student&apos;s needs.
        </p>

        <p>
          The student automatically has access to any resource that her coach adds, and can track
          which she has read and which she still needs to read, mark those that are of the highest
          priority, and view the library sorted by language. She also can rate each resource, and
          use the &quot;Top Resources&quot; discovery tool, which collects all resources from any
          student with the highest rating of 10, to find new topics to explore. The majority of
          CodeCoach is written in Ruby on Rails, but vanilla JavaScript is used for certain
          functionality such as appending a resource to the recently added resources section as soon
          as it is added.
        </p>

        <iframe
          src="https://www.youtube.com/embed/Viuy3M6yqkA"
          frameBorder="0"
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
  }
}