import {expect, test} from 'vitest'
import {sum} from './sum.js'


test('Sum funskiyasinin testi' , () => {
    expect(sum(1, 2)).toBe(3)
})