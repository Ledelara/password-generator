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
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Button
                sx={{
                    padding: '1rem',
                    backgroundColor: '#A4FFAF',
                    color: '#1a1a1a',
                    '&:hover': {
                        backgroundColor: '#A4FFAF',
                    },
                    '@media (min-width:600px)': {
                        width: '50%',
                    },
                    '@media (min-width:960px)': {
                        width: '85%',
                    },
                }}
                endIcon={<ArrowForwardSharp />}
                onClick={onClick}
            >
                Gerar
            </Button>
        </Box>
    )
}

export default Generate
