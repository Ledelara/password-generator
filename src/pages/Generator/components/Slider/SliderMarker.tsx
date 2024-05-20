import { Box, Slider } from '@mui/material'
import { useState } from 'react'
import { Description } from '@/pages/components/StyledComponents/styled'

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
                width: '30%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%',
                }}
            >
                <Description>Quantidade de caracteres</Description>
                <Description>{val}</Description>
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