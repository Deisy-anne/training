import { CustomError } from '../../shared'

export const InvalidRegistrationPasswordError = (password: string): CustomError => {
  return {
    name: 'InvalidRegistrationPasswordError',
    message: 'The password is invalid',
    causes: [
      'The password must be informed',
      'The password must contain at least 2 number',
      'The password must contain at least 1 special character',
      'The password must contain at least 6 letters'
    ]
  }
}