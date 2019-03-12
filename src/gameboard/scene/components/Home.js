import React, { Fragment } from 'react'

import '../styles/Home.scss'

const Home = () => (
  <Fragment>
    <div className="homescreen-menu">
      <h1 className="homescreen-title">BattleGame</h1>
      <button className="homescreen-button" type="submit">Sign Up</button>
      <button className="homescreen-button" type="submit">Sign In</button>
    </div>
  </Fragment>
)

export default Home
