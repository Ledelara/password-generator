import Password from './components/Password/Password'
import PasswordConfig from './components/PasswordConfig/PasswordConfig'

const Generator = () => {

  const handleIncludeUppercase = () => {
    return true
  }

  return (
      <>
        <Password />
        <PasswordConfig 
            onClick={() => {}}
            includeUppercase={handleIncludeUppercase()}
            includeLowercase={true}
            includeNumbers={true}
            includeSymbols={true}
            strength='high'
        />
      </>
  )
}

export default Generator