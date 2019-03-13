import React, { Component, Fragment } from 'react'
import apiUrl from '../../../apiConfig'
import axios from 'axios'
import { Redirect } from 'react-router'
import Alert from 'react-bootstrap/Alert'
// import CreateCharacterForm from './CreateCharacterForm'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

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

  // only handles select on charClass for now. Will need to update if add more
  // select events
  handleSelect = event => {
    const updatedField = { charClass: event }
    this.setState(updatedField)
  }

  render () {
    const { createdCharacterId, message, nickname, level } = this.state

    if (createdCharacterId) {
      return <Redirect to={`/characters/${createdCharacterId}`} />
    }

    const { handleChange, handleSubmit, handleSelect } = this
    return (
      <Fragment>
        { message && <Alert variant="danger">{message}</Alert> }
        <form onSubmit={handleSubmit}>
          <label>Nickname</label>
          <input placeholder="nickname" name="nickname" onChange={handleChange} value={nickname} type="text" />
          <label>Choose Hero Class</label>
          <DropdownButton id="dropdown-basic-button" title="Dropdown button">
            <Dropdown.Item eventKey="Paladin" onSelect={handleSelect} value="Paladin">Paladin</Dropdown.Item>
            <Dropdown.Item eventKey="Priest" onSelect={handleSelect} value="Priest">Priest</Dropdown.Item>
            <Dropdown.Item eventKey="Rogue" onSelect={handleSelect} value="Rogue">Rogue</Dropdown.Item>
            <Dropdown.Item eventKey="Warrior" onSelect={handleSelect} value="Warrior">Warrior</Dropdown.Item>
            <Dropdown.Item eventKey="Wizard" onSelect={handleSelect} value="Wizard">Wizard</Dropdown.Item>
          </DropdownButton>
          <p>{this.state.charClass}</p>
          <p>Level {level}</p>
          <button type="submit">Submit</button>
        </form>
      </Fragment>
    )
  }
}

export default CreateCharacter
