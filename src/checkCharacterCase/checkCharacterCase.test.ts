import { assert, describe, expect, test, it } from 'vitest'
import { sameCase }  from  "./checkCharacterCaseFunction";
import { lowerCaseLetters, upperCaseLetters, notLetters, resultOfTest }  from  "./checkCharacterCaseData";

describe('Простые тесты',()=>{
    test('Один из символов не буква -> результат -1', () => {
      expect(sameCase('R','!')).toBe(resultOfTest.minusOne);
      expect(sameCase('R','!')).toBe(resultOfTest.minusOne);
      expect(sameCase('R','!')).toBe(resultOfTest.minusOne);
      expect(sameCase('R','!')).toBe(resultOfTest.minusOne);
      expect(sameCase('R','!')).toBe(resultOfTest.minusOne);
      expect(sameCase('A', '?')).toBe(resultOfTest.minusOne);
      expect(sameCase('\0', 'B')).toBe(resultOfTest.minusOne);
      expect(sameCase('\t', 'Z')).toBe(resultOfTest.minusOne);
      expect(sameCase('H', ':')).toBe(resultOfTest.minusOne);
      expect(sameCase('!', '@')).toBe(resultOfTest.minusOne);
      expect(sameCase('@', 'H')).toBe(resultOfTest.minusOne);
    });

    test('Буквы одного регистра -> результат 1', () => {
      expect(sameCase('R','D')).toBe(resultOfTest.one);
      expect(sameCase('m', 'u')).toBe(resultOfTest.one);
      expect(sameCase('i', 'y')).toBe(resultOfTest.one);
      expect(sameCase('b', 's')).toBe(resultOfTest.one);
      expect(sameCase('c', 'z')).toBe(resultOfTest.one);
      expect(sameCase('b', 'a')).toBe(resultOfTest.one);
      expect(sameCase('d', 'd')).toBe(resultOfTest.one);
      expect(sameCase('F', 'P')).toBe(resultOfTest.one);
      expect(sameCase('C', 'V')).toBe(resultOfTest.one);
      expect(sameCase('M', 'T')).toBe(resultOfTest.one);
      expect(sameCase('E', 'Z')).toBe(resultOfTest.one);
      expect(sameCase('N', 'Y')).toBe(resultOfTest.one);
      expect(sameCase('S', 'H')).toBe(resultOfTest.one);
      expect(sameCase('V', 'W')).toBe(resultOfTest.one);
    });

    test('Буквы разного регистра -> результат 0', () => {
      expect(sameCase('A','d')).toBe(resultOfTest.zero);
      expect(sameCase('U', 'b')).toBe(resultOfTest.zero);
      expect(sameCase('Z', 'q')).toBe(resultOfTest.zero);
      expect(sameCase('O', 'g')).toBe(resultOfTest.zero);
      expect(sameCase('g', 'B')).toBe(resultOfTest.zero);
      expect(sameCase('R', 'z')).toBe(resultOfTest.zero);
      expect(sameCase('I', 'o')).toBe(resultOfTest.zero);
      expect(sameCase('I', 'e')).toBe(resultOfTest.zero);
    });
});
describe('Детальный тесты', ()=>{

    test("Буквы разного регистра, первый аргумет-нижний регистр, второй аргумент-верхний регистр -> результат 0", () => {
      for( let i:number = 0; i < lowerCaseLetters.length; i++){
          expect(sameCase(lowerCaseLetters[i],upperCaseLetters[i])).toBe(resultOfTest.zero);
        }; 
    });

    test("Буквы разного регистра, первый аргумет-верхний регистр, второй аргумент- нижний регистр -> результат 0", () => {
      for( let i:number = 0; i < lowerCaseLetters.length; i++){
          expect(sameCase(upperCaseLetters[i],lowerCaseLetters[i])).toBe(resultOfTest.zero);
        }; 
    });

    test("Буквы одного регистра,первый и второй аргумет-нижний регистр -> результат 1", () => {
      for( let i:number = 0; i < lowerCaseLetters.length; i++){
        expect(sameCase(lowerCaseLetters[i],lowerCaseLetters[i])).toBe(resultOfTest.one);
      }; 
    });

    test("Буквы одного регистра,первый и второй аргумет-верхний регистр -> результат 1", () => {
      for( let i:number = 0; i < upperCaseLetters.length; i++){
        expect(sameCase(upperCaseLetters[i],upperCaseLetters[i])).toBe(resultOfTest.one);
      }; 
    });

    test("Один из символов не буква, первый аргумент буква-нижний регистр, второй аргумент-не буква -> результат -1", () => {
      for( let i:number = 0; i < lowerCaseLetters.length; i++){
          expect(sameCase(lowerCaseLetters[i],notLetters[i])).toBe(resultOfTest.minusOne);
        }; 
    });

    test("Один из символов не буква, первый аргумент буква-верхний регистр, второй аргумент-не буква -> результат -1", () => {
      for( let i:number = 0; i < upperCaseLetters.length; i++){
          expect(sameCase(upperCaseLetters[i],notLetters[i])).toBe(resultOfTest.minusOne);
        }; 
    });

    test("Один из символов не буква, первый аргумент-не буква, второй аргумент буква-нижний регистр -> результат -1", () => {
      for( let i:number = 0; i < lowerCaseLetters.length; i++){
          expect(sameCase(notLetters[i],lowerCaseLetters[i])).toBe(resultOfTest.minusOne);
        }; 
    });

    test("Один из символов не буква, первый аргумент-не буква, второй аргумент буква-верхний регистр -> результат -1", () => {
      for( let i:number = 0; i < upperCaseLetters.length; i++){
          expect(sameCase(notLetters[i],upperCaseLetters[i])).toBe(resultOfTest.minusOne);
        }; 
    });
});