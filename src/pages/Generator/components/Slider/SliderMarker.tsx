import { Box, Slider, Typography } from '@mui/material'
import { useState } from 'react'

const Max = 20
const Min = 0
const marks = [
    {
        value: Min,
        label: '',
    },
    {
        value: Max,
        label: '',
    },
]

const SliderMarker = () => {
    const [val, setVal] = useState<number>(Min)

    const handleChange = (event: Event, value: number | number[], activeThumb: number) => {
        setVal(Number(value))
    }

    return (
        <Box
            sx={{ 
                width: '80%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    margin: '0 0 1rem 0',
                    width: '100%',
                }}
            >
                <Typography
                    variant="h6"
                    color="white"
                >
                    Comprimento da senha
                </Typography>
                <Typography
                    variant="h6"
                    color="white"
                >
                    {val}
                </Typography>
            </Box>
            <Slider 
                value={val}
                marks={marks}
                min={Min}
                max={Max}
                onChange={handleChange}
                sx={{ 
                    width: '100%', 
                    color: 'grey',
                }}
            />
        </Box>
    )
}

export default SliderMarker
