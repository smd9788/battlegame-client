import React, { Component } from 'react'
import './App.scss'
import { Route } from 'react-router-dom'
import { withRouter } from 'react-router'

import AuthenticatedRoute from './auth/components/AuthenticatedRoute'
import SignUp from './auth/components/SignUp'
import SignIn from './auth/components/SignIn'
import SignOut from './auth/components/SignOut'
import ChangePassword from './auth/components/ChangePassword'
import Home from './herobuilder/scene/components/Home.js'
import CreateCharacter from './herobuilder/characters/components/CreateCharacter.js'
import Characters from './herobuilder/characters/components/Characters.js'
import Character from './herobuilder/characters/components/Character.js'
import UpdateCharacter from './herobuilder/characters/components/UpdateCharacter.js'

class MainRoutes extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      alerts: [],
      id: null
    }
  }

  setUser = user => this.setState({ user })

  setCharacterId = id => this.setState({ id })

  clearUser = () => this.setState({ user: null })

  render () {
    const { user } = this.state
    const { alert } = this.props

    return (
      <React.Fragment>
        <Route exact path='/' render={() => (
          <Home user={user} />
        )} />
        <Route path='/sign-up' render={() => (
          <SignUp alert={alert} setUser={this.setUser} />
        )} />
        <Route path='/sign-in' render={() => (
          <SignIn alert={alert} setUser={this.setUser} />
        )} />
        <AuthenticatedRoute user={user} path='/sign-out' render={() => (
          <SignOut alert={alert} clearUser={this.clearUser} user={user} />
        )} />
        <AuthenticatedRoute user={user} path='/change-password' render={() => (
          <ChangePassword alert={alert} user={user} />
        )} />
        <AuthenticatedRoute user={user} exact path='/characters' render={() => (
          <Characters alert={alert} user={user} />
        )} />
        <AuthenticatedRoute user={user} exact path='/characters/:id' render={() => (
          <Character alert={alert} user={user} setCharacterId={this.setCharacterId} />
        )} />
        <AuthenticatedRoute user={user} exact path='/characters/:id/update' render={() => (
          <UpdateCharacter alert={alert} user={user} setCharacterId={this.setCharacterId} />
        )} />
        <AuthenticatedRoute user={user} exact path='/create-character' render={() => (
          <CreateCharacter alert={alert} user={user} />
        )} />
      </React.Fragment>
    )
  }
}

export default withRouter(MainRoutes)
