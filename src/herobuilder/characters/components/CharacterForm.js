import React from 'react'
import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import '../styles/characters.scss'

const CharacterForm = ({ handleSelect, handleChange, handleSubmit, character }) => (
  <div className="characterform-container">
    <h1 className="otherscreen-title">HeroBuilder</h1>
    <form className="auth-form" autoComplete="off" onSubmit={handleSubmit}>
      <label>Nickname</label>
      <input placeholder="nickname" name="nickname" onChange={handleChange} type="text" />
      <label>Choose Hero Class</label>
      <DropdownButton id="dropdown-basic-button" title="Classes" variant="info">
        <Dropdown.Item name="charClass" eventKey="Paladin" onSelect={handleSelect} value="Paladin">Paladin</Dropdown.Item>
        <Dropdown.Item name="charClass" eventKey="Priest" onSelect={handleSelect} value="Priest">Priest</Dropdown.Item>
        <Dropdown.Item name="charClass" eventKey="Rogue" onSelect={handleSelect} value="Rogue">Rogue</Dropdown.Item>
        <Dropdown.Item name="charClass" eventKey="Warrior" onSelect={handleSelect} value="Warrior">Warrior</Dropdown.Item>
        <Dropdown.Item name="charClass" eventKey="Wizard" onSelect={handleSelect} value="Wizard">Wizard</Dropdown.Item>
      </DropdownButton>
      <h3>{character.charClass}</h3>
      <p>Level {character.level}</p>
      <div className="button-container">
        <button type="submit" className="ui-button" >Submit</button>
        <button className="mm-ui-button"><Link to="/">Main Menu</Link></button>
      </div>
    </form>
  </div>
)

export default CharacterForm
