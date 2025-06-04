import { describe, it, expect } from 'vitest'
import { generateUniqueIndex } from './functions'

describe('generateUniqueIndex', () => {
  it('returns a number within the valid range', () => {
    const dataLength = 10
    const index = generateUniqueIndex(dataLength, 5)
    expect(index).toBeGreaterThanOrEqual(0)
    expect(index).toBeLessThan(dataLength)
  })

  it('never returns the previous index', () => {
    const dataLength = 10
    const previousIndex = 3
    for (let i = 0; i < 100; i++) {
      expect(generateUniqueIndex(dataLength, previousIndex)).not.toBe(previousIndex)
    }
  })
})
