const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    let array = ['hello', 13, true, 'world']
    test('return an array', () => {
        expect(Array.isArray(shuffleArray(array))).toBe(true)
    })
    test('returns an array of equal length to the one passed in', () => {
        expect(shuffleArray(array).length).toEqual(array.length)
    })
})