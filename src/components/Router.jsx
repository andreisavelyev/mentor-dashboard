import React, { Component } from 'react';
import Home from './Home';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Mentor from '../containers/Mentor';
import MenteesTable from '../containers/MenteesTable';

class Router extends Component {
  
  render() {
    return (
      <BrowserRouter>
      <div>
        <Navbar />
        <Route path='/' exact component={Home} />
        <Route path='/mentors' exact component={Mentor} />
        <Route path='/mentors/:mentor' exact component={MenteesTable} />
      </div>
    </BrowserRouter>
      // <Home />
    );
  }
}

export default Router;
