import { CropPortraitOutlined } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import React from 'react'

type StrengthProps = {
    strength: 'low' | 'medium' | 'high'
}

const Strength = (props: StrengthProps) => {
    const { strength } = props
    const color = strength === 'low' ? 'error' : strength === 'medium' ? 'warning' : 'success'

    return (
        <Box
            mt={2}
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '80%',
                margin: '0 auto',
                padding: '1rem',
                backgroundColor: '#131218',
                borderRadius: '0.3rem',
            }}
        >
            <Typography
                variant="h6"
                sx={{ 
                    textTransform: 'uppercase'
                }}
                color= '#7D7B8C'
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
