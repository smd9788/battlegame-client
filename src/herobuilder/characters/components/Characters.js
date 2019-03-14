import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../characters.scss'

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
      <Fragment>
        <h3 className='title-header'>Your Heros:</h3>
        <div className='character-list-container'>
          {this.state.characters.map(character => (
            <li key={character._id} id={character._id} className='character-list-item'>
              <Link to={`/characters/${character._id}`}>
                <button className='mainmenu-ui-button'>{character.nickname}</button>
              </Link>
              <p>{character.charClass}</p>
              <p>Level {character.level}</p>
            </li>
          ))}
        </div>
        <Link to="/">
          <button className='mainmenu-ui-button'>Main Menu</button>
        </Link>
      </Fragment>
    )
  }
}

export default Characters
