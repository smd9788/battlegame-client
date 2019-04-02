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
    if (this.state.characters.length === 0) {
      return (
        <div className='your-characters'>
          <h3 className='otherscreen-title'>No heroes. Create some now!</h3>
          <div className="button-container">
            <button className="ui-button" type="submit"><Link to="/create-character">New Hero</Link></button>
            <button className="mm-ui-button"><Link to="/">Main Menu</Link></button>
          </div>
        </div>
      )
    }
    return (
      <div className='game-screens'>
        <h1 className="otherscreen-title">HeroBuilder</h1>
        <div className='character-list-container'>
          <h3 className='otherscreen-title'>Your Heroes:</h3>
          <div>
            <div className='your-characters'>
              {this.state.characters.map(character => (
                <div className="character-list-item" key={character._id} id={character._id}>
                  <h2>{character.nickname}</h2>
                  <Link to={`/characters/${character._id}`}>(view profile)
                  </Link>
                  <p>Level {character.level}</p>
                  <p>{character.charClass}</p>
                </div>
              ))}
            </div>
          </div>
          <button className="mm-ui-button"><Link to="/">Main Menu</Link></button>
        </div>
      </div>
    )
  }
}

export default Characters
