import { FileCopyOutlined } from '@mui/icons-material'
import { Button, Card, Tooltip, Typography, useMediaQuery, useTheme } from '@mui/material'
import { useState } from 'react'

type PasswordProps = {
  generatedPassword?: string
}

const Password = (props: PasswordProps) => {
  const { generatedPassword } = props
  const [tooltipOpen, setTooltipOpen] = useState<boolean>(false)

  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))

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
        backgroundColor: '#1a1a1a',
        width: isSmallScreen ? '80%' : '30%',
        flexDirection: isSmallScreen ? 'column' : 'row',
        justifyContent: isSmallScreen ? 'center' : 'space-between',
        alignItems: 'center',
        padding: '1rem',
        margin: isSmallScreen ? '1rem auto' : '0 auto',
      }}
    >
      <Typography
        variant='h4'
        sx={{
          color: '#7D7B8C',
          padding: isSmallScreen ? '0.5rem 0' : '0 1rem',
          wordBreak: 'break-all',
          textAlign: isSmallScreen ? 'center' : 'left',
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
            marginTop: isSmallScreen ? '0.5rem' : '0',
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
