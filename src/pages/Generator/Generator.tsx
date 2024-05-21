import Password from './components/Password/Password'
import PasswordConfig from './components/PasswordConfig/PasswordConfig'

const Generator = () => {

  const handleIncludeUppercase = () => {
    return true
  }

  return (
      <>
        <PasswordConfig />
      </>
  )
}

export default Generator