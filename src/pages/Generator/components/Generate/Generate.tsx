import { ArrowForwardSharp } from '@mui/icons-material'
import { Box, Button, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'

type GenerateProps = {
    onClick: () => void
}

const Generate = (props: GenerateProps) => {
    const { onClick } = props

    const theme = useTheme()
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))

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
                    width: '100%',
                    maxWidth: isSmallScreen ? '100%' : '85%',
                    padding: isSmallScreen ? '0.8rem' : '1rem',
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
