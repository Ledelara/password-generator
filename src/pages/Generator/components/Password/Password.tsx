import { FileCopyOutlined } from '@mui/icons-material'
import { Button, Card, Typography } from '@mui/material'
import React from 'react'

type PasswordProps = {
  generatedPassword?: string
}

const Password = (props: PasswordProps) => {
  const { generatedPassword } = props

  return (
    <Card
          sx={{
            display: 'flex',
            backgroundColor: '#1a1a1a',
            width: '30%',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1rem',
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
        <Button 
            startIcon={
                <FileCopyOutlined 
                    sx={{ color: '#A4FFAF' }}
                />
            }
        />
    </Card>
  )
}

export default Password