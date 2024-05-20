import React from 'react'
import SliderMarker from './components/Slider/SliderMarker'
import { Card, Container } from '@mui/material'
import Checkers from './components/Checkers/Checkers'
import Strength from './components/Strength/Strength'
import Generate from './components/Generate/Generate'

const Generator = () => {

  const handleIncludeUppercase = () => {
    return true
  }

  return (
    <Card
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '50vh',
            backgroundColor: '#1a1a1a',
            width: '30%',
        }}
    >
        <SliderMarker />
        <Checkers 
            includeUppercase={handleIncludeUppercase()}
            includeLowercase={true}
            includeNumbers={true}
            includeSymbols={true}
        />
        <Strength 
            strength="low"
        />
        <Generate 
            onClick={() => {}}
        />
    </Card>
  )
}

export default Generator