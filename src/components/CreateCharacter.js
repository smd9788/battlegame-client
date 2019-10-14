import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router'
import Alert from 'react-bootstrap/Alert'

import apiUrl from '../apiConfig'
import CharacterForm from './CharacterForm'

class CreateCharacter extends Component {
  constructor () {
    super()

    this.state = {
      nickname: '',
      level: 1,
      charClass: '',
      createdCharacterId: null,
      message: null
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    axios({
      url: apiUrl + '/characters',
      method: 'post',
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      },
      data: {
        character: {
          nickname: this.state.nickname,
          level: this.state.level,
          charClass: this.state.charClass
        }
      }
    })
      .then(response => this.setState({ createdCharacterId: response.data.character._id }))
      .catch()
  }

  handleChange = event => {
    const updatedField = { [event.target.name]: event.target.value }
    this.setState(updatedField)
  }

  handleSelect = (eventKey, event) => {
    event.persist()
    const updatedField = { [event.target.name]: eventKey }
    this.setState(updatedField)
  }

  render () {
    const { createdCharacterId, message, nickname, level, charClass } = this.state

    if (createdCharacterId) {
      return <Redirect to={`/characters/${createdCharacterId}`} />
    }

    const { handleChange, handleSubmit, handleSelect } = this
    return (
      <div className='game-screens'>
        <div>
          { message && <Alert variant="danger">{message}</Alert> }
          <CharacterForm
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleSelect={handleSelect}
            character={{ nickname, level, charClass }}
          />
        </div>
      </div>
    )
  }
}

export default CreateCharacter
