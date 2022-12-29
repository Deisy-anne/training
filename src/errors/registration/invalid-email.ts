import { CustomError } from '../../shared'

export const InvalidRegistrationEmailError = (email: string): CustomError => {
  return {
    name: 'InvalidRegistrationEmailError',
    message: `The email ${email ?? ''} is invalid`,
    causes: [
      'The email must be informed',
      'The email is invalid (example@domain.com)'
    ]
  }
}