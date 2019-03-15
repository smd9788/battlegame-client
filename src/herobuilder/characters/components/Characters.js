import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../styles/characters.scss'

import apiUrl from '../../../apiConfig'

class Characters extends Component {
  constructor () {
    super()

    this.state = {
      characters: []
    }
  }

  componentWillMount () {
    axios({
      url: apiUrl + '/characters',
      method: 'get',
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      }
    })
      .then(response => this.setState({ characters: response.data.characters }))
      .catch(console.error)
  }

  render () {
    return (
      <div className='character-list-container'>
        <h3 className='title-header'>Your Heros:</h3>
        <div className='your-characters'>
          {this.state.characters.map(character => (
            <div className="auth-menu" key={character._id} id={character._id}>
              <Link to={`/characters/${character._id}`}>
                <button className='ui-button'>{character.nickname}</button>
              </Link>
              <p>{character.charClass}</p>
              <p>Level {character.level}</p>
            </div>
          ))}
        </div>
        <button className="ui-button"><Link to="/">Main Menu</Link></button>
      </div>
    )
  }
}

export default Characters
