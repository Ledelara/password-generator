import { Box, Slider, Typography } from '@mui/material'

const Max = 20
const Min = 1 // Ajustar para garantir que o comprimento mínimo seja 1

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

type SliderMarkerProps = {
  value: number
  onChange: (value: number) => void
}

const SliderMarker = ({ value, onChange }: SliderMarkerProps) => {
  const handleChange = (event: Event, value: number | number[], activeThumb: number) => {
    onChange(Number(value))
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
        <Typography variant="h6" color="white">
          Comprimento da senha
        </Typography>
        <Typography variant="h6" color="white">
          {value}
        </Typography>
      </Box>
      <Slider
        value={value}
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
