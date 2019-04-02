import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'

import { signIn } from '../api'
import messages from '../messages'

class SignIn extends Component {
  constructor () {
    super()

    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onSignIn = event => {
    event.preventDefault()

    const { alert, history, setUser } = this.props

    signIn(this.state)
      .then(res => setUser(res.data.user))
      .then(() => alert(messages.signInSuccess, 'success'))
      .then(() => history.push('/'))
      .catch(() => {
        this.setState({ email: '', password: '' })
        alert(messages.signInFailure, 'danger')
      })
  }

  render () {
    const { email, password } = this.state

    return (
      <div className="game-screens">
        <h1 className="otherscreen-title">HeroBuilder</h1>
        <form className='auth-form' autoComplete="off" onSubmit={this.onSignIn}>
          <h4>Login</h4>
          <label htmlFor="email">Email</label>
          <input
            required
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            required
            name="password"
            value={password}
            type="password"
            placeholder="Password"
            onChange={this.handleChange}
          />
          <div className="button-container">
            <button className="ui-button" type="submit">Login</button>
            <button className="mm-ui-button"><Link to="/">Main Menu</Link></button>
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(SignIn)
