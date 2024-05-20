import { Checkbox, FormControlLabel } from '@mui/material'
import { Box } from '@mui/material'
import React from 'react'

type CheckersProps = {
    includeUppercase: boolean
    includeLowercase: boolean
    includeNumbers: boolean
    includeSymbols: boolean
}

const Checkers = (props: CheckersProps) => {
    const { includeUppercase, includeLowercase, includeNumbers, includeSymbols } = props

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                width: '30%',
                margin: '0 auto',
            }}
        >
            <FormControlLabel
                control={<Checkbox checked={includeUppercase} />}
                label="Incluir letras maiúsculas"
                sx={{ alignSelf: 'flex-start' }}
            />
            <FormControlLabel
                control={<Checkbox checked={includeLowercase} />}
                label="Incluir letras minúsculas"
                sx={{ alignSelf: 'flex-start' }}
            />
            <FormControlLabel
                control={<Checkbox checked={includeNumbers} />}
                label="Incluir números"
                sx={{ alignSelf: 'flex-start' }}
            />
            <FormControlLabel
                control={<Checkbox checked={includeSymbols} />}
                label="Incluir símbolos"
                sx={{ alignSelf: 'flex-start' }}
            />
        </Box>
    )
}

export default Checkers
