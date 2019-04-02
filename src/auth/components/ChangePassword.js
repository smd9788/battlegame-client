import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'

import { changePassword } from '../api'
import messages from '../messages'

class ChangePassword extends Component {
  constructor () {
    super()

    this.state = {
      oldPassword: '',
      newPassword: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onChangePassword = event => {
    event.preventDefault()

    const { alert, history, user } = this.props

    changePassword(this.state, user)
      .then(() => alert(messages.changePasswordSuccess, 'success'))
      .then(() => history.push('/'))
      .catch(error => {
        console.error(error)
        this.setState({ oldPassword: '', newPassword: '' })
        alert(messages.changePasswordFailure, 'danger')
      })
  }

  render () {
    const { oldPassword, newPassword } = this.state

    return (
      <div className="game-screens">
        <h1 className="otherscreen-title">HeroBuilder</h1>
        <form className='auth-form' autoComplete="off" onSubmit={this.onChangePassword}>
          <h4>Change Password</h4>
          <label htmlFor="oldpw">Old Password</label>
          <input
            required
            name="oldPassword"
            value={oldPassword}
            type="password"
            placeholder="Old Password"
            onChange={this.handleChange}
          />
          <label htmlFor="newPassword">New Password</label>
          <input
            required
            name="newPassword"
            value={newPassword}
            type="password"
            placeholder="New Password"
            onChange={this.handleChange}
          />
          <div className="button-container">
            <button className="ui-button" type="submit">Change Password</button>
            <button className="mm-ui-button"><Link to="/">Main Menu</Link></button>
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(ChangePassword)
