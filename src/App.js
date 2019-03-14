import React, { Component } from 'react'
import './App.scss'

import Header from './header/Header'
import MainRoutes from './MainRoutes'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      alerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  render () {
    const { user } = this.state

    return (
      <React.Fragment>
        <Header user={user} />
        <main className="container">
          <div className="game-canvas">
            <MainRoutes />
          </div>
        </main>
      </React.Fragment>
    )
  }
}

export default App
