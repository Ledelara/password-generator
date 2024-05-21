import { FileCopyOutlined } from '@mui/icons-material'
import { Button, Card, Tooltip, Typography } from '@mui/material'
import { useState } from 'react'

type PasswordProps = {
  generatedPassword?: string
}

const Password = (props: PasswordProps) => {
  const { generatedPassword } = props
  const [tooltipOpen, setTooltipOpen] = useState<boolean>(false)

  const handleCopy = () => {
    if (generatedPassword) {
      navigator.clipboard.writeText(generatedPassword)
        .then(() => {
          setTooltipOpen(true)
          setTimeout(() => {
            setTooltipOpen(false)
          }, 2000)
        })
        .catch((error) => {
          console.error('Erro ao copiar a senha: ', error)
        })
    }
  }

  return (
    <Card
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#1a1a1a',
        width: '80%',
        maxWidth: '600px',
        padding: '2rem 1rem',
        '@media (min-width:600px)': {
          width: '50%',
        },
        '@media (min-width:960px)': {
          width: '30%',
        },
      }}
    >
      <Typography
        variant='h4'
        sx={{
          color: '#7D7B8C',
          padding: '0 1rem',
        }}
      >
        {generatedPassword ? generatedPassword : 'S3nH4!'}
      </Typography>
      <Tooltip
        title="Copiado!"
        open={tooltipOpen}
        disableHoverListener
        disableFocusListener
        disableTouchListener
        placement="top"
      >
        <Button 
          sx={{
            '&:hover': {
              backgroundColor: 'transparent',
            },
          }}
          onClick={handleCopy}
          startIcon={
            <FileCopyOutlined 
              sx={{ color: '#A4FFAF' }}
            />
          }
          disableRipple
        />
      </Tooltip>
    </Card>
  )
}

export default Password