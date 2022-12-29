
export const DateUtils = {
  isValid: (date: Date): boolean => {
    if (date instanceof Date && !isNaN(date as any)) return true
    return false
  }
}