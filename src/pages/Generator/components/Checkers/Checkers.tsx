import { Checkbox, FormControlLabel } from '@mui/material'
import { Box } from '@mui/material'
import React from 'react'

type CheckersProps = {
    includeUppercase: () => void
    includeLowercase: () => void
    includeNumbers: () => void
    includeSymbols: () => void
}

const Checkers = (props: CheckersProps) => {
    const { includeUppercase, includeLowercase, includeNumbers, includeSymbols } = props

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                width: '80%',
                margin: '0 auto',
            }}
        >
            <FormControlLabel
                control={<Checkbox onClick={includeUppercase} />}
                label="Incluir letras maiúsculas"
                sx={{ 
                    alignSelf: 'flex-start',
                    color: 'white'
                }}
            />
            <FormControlLabel
                control={<Checkbox onClick={includeLowercase}/>}
                label="Incluir letras minúsculas"
                sx={{ 
                    alignSelf: 'flex-start',
                    color: 'white'
                }}
            />
            <FormControlLabel
                control={<Checkbox onClick={includeNumbers}/>}
                label="Incluir números"
                sx={{ 
                    alignSelf: 'flex-start',
                    color: 'white'
                }}
            />
            <FormControlLabel
                control={<Checkbox onClick={includeSymbols}/>}
                label="Incluir símbolos"
                sx={{ 
                    alignSelf: 'flex-start',
                    color: 'white'
                }}
            />
        </Box>
    )
}

export default Checkers
