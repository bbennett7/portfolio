import React, { Component } from 'react';
import { ReactComponent as Github } from '../../assets/icons8-github.svg';
import { ReactComponent as Web } from '../../assets/icons8-website.svg';

export default class WikiTrash extends Component {
  render() {
    return (
      <div className="Wiki-trash">
        <div className="componentHeaderWrapper">
          <h2 className="Page-header">Wikitrash</h2>
          <a href="https://wikitrash.herokuapp.com" target="_blank" rel="noopener noreferrer">
            <Web className="linkIcon" />
          </a>
          <a
            href="https://github.com/bbennett7/wikitrash"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="linkIcon" /> (Frontend)
          </a>
          <a
            href="https://github.com/bbennett7/developer-wikitrash"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="linkIcon" /> (Backend)
          </a>
        </div>
        <p>React, Redux, Ruby on Rails, PostgreSQL</p>
        <p>
          WikiTrash is a resource that gathers and provides information on the responsible disposal
          of different materials. Users can contribute information on these responsible disposal
          guidelines, vote on the quality and accuracy of information provided by other users, and
          search the database for information.
        </p>
        <p>
          The front-end is built as a single-page web application using React and Redux, which
          consumes a separate Ruby on Rails back-end API. The application uses React components and
          containers, and the Redux store updates in sync with database updates, creating a fluid
          user experience.
        </p>

        <iframe
          src="https://www.youtube.com/embed/jskcDg8LbUo"
          frameBorder="0"
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
  }
}