import { CustomError } from '../../shared'

export const InvalidRegistrationNameError = (name: string): CustomError => {
  return {
    name: 'InvalidRegistrationNameError',
    message: `The name "${name ?? ''}" is invalid`,
    causes: [
      'The name must be informed',
      'The name must contain at least 2 characters',
      'The name must be informed with only letters'
    ]
    
  }
} 