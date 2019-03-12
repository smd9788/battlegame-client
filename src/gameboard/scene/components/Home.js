import React, { Fragment } from 'react'
// import { Link, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
// import SignUp from '../../../auth/components/SignUp'

import '../styles/Home.scss'

const Home = () => (
  <Fragment>
    <div className="homescreen-menu">
      <h1 className="homescreen-title">BattleGame</h1>
      <Link to="/sign-up">
        <button className="homescreen-button" type="submit">Sign Up</button>
      </Link>
      <Link to="/sign-in">
        <button className="homescreen-button" type="submit">Sign In</button>
      </Link>
    </div>
  </Fragment>
)

export default Home
