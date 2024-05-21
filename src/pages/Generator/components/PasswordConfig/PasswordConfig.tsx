import { Card } from '@mui/material'
import Checkers from '../Checkers/Checkers'
import Generate from '../Generate/Generate'
import SliderMarker from '../Slider/SliderMarker'
import Strength from '../Strength/Strength'
import Password from '../Password/Password'
import { useState } from 'react'

const PasswordConfig = () => {
  const [password, setPassword] = useState<string>('')
  const [length, setLength] = useState<number>(0)
  const [includeUppercase, setIncludeUppercase] = useState<boolean>(false)
  const [includeLowercase, setIncludeLowercase] = useState<boolean>(false)
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(false)
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(false)

  const generatePassword = () => {
    const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
    const numbers = '0123456789'
    const symbols = '!@#$%^&*()_+[]{}|;:,.<>?'

    let characterPool = ''

    if (includeUppercase) {
      characterPool += upperCaseLetters
    }
    if (includeLowercase) {
      characterPool += lowerCaseLetters
    }
    if (includeNumbers) {
      characterPool += numbers
    }
    if (includeSymbols) {
      characterPool += symbols
    }

    if (characterPool === '') {
      console.log('Nenhum tipo de caractere foi selecionado')
      return
    }

    if (length <= 0) {
      console.log('O comprimento da senha deve ser maior que zero')
      return
    }

    let generatedPassword = ''
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characterPool.length)
      generatedPassword += characterPool[randomIndex]
    }

    setPassword(generatedPassword)
    console.log('Senha gerada: ', generatedPassword)
  }

  return (
    <>
      <Password generatedPassword={password} />
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#1a1a1a',
          width: '30%',
          padding: '2rem 1rem',
        }}
      >
        <SliderMarker value={length} onChange={(val) => setLength(val)} />
        <Checkers
          includeUppercase={() => setIncludeUppercase(!includeUppercase)}
          includeLowercase={() => setIncludeLowercase(!includeLowercase)}
          includeNumbers={() => setIncludeNumbers(!includeNumbers)}
          includeSymbols={() => setIncludeSymbols(!includeSymbols)}
        />
        <Strength 
          strength={'low'}
        />
        <Generate 
          onClick={generatePassword}
        />
      </Card>
    </>
  )
}

export default PasswordConfig
