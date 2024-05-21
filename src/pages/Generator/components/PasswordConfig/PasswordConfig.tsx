import { Card } from '@mui/material'
import Checkers from '../Checkers/Checkers'
import Generate from '../Generate/Generate'
import SliderMarker from '../Slider/SliderMarker'
import Strength from '../Strength/Strength'
import Password from '../Password/Password'
import { useState } from 'react'
import { useAlert } from '@/hooks/useAlert'

const PasswordConfig = () => {
  const [password, setPassword] = useState<string>('')
  const [length, setLength] = useState<number>(0)
  const [strength, setStrength] = useState<'low' | 'medium' | 'high'>('low')
  const [includeUppercase, setIncludeUppercase] = useState<boolean>(false)
  const [includeLowercase, setIncludeLowercase] = useState<boolean>(false)
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(false)
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(false)

  const { showAlert } = useAlert()

  const generatePassword = () => {
    const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
    const numbers = '0123456789'
    const symbols = '!@#$%^&*()_+[]{}|;:,.<>?'

    let characterPool = ''

    includeUppercase && (characterPool += upperCaseLetters)
    includeLowercase && (characterPool += lowerCaseLetters)
    includeNumbers && (characterPool += numbers)
    includeSymbols && (characterPool += symbols)

    if (characterPool === '') {
      showAlert('Selecione ao menos um tipo de caractere para gerar a senha', 'error')
      return
    }

    if (length <= 0) {
      showAlert('Selecione o número de caracteres para a senha', 'error')
      return
    }

    let generatedPassword = ''
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characterPool.length)
      generatedPassword += characterPool[randomIndex]
    }
    setPassword(generatedPassword)
    
    let securityLevel: 'low' | 'medium' | 'high' = 'low'
    if (length >= 8 && length <= 12 && characterPool.length >= 3) {
      securityLevel = 'medium'
    } else if (length > 12 && characterPool.length >= 3) {
      securityLevel = 'high'
    }
    setStrength(securityLevel)
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
          width: '80%',
          maxWidth: '600px',
          padding: '2rem 1rem',
          '@media (min-width:600px)': {
            width: '50%',
          },
          '@media (min-width:960px)': {
            width: '30%',
          },
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
          strength={strength}
        />
        <Generate 
          onClick={generatePassword}
        />
      </Card>
    </>
  )
}

export default PasswordConfig
