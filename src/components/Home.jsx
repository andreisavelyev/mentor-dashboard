import React, { Component } from 'react';
import firebase from 'firebase';
import './home.css';

class Home extends Component {

  render() {
    return (
      <div className='home'>
        <h3>Hello, {firebase.auth().currentUser.displayName}</h3>
        <p>This is my final Rolling Scopes School project aimed at 
          identifying whether a task was checked by a mentor or not. 
          It takes data from three Google Sheets, merges it into a JSON file,
          creates a table with students and tasks and marks the cells accordingly.</p>
        <p>Technologies used: React, Redux, Firebase auth, Express, SheetJS js-xlsx</p>
      </div>
    );
  }
}

export default Home;