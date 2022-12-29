import { CustomError } from '../../shared'


export const InvalidRegistrationbirthDateError = (birthDate: Date): CustomError => {
  return {
    name: 'InvalidRegistrationbirthDateError',
    message: `The date of birth ${birthDate ?? ''} is invalid`,
    causes: [
      'The date of birth must be informed',
      'The date of birth must be valid'
    ]
  }
}