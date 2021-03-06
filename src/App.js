// dependencies
import React, { Component } from 'react'
import Alert from 'react-bootstrap/Alert'
// components
import Header from './components/Header'
import MainRoutes from './components/MainRoutes'
// style
import './App.scss'

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

  alert = (message, type) => {
    this.setState({ alerts: [...this.state.alerts, { message, type }] })
  }

  render () {
    const { user, alerts } = this.state

    return (
      <React.Fragment>
        <Header user={user} />
        <main className="container">
          <div className="game-canvas">
            <MainRoutes alert={this.alert}/>
          </div>
          <footer>
            {alerts.map((alert, index) => (
              <Alert key={index} dismissible variant={alert.type}>
                <Alert.Heading>
                  {alert.message}
                </Alert.Heading>
              </Alert>
            ))}
          </footer>
        </main>
      </React.Fragment>
    )
  }
}

export default App
