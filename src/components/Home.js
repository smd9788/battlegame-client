import React from 'react'
// import { Link, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

import './Home.scss'

const authenticatedOptions = (
  <React.Fragment>
    <Link to="/create-character">
      <button className="ui-button" type="submit">New Hero</button>
    </Link>
    <Link to="/characters">
      <button className="ui-button" type="submit">Your Heroes</button>
    </Link>
    <Link to="/change-password">
      <button className="ui-button" type="submit">Change Password</button>
    </Link>
    <Link to="/sign-out">
      <button className="ui-button" type="submit">Sign Out</button>
    </Link>
  </React.Fragment>
)

const unauthenticatedOptions = (
  <React.Fragment>
    <Link to="/sign-up">
      <button className="ui-button" type="submit">Register</button>
    </Link>
    <Link to="/sign-in">
      <button className="ui-button" type="submit">Login</button>
    </Link>
  </React.Fragment>
)

const Home = ({ user }) => (
  <React.Fragment>
    <div className="game-screens">
      { user && <span className="welcome-message">Welcome, {user.email}</span>}
      <h1 className="homescreen-title">HeroBuilder</h1>
      <div className="button-container">
        { user ? authenticatedOptions : unauthenticatedOptions }
      </div>
    </div>
  </React.Fragment>
)

export default Home
