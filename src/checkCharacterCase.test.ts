import { assert, expect, test } from 'vitest'
import { sameCase }  from  "./checkCharacterCase";

test('Characters is not a letter -> it will be -1', () => {
  expect(sameCase('R','!')).toBe(-1)
});

test('Characters are the same case -> it will be 1 ', () => {
  expect(sameCase('R','D')).toBe(1)
});

test('characters are letters, but not the same case -> it will be 0', () => {
  expect(sameCase('A','d')).toBe(0)
});

