import { CustomError } from '../../shared'

export const InvalidRegistrationLastNameError = (lastName: string): CustomError => {
  return {
    name: 'InvalidRegistrationNameError',
    message: `The last name "${lastName ?? ''}" is invalid`,
    causes: [
      'The last name must be informed',
      'The last name must contain at least 2 characters',
      'The last name must be informed with only letters'
    ]
    
  }
} 