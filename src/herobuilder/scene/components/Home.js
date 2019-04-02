import React from 'react'
// import { Link, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
// import SignUp from '../../../auth/components/SignUp'

import '../styles/Home.scss'

const authenticatedOptions = (
  <div className='game-screens'>
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
  </div>
)

const unauthenticatedOptions = (
  <div className='game-screens'>
    <Link to="/sign-up">
      <button className="ui-button" type="submit">Register</button>
    </Link>
    <Link to="/sign-in">
      <button className="ui-button" type="submit">Login</button>
    </Link>
  </div>
)

const Home = ({ user }) => (
  <div className='game-screens'>
    <div className="homescreen-menu">
      { user && <span className="welcome-message">Welcome, {user.email}</span>}
      <h1 className="homescreen-title">HeroBuilder</h1>
      <div className="button-container">
        { user ? authenticatedOptions : unauthenticatedOptions }
      </div>
    </div>
  </div>
)

export default Home
