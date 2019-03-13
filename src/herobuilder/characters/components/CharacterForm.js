import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

const CharacterForm = ({ handleSelect, handleChange, handleSubmit, character }) => (
  <form onSubmit={handleSubmit}>
    <label>Nickname</label>
    <input placeholder="nickname" name="nickname" onChange={handleChange} value={character.nickname} type="text" />
    <label>Choose Hero Class</label>
    <DropdownButton id="dropdown-basic-button" title="Classes">
      <Dropdown.Item name="charClass" eventKey="Paladin" onSelect={handleSelect} value="Paladin">Paladin</Dropdown.Item>
      <Dropdown.Item name="charClass" eventKey="Priest" onSelect={handleSelect} value="Priest">Priest</Dropdown.Item>
      <Dropdown.Item name="charClass" eventKey="Rogue" onSelect={handleSelect} value="Rogue">Rogue</Dropdown.Item>
      <Dropdown.Item name="charClass" eventKey="Warrior" onSelect={handleSelect} value="Warrior">Warrior</Dropdown.Item>
      <Dropdown.Item name="charClass" eventKey="Wizard" onSelect={handleSelect} value="Wizard">Wizard</Dropdown.Item>
    </DropdownButton>
    <p>{character.charClass}</p>
    <p>Level {character.level}</p>
    <button type="submit">Submit</button>
  </form>
)

export default CharacterForm
