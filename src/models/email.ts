import {StringUtils} from './string'

export const EmailUtils = {
  isValidEmail: (email: string): boolean => {
    if (!StringUtils.isDefined(email)) return false
    if (!StringUtils.isValidLength({text: email, minCharacters: 2, maxCharacters: 200})) return false
    const regex =   /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    if (!regex.test(email)) return false
    return true
  },

  formatter: (email: string): string => email.toLowerCase().trim()
}