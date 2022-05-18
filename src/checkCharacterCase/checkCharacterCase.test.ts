import { assert, describe, expect, test, it } from 'vitest'
import { sameCase }  from  "./checkCharacterCase";
import {ionRangeSlider} from 'ion-rangeslider'

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
const  lowerCase:any = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const  upperCase:any = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const NON_LETTERS = "0123456789~#&'|()[]{}@$^?!.:;,+*-=^_";

test("Characters are letters, but not the same case -> it will be 0", () => {
    for( let i:number = 0; i < 100; i++){
      expect(sameCase(lowerCase[i],upperCase[i])).toBe(0)
    }; 
  });
