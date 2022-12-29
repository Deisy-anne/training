import { StringUtils } from './string'

export const PasswordUtils = {
  isValidPassword: (password: string): boolean => {
    if(!StringUtils.isDefined(password)) return false
    if(!StringUtils.isValidLength({text: password, minCharacters: 6, maxCharacters: 30})) return false
    const onlyNumbers = StringUtils.onlyNumbers(password)
    if (onlyNumbers.length < 2) return false
   return true
  },

    containsSpecialCharacters: (text: string): boolean => {
    const specialCharacter = ['!', '@', '#', '&']
    return text.split('').some((character) => specialCharacter.includes(character))
    
  }

    }
  
