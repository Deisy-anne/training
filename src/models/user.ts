import { EmailUtils } from './email'
import { PasswordUtils } from './password'

export class User {
  constructor(
    readonly email: string,
    readonly password: string
  ){
    Object.freeze(this)
  }

  static isValidEmail (email: string): boolean {
    if (!EmailUtils.isValidEmail(email)) return false
    return true  
  }

  static isValidPassword (password: string): boolean {
    if (!PasswordUtils.containsNumber(password as any)) return false
    if (!PasswordUtils.containsStrings(password)) return false
    if (!PasswordUtils.containsSpecialCharacters(password)) return false
    return true
  }

}