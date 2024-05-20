import { Card } from '@mui/material'
import React from 'react'
import Checkers from '../Checkers/Checkers'
import Generate from '../Generate/Generate'
import SliderMarker from '../Slider/SliderMarker'
import Strength from '../Strength/Strength'

type PasswordConfigProps = {
    onClick: () => void
    includeUppercase: boolean
    includeLowercase: boolean
    includeNumbers: boolean
    includeSymbols: boolean
    strength: 'low' | 'medium' | 'high'
}

const PasswordConfig = (props: PasswordConfigProps) => {
    const { onClick, includeUppercase, includeLowercase, includeNumbers, includeSymbols, strength } = props
  return (
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
          <SliderMarker />
          <Checkers 
              includeUppercase={includeUppercase}
              includeLowercase={includeLowercase}
              includeNumbers={includeNumbers}
              includeSymbols={includeSymbols}
          />
          <Strength 
              strength={strength}
          />
          <Generate 
              onClick={onClick}
          />
        </Card>
  )
}

export default PasswordConfig