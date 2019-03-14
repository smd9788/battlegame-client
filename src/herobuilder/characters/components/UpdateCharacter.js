import React, { Component, Fragment } from 'react'
import apiUrl from '../../../apiConfig'
import axios from 'axios'
import { withRouter, Redirect } from 'react-router'
import Alert from 'react-bootstrap/Alert'
import CharacterForm from './CharacterForm'

class UpdateCharacter extends Component {
  constructor () {
    super()

    this.state = {
      character: { nickname: '', level: 1, charClass: '' },
      message: null,
      shouldRedirect: false,
      redirectMessage: '',
      updatedCharacter: false
    }
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

  handleSubmit = event => {
    const { character } = this.state
    event.preventDefault()
    axios({
      url: `${apiUrl}/characters/${this.state.character._id}`,
      method: 'patch',
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      },
      data: {
        character: {
          nickname: character.nickname,
          level: character.level,
          charClass: character.charClass
        }
      }
    })
      .then(response => this.setState({ updatedCharacter: true }))
      .catch()
  }

  handleChange = event => {
    event.persist()
    const editedNickname = this.state.character
    editedNickname.nickname = event.target.value
    this.setState({ character: editedNickname })
  }

  handleSelect = (eventKey, event) => {
    event.persist()
    console.log(event)
    const editedClass = this.state.character
    editedClass.charClass = eventKey
    this.setState({ character: editedClass })
  }

  render () {
    const { message, character, shouldRedirect, redirectMessage, updatedCharacter } = this.state

    const { handleChange, handleSubmit, handleSelect } = this
    if (shouldRedirect) {
      return <Redirect
        to={{
          pathname: '/',
          state: { message: redirectMessage }
        }} />
    }

    if (updatedCharacter) {
      return <Redirect to={`/characters/${this.state.character._id}`} />
    }
    return (
      <Fragment>
        { message && <Alert variant="danger">{message}</Alert> }
        <CharacterForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleSelect={handleSelect}
          character={character}
        />
      </Fragment>
    )
  }
}

export default withRouter(UpdateCharacter)
