import { InvalidRegistrationbirthDateError } from '../errors/registration/invalid-date-birth'
import { InvalidRegistrationEmailError } from '../errors/registration/invalid-email'
import { InvalidRegistrationLastNameError } from '../errors/registration/invalid-last-name'
import { InvalidRegistrationNameError } from '../errors/registration/invalid-name'
import { InvalidRegistrationPasswordError } from '../errors/registration/invalid-password'
import { CustomError, Either, left, right } from '../shared'
import { DateUtils } from './date'
import { EmailUtils } from './email'
import { PasswordUtils } from './password'
import { StringUtils } from './string'

export class Registration {
  constructor(
    readonly id: string,
    readonly name: string,
    readonly lastName: string,
    readonly birthDate: Date,
    readonly email: string,
    readonly password: string

  ){
    Object.freeze(this)
  }

  static create ({id, name, lastName, birthDate, email, password }: Registration.Input): Registration.Output{
    const errors: CustomError[] = []
    if (!this.isValidName) errors.push(InvalidRegistrationNameError(name))
    if (!this.isValidLastName(lastName)) errors.push(InvalidRegistrationLastNameError(lastName))
    if (!this.isValidbirthDate(birthDate)) errors.push(InvalidRegistrationbirthDateError(birthDate))
    if (!this.isValidEmail(email)) errors.push(InvalidRegistrationEmailError(email))
    if (!this.isValidPassword(password)) errors.push(InvalidRegistrationPasswordError(password))
    if (errors.length > 0) return left(errors)
    const formatedEmail = EmailUtils.formatter(email)
    const formatedName = name.trimStart().trimEnd()
    const formatedLastName = lastName.trimStart().trimEnd()
    return right(new Registration (
      id,
      formatedName,
      formatedLastName,
      birthDate,
      formatedEmail,
      password
    )
      )
    
  }

  static isValidName (name: string): boolean {
    if (!StringUtils.isDefined(name)) return false
    return StringUtils.isValidLength({text: name, minCharacters: 2,  maxCharacters: 200})
  }

  static isValidLastName (lastName: string): boolean {
    if (!StringUtils.isDefined(lastName)) return false
    return StringUtils.isValidLength({text: lastName, minCharacters:2,  maxCharacters: 200})
  }

  static isValidbirthDate (birthDate: Date): boolean {
    if (!DateUtils.isValid(birthDate)) return false
    return true
  }

  static isValidEmail (email: string): boolean {
    if (!EmailUtils.isValidEmail(email)) return false
    return true
  }

  static isValidPassword (password: string): boolean {
    if (!PasswordUtils.isValidPassword(password)) return false
    if (!PasswordUtils.containsSpecialCharacters(password)) return false
    return true
  }
}

export namespace Registration {
  export type Input = {
    id: string
    name: string
    lastName: string
    email: string
    password: string
    birthDate: Date
  }

  export type Output = Either <CustomError[], Registration>
}