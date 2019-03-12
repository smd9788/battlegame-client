import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../../apiConfig'

class Characters extends Component {
  constructor () {
    super()

    this.state = {
      characters: []
    }
  }

  componentDidMount () {
    axios({
      url: apiUrl + '/characters',
      method: 'get',
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      }
    })
      .then(console.log(response => this.setState({ characters: response.data.characters })))
      .catch(console.error)
  }

  render () {
    return (
      <Fragment>
        <h3 className='title-header'>Your Heros:</h3>
        <ul className='character-list-container'>
          {this.state.characters.map(character => (
            <li key={character.id} className='character-list-item'>
              <Link to={`/characters/${character.id}`}>{character.nickname}</Link>
            </li>
          ))}
        </ul>
      </Fragment>
    )
  }
}

export default Characters
