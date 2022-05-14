import { assert, expect, test } from 'vitest'
import { sameCase }  from  "./checkCharacterCase";

test('Characters is not a letter -> it will be -1', () => {
  expect(sameCase('R','!')).toBe(-1);
  expect(sameCase('R','!')).toBe(-1);
  expect(sameCase('R','!')).toBe(-1);
  expect(sameCase('R','!')).toBe(-1);
  expect(sameCase('R','!')).toBe(-1);
  expect(sameCase('A', '?')).toBe(-1);
  expect(sameCase('\0', 'B')).toBe(-1);
  expect(sameCase('\t', 'Z')).toBe(-1);
  expect(sameCase('H', ':')).toBe(-1);
  expect(sameCase('!', '@')).toBe(-1);
  expect(sameCase('@', 'H')).toBe(-1);

});

test('Characters are the same case -> it will be 1 ', () => {
  expect(sameCase('R','D')).toBe(1);
  expect(sameCase('m', 'u')).toBe(1);
  expect(sameCase('i', 'y')).toBe(1);
  expect(sameCase('b', 's')).toBe(1);
  expect(sameCase('c', 'z')).toBe(1);
  expect(sameCase('b', 'a')).toBe(1);
  expect(sameCase('d', 'd')).toBe(1);
  expect(sameCase('F', 'P')).toBe(1);
  expect(sameCase('C', 'V')).toBe(1);
  expect(sameCase('M', 'T')).toBe(1);
  expect(sameCase('E', 'Z')).toBe(1);
  expect(sameCase('N', 'Y')).toBe(1);
  expect(sameCase('S', 'H')).toBe(1);
  expect(sameCase('V', 'W')).toBe(1);
});

test('Characters are letters, but not the same case -> it will be 0', () => {
  expect(sameCase('A','d')).toBe(0);
  expect(sameCase('U', 'b')).toBe(0);
  expect(sameCase('Z', 'q')).toBe(0);
  expect(sameCase('O', 'g')).toBe(0);
  expect(sameCase('g', 'B')).toBe(0);
  expect(sameCase('R', 'z')).toBe(0);
  expect(sameCase('I', 'o')).toBe(0);
  expect(sameCase('I', 'e')).toBe(0);
});

