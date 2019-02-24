import React, { Component } from 'react';
import './App.css';
import Router from '../components/Router';
import { connect } from 'react-redux';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { authAction } from '../actions/authAction';


firebase.initializeApp({
  apiKey: 'AIzaSyD3OB1XeATT4gU_j2Iaq4FS4rxaUqp1xPI',
  authDomain: 'mentor-dashboard-78d75.firebaseapp.com'
})

class App extends Component {
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
    ],
      
    callbacks: {
      signInSuccess: () => false,
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.props.getAuth(!!user)
    })
  }
  
  render() {
    return (
      <div>
          {this.props.auth.isLoggedIn ? (
            <Router/>
        ) : (
          <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()} /> 
        )}
      </div>
    );
  }
}

const mapStateToProps = ({authReducer}) => ({
  auth: authReducer,
});

const mapDispatchToProps = dispatch => ({
  getAuth: value => dispatch(authAction(value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
