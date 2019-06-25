import React, { Component } from 'react'
import apiUrl from '../../../apiConfig'
import axios from 'axios'
import { Redirect } from 'react-router'

class CreateHero extends Component {
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
    const { createdCharacterId, nickname, level, charClass } = this.state

    if (createdCharacterId) {
      return <Redirect to={`/characters/${createdCharacterId}`} />
    }

    if (charClass === 'Paladin') {
      return <img src={require('./classPlates/paladin.svg')} alt="" className="class-plate"></img>
    }

    if (charClass === 'Priest') {
      return <img src={require('./classPlates/priest.svg')} alt="" className="class-plate"></img>
    }

    if (charClass === 'Rogue') {
      return <img src={require('./classPlates/rogue.svg')} alt="" className="class-plate"></img>
    }

    if (charClass === 'Warrior') {
      return <img src={require('./classPlates/warrior.svg')} alt="" className="class-plate"></img>
    }

    if (charClass === 'Wizard') {
      return <img src={require('./classPlates/wizard.svg')} alt="" className="class-plate"></img>
    }

    return (
      <div className='game-screens'>
        <div >
          {this.state.charClass.map(charClass => (
            <div className="charClass-icons" key={charClass}>
              <h2>{charClass.nickname}</h2>
              <p>Level {level}</p>
              <p>{nickname}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default CreateHero

// const { handleChange, handleSubmit, handleSelect } = this
// <div>
//   { message && <Alert variant="danger">{message}</Alert> }
//   <CharacterForm
//     handleChange={handleChange}
//     handleSubmit={handleSubmit}
//     handleSelect={handleSelect}
//     character={{ nickname, level, charClass }}
//   />
// </div>
