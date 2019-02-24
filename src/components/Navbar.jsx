import React from 'react';
import './navbar.css';
import { NavLink, withRouter } from 'react-router-dom';
import { AuthorizedUser } from './AuthorizedUser';

const Navbar = (props) => {
  return (
    <div className="navigation">
      <div className="buttons-container">
        <NavLink className="navigation-link" to="/" exact>Home</NavLink>
        <NavLink className="navigation-link" to="/mentors">Mentors</NavLink>
      </div>
      <AuthorizedUser />
    </div>
  )
}

export default withRouter(Navbar);
