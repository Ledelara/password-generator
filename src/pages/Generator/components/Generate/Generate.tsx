import { ArrowForwardSharp } from '@mui/icons-material'
import { Box, Button } from '@mui/material'
import React from 'react'

type GenerateProps = {
    onClick: () => void
}

const Generate = (props: GenerateProps) => {
    const { onClick } = props

  return (
    <Box 
        mt={2} 
        width='100%'
    >
        <Button
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '85%',
                margin: '0 auto',
                padding: '1rem',
                backgroundColor: '#A4FFAF',
                color: '#1a1a1a',
                '&:hover': {
                    backgroundColor: '#A4FFAF',
                },
            }}
            onClick={onClick}
        >
            Gerar <ArrowForwardSharp />
        </Button>
    </Box>
  )
}

export default Generate