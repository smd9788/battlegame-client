import React, { useState, useEffect } from 'react'
import axios from 'axios'
import apiUrl from '../apiConfig'

import CharacterForm from './CharacterForm'

function CreateCharacter ({ token }) {
  const [nickname, setNickname] = useState('')
  const [level, setLevel] = useState(1)
  const [charClass, setCharClass] = useState('')
  const [createdCharacterId, setCreatedCharacterId] = useState(null)

  // handle submit of new hero
  useEffect(() => {
    function handleSubmit (event) {
      event.preventDefault()
      axios({
        url: apiUrl + '/characters',
        method: 'post',
        headers: {
          'Authorization': `Token token=${token}`
        },
        data: {
          character: {
            nickname: nickname,
            level: level,
            charClass: charClass
          }
        }
      })
        .then(nickname.setNickname, level.setLevel, charClass.setCharclass)
        .catch()
    }
  })

  const { handleChange, handleSubmit, handleSelect } = this

  return (
    <div>
      <div className='game-screens'>
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

export default CreateCharacter
