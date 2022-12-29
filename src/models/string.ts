type isValidLenghtInput = {
  text: string
  minCharacters: number
  maxCharacters: number
}

export const StringUtils = {
  isDefined: (text: string): boolean => {
  if (text === undefined || text === null || text.length === 0) return false
  return true
},
  isValidLength: ({text, minCharacters, maxCharacters}: isValidLenghtInput) => {
  if (text.length < minCharacters || text.length > maxCharacters) return false
  return true
},
  onlyNumbers: (text: string): string => text.replace(/\D/g, '')


}
