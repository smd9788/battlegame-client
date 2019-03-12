import React, { Component, Fragment } from 'react'
import apiUrl from '../../../apiConfig'
import axios from 'axios'
import { Redirect } from 'react-router'
import Alert from 'react-bootstrap/Alert'
import CreateCharacterForm from './CreateCharacterForm'

class CreateCharacter extends Component {
  constructor () {
    super()

    this.state = {
      nickname: '',
      level: 1,
      charclass: '',
      createdCharacterId: null,
      message: null
    }
  }

  handleSubmit = event => {
    event.preventDefault()

    axios({
      url: apiUrl + '/characters',
      method: 'post',
      data: {
        character: {
          nickname: this.state.nickname,
          level: this.state.level,
          charclass: this.state.charclass
        }
      }
    })
      .then(response => this.setState({ createdCharacterId: response.data.character.id }))
      .catch()
  }

  handleChange = event => {
    const updatedField = { [event.target.name]: event.target.value }
    this.setState(updatedField)
  }

  render () {
    const { createdCharacterId, message, nickname, level, charclass } = this.state

    if (createdCharacterId) {
      return <Redirect to={`/characters/${createdCharacterId}`} />
    }

    const { handleChange, handleSubmit } = this
    return (
      <Fragment>
        { message && <Alert variant="danger">{message}</Alert> }
        <CreateCharacterForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          character={{ nickname, level, charclass }}
        />
      </Fragment>
    )
  }
}

export default CreateCharacter
