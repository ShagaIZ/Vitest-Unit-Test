import { assert, describe, expect, test, it } from 'vitest'
import { sameCase }  from  "../functions/checkCharacterCaseFunction";
import { lowerCaseLetters, upperCaseLetters, notLetters, resultOfTest,  }  from  "../data/checkCharacterCaseData";

const randomDataLowerCaseLetters:string = lowerCaseLetters[Math.floor(Math.random()*lowerCaseLetters.length)];
const randomDataUpperCaseLetters:string = upperCaseLetters[Math.floor(Math.random()*upperCaseLetters.length)];
const randomDataNotLetters:string = notLetters[Math.floor(Math.random()*notLetters.length)];
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
describe('Детальный тесты с циклами', ()=>{

    test("Буквы разного регистра, первый аргумет-нижний регистр, второй аргумент-верхний регистр -> результат 0", () => {
      lowerCaseLetters.forEach((lowerCase,index)=>{
          const upperCase = upperCaseLetters[index]
          expect(sameCase(lowerCase,upperCase)).toBe(resultOfTest.zero);
          expect(sameCase(lowerCase,upperCase)).toBeTypeOf('number');
        });
    });

    test("Буквы разного регистра, первый аргумет-верхний регистр, второй аргумент- нижний регистр -> результат 0", () => {
      lowerCaseLetters.forEach((lowerCase,index)=>{
          const upperCase = upperCaseLetters[index]
          expect(sameCase(upperCase,lowerCase)).toBe(resultOfTest.zero);
          expect(sameCase(upperCase,lowerCase)).toBeTypeOf('number');
        });
    });

    test("Буквы одного регистра,первый и второй аргумет-нижний регистр -> результат 1", () => {
      lowerCaseLetters.forEach((lowerCase)=>{
          expect(sameCase(lowerCase,lowerCase)).toBe(resultOfTest.one);
          expect(sameCase(lowerCase,lowerCase)).toBeTypeOf('number');
        });
    });

    test("Буквы одного регистра,первый и второй аргумет-верхний регистр -> результат 1", () => { 
      upperCaseLetters.forEach((upperCase)=>{
          expect(sameCase(upperCase,upperCase)).toBe(resultOfTest.one);
          expect(sameCase(upperCase,upperCase)).toBeTypeOf('number');
        });
    });

    test("Один из символов не буква, первый аргумент буква-нижний регистр, второй аргумент-не буква -> результат -1", () => {
      lowerCaseLetters.forEach((lowerCase,index)=>{
          const notLetter = notLetters[index]
          expect(sameCase(lowerCase,notLetter)).toBe(resultOfTest.minusOne);
          expect(sameCase(lowerCase,notLetter)).toBeTypeOf('number');
        });
    });

    test("Один из символов не буква, первый аргумент буква-верхний регистр, второй аргумент-не буква -> результат -1", () => {
      upperCaseLetters.forEach((upperCase,index)=>{
          const notLetter = notLetters[index]
          expect(sameCase(upperCase,notLetter)).toBe(resultOfTest.minusOne);
          expect(sameCase(upperCase,notLetter)).toBeTypeOf('number');
        });
    });

    test("Один из символов не буква, первый аргумент-не буква, второй аргумент буква-нижний регистр -> результат -1", () => {
      lowerCaseLetters.forEach((lowerCase,index)=>{
          const notLetter = notLetters[index]
          expect(sameCase(notLetter,lowerCase)).toBe(resultOfTest.minusOne);
          expect(sameCase(notLetter,lowerCase)).toBeTypeOf('number');
        });
    });

    test("Один из символов не буква, первый аргумент-не буква, второй аргумент буква-верхний регистр -> результат -1", () => {
      upperCaseLetters.forEach((upperCase,index)=>{
          const notLetter = notLetters[index]
          expect(sameCase(notLetter,upperCase)).toBe(resultOfTest.minusOne);
          expect(sameCase(notLetter,upperCase)).toBeTypeOf('number');
        });
    });   
});
describe('Рандомные данные для тестов', ()=>{

  test("Буквы разного регистра, первый аргумет-нижний регистр, второй аргумент-верхний регистр -> результат 0", () => {
        expect(sameCase(randomDataLowerCaseLetters,randomDataUpperCaseLetters)).toBe(resultOfTest.zero);
        expect(sameCase(randomDataLowerCaseLetters,randomDataUpperCaseLetters)).toBeTypeOf('number');  
  });

  test("Буквы разного регистра, первый аргумет-верхний регистр, второй аргумент- нижний регистр -> результат 0", () => {
        expect(sameCase(randomDataUpperCaseLetters,randomDataLowerCaseLetters)).toBe(resultOfTest.zero);
        expect(sameCase(randomDataUpperCaseLetters,randomDataLowerCaseLetters)).toBeTypeOf('number');  
  });

  test("Буквы одного регистра,первый и второй аргумет-нижний регистр -> результат 1", () => {
      expect(sameCase(randomDataLowerCaseLetters,randomDataLowerCaseLetters)).toBe(resultOfTest.one);
      expect(sameCase(randomDataLowerCaseLetters,randomDataLowerCaseLetters)).toBeTypeOf('number');  
  });

  test("Буквы одного регистра,первый и второй аргумет-верхний регистр -> результат 1", () => {
      expect(sameCase(randomDataUpperCaseLetters,randomDataUpperCaseLetters)).toBe(resultOfTest.one);
      expect(sameCase(randomDataUpperCaseLetters,randomDataUpperCaseLetters)).toBeTypeOf('number');
  });

  test("Один из символов не буква, первый аргумент буква-нижний регистр, второй аргумент-не буква -> результат -1", () => {
        expect(sameCase(randomDataLowerCaseLetters,randomDataNotLetters)).toBe(resultOfTest.minusOne);
        expect(sameCase(randomDataLowerCaseLetters,randomDataNotLetters)).toBeTypeOf('number');  
  });

  test("Один из символов не буква, первый аргумент буква-верхний регистр, второй аргумент-не буква -> результат -1", () => {
        expect(sameCase(randomDataUpperCaseLetters,randomDataNotLetters)).toBe(resultOfTest.minusOne);
        expect(sameCase(randomDataUpperCaseLetters,randomDataNotLetters)).toBeTypeOf('number');  
  });

  test("Один из символов не буква, первый аргумент-не буква, второй аргумент буква-нижний регистр -> результат -1", () => {
        expect(sameCase(randomDataNotLetters,randomDataLowerCaseLetters)).toBe(resultOfTest.minusOne);
        expect(sameCase(randomDataNotLetters,randomDataLowerCaseLetters)).toBeTypeOf('number');
  });

  test("Один из символов не буква, первый аргумент-не буква, второй аргумент буква-верхний регистр -> результат -1", () => {
        expect(sameCase(randomDataNotLetters,randomDataUpperCaseLetters)).toBe(resultOfTest.minusOne);
        expect(sameCase(randomDataNotLetters,randomDataUpperCaseLetters)).toBeTypeOf('number');
  });

});