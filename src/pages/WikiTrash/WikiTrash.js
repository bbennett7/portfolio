import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import styles from './WikiTrash.module.scss';

const WikiTrash = () => {
  return (
    <div className={styles.container}>
      <PageHeader
        pageName={'Wikitrash'}
        liveLink={'https://wikitrash.herokuapp.com'}
        feLink={'https://github.com/bbennett7/wikitrash'}
        beLink={'https://github.com/bbennett7/developer-wikitrash'}
      />

      <p className={styles.tech}>React, Redux, Ruby on Rails, PostgreSQL</p>
      <p>
        WikiTrash is a resource that gathers and provides information on the responsible disposal of
        different materials. Users can contribute information on these responsible disposal
        guidelines, vote on the quality and accuracy of information provided by other users, and
        search the database for information.
      </p>
      <p>
        The front-end is built as a single-page web application using React and Redux, which
        consumes a separate Ruby on Rails back-end API. The application uses React components and
        containers, and the Redux store updates in sync with database updates, creating a fluid user
        experience.
      </p>

      <iframe
        src="https://www.youtube.com/embed/jskcDg8LbUo"
        frameBorder="0"
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WikiTrash;
