import React, { Fragment } from 'react'
// import { Link, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
// import SignUp from '../../../auth/components/SignUp'

import '../styles/Home.scss'

const authenticatedOptions = (
  <Fragment>
    <Link to="/change-password">
      <button className="ui-button" type="submit">Change Password</button>
    </Link>
    <Link to="/sign-out">
      <button className="ui-button" type="submit">Sign Out</button>
    </Link>
    <Link to="/create-character">
      <button className="ui-button" type="submit">New Character</button>
    </Link>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <Link to="/sign-up">
      <button className="ui-button" type="submit">Sign Up</button>
    </Link>
    <Link to="/sign-in">
      <button className="ui-button" type="submit">Sign In</button>
    </Link>
  </Fragment>
)

const Home = ({ user }) => (
  <Fragment>
    <div className="homescreen-menu">
      { user && <span className="welcome-message">Welcome, {user.email}</span>}
      <h1 className="homescreen-title">BattleGame</h1>
      <div>
        { user ? authenticatedOptions : unauthenticatedOptions }
      </div>
    </div>
  </Fragment>
)

export default Home
