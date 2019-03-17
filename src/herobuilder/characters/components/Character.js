import React, { Component } from 'react'
import axios from 'axios'
import { Redirect, withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import apiUrl from '../../../apiConfig'

class Character extends Component {
  constructor () {
    super()

    this.state = {
      character: null,
      shouldRedirect: false,
      redirectMessage: 'Something went wrong'
    }
  }

  deleteCharacter = (id) => {
    axios({
      url: apiUrl + '/characters/' + this.props.match.params.id,
      method: 'delete',
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      }
    })
      .then(() => this.setState({
        shouldRedirect: true,
        redirectMessage: 'Successfully deleted character.'
      }))
      .catch(() => this.setState({ shouldRedirect: true }))
  }

  componentDidMount () {
    axios({
      url: apiUrl + '/characters/' + this.props.match.params.id,
      method: 'get',
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      }
    })
      .then(response => this.setState({ character: response.data.character }))
      .catch(() => this.setState({
        shouldRedirect: true,
        redirectMessage: 'Character not found.'
      }))
  }

  render () {
    const { character, shouldRedirect, redirectMessage } = this.state
    if (shouldRedirect) {
      return <Redirect
        to={{
          pathname: '/',
          state: { message: redirectMessage }
        }} />
    }
    if (!character) {
      return <p>loading...</p>
    }

    const { nickname, charClass, level, id } = character

    return (
      <div className='character-list-container'>
        <h1 className="otherscreen-title">HeroBuilder</h1>
        <article className="auth-form">
          <h3>{nickname}</h3>
          <p>Class: {charClass}</p>
          <p>Level {level}</p>
          <div className="character-button-container">
            <button className='ui-button' onClick={() => this.deleteCharacter(id)}>Delete</button>
            <button className='ui-button'><Link to={`/characters/${this.props.match.params.id}/update`}>Update</Link></button>
          </div>
        </article>
        <div className="button-container">
          <button className="ui-button" type="submit"><Link to="/characters">Your Heros</Link></button>
          <button className="mm-ui-button"><Link to="/">Main Menu</Link></button>
        </div>
      </div>
    )
  }
}

export default withRouter(Character)
