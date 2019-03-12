import React from 'react'

const CreateCharacterForm = ({ handleChange, handleSubmit, character }) => (
  <form onSubmit={handleSubmit}>
    <label>Nickname</label>
    <input placeholder="nickname" name="nickname" onChange={handleChange} value={character.nickname} type="text" />
    <label>Hero Class</label>
    <input placeholder="class" type="text" name="charclass" onChange={handleChange} value={character.charclass} />
    <button type="submit">Submit</button>
  </form>
)

export default CreateCharacterForm
