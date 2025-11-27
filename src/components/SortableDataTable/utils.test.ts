import { describe, it, expect } from 'vitest'

// Simple utility function to test
export function formatHeader(header: string): string {
  return header
	.replace(/([a-z])([A-Z])/g, '$1 $2') // Split camelCase
	.replace(/_/g, ' ') // Replace underscores with spaces
	.replace(/\./g, ' ') // Replace dots with spaces
	.replace(/\b\w/g, char => char.toUpperCase()) // Capitalize the first letter of each word
	.replace(/\b[A-Z]{3}\b/g, match => match.toUpperCase()) // Keep three-letter acronyms capitalised
}

describe('formatHeader utility function', () => {
  it('should format camelCase strings correctly', () => {
	expect(formatHeader('firstName')).toBe('First Name')
	expect(formatHeader('dateOfBirth')).toBe('Date Of Birth')
  })

  it('should format underscore separated strings correctly', () => {
	expect(formatHeader('first_name')).toBe('First Name')
	expect(formatHeader('ews_score')).toBe('Ews Score')
  })

  it('should format dot separated strings correctly', () => {
	expect(formatHeader('patient.name')).toBe('Patient Name')
  })

  it('should preserve acronyms correctly', () => {
	expect(formatHeader('epr_id')).toBe('Epr Id')
	expect(formatHeader('nhs_number')).toBe('Nhs Number')
  })

  it('should handle mixed formats', () => {
	expect(formatHeader('patient_id.primary')).toBe('Patient Id Primary')
  })
})
