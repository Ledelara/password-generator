import { CropPortraitOutlined } from '@mui/icons-material'
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'

type StrengthProps = {
    strength: 'low' | 'medium' | 'high'
}

const Strength = (props: StrengthProps) => {
    const { strength } = props
    const color = strength === 'low' ? 'error' : strength === 'medium' ? 'warning' : 'success'

    const theme = useTheme()
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <Box
            mt={2}
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: isSmallScreen ? '100%' : '80%',
                padding: isSmallScreen ? '0.5rem' : '1rem',
                backgroundColor: '#131218',
                borderRadius: '0.3rem',
                flexDirection: isSmallScreen ? 'column' : 'row',
            }}
        >
            <Typography
                variant="h6"
                sx={{ 
                    textTransform: 'uppercase',
                    textAlign: isSmallScreen ? 'center' : 'left',
                    marginBottom: isSmallScreen ? '0.5rem' : '0',
                }}
                color='#7D7B8C'
            >
                Segurança
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    gap: '0.5rem',
                }}
            >
                <CropPortraitOutlined color={color} />
                <CropPortraitOutlined color={color} />
                <CropPortraitOutlined color={color} />
            </Box>
        </Box>
    )
}

export default Strength
