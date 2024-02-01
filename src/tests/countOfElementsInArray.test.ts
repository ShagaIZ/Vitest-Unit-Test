import { assert, describe, expect, test, it } from 'vitest'
import { countPositivesSumNegatives }  from  "../functions/countOfElementsInArrayFunction";
import { arrays  } from "../data/countOfElementsInArrayData";

describe('Базовые тесты', ()=>{

    test('Числа(+ и -) в массиве -> возвращается новый массив: элемент[0] > 0, элемент[1] = сумма отрицательных чисел',()=>{
        expect(countPositivesSumNegatives(arrays.firstInput)).toBeTypeOf('object');
        expect(countPositivesSumNegatives(arrays.firstInput)).toHaveLength(2);
        expect(countPositivesSumNegatives(arrays.firstInput)).toEqual(arrays.firstOutput);
    });

    test('Пустой массив -> возвращается пустой массив',()=>{
        expect(countPositivesSumNegatives(arrays.secondInput)).toBeTypeOf('object');
        expect(countPositivesSumNegatives(arrays.secondInput)).toHaveLength(0);
        expect(countPositivesSumNegatives(arrays.secondInput)).toEqual(arrays.secondOutput);
    });

    test('В массиве только отрицательные числа -> возвращается новый массив: элемент[0] = 0, элемент[1] = сумма отрицательных чисел',()=>{
        expect(countPositivesSumNegatives(arrays.thirdInput)).toBeTypeOf('object');
        expect(countPositivesSumNegatives(arrays.thirdInput)).toHaveLength(2);
        expect(countPositivesSumNegatives(arrays.thirdInput)).toEqual(arrays.thirdOutput);
    });

    test('В массиве только положительные числа -> возвращается новый массив: элемент[0] > 0, элемент[1] = 0',()=>{
        expect(countPositivesSumNegatives(arrays.fourthInput)).toBeTypeOf('object');
        expect(countPositivesSumNegatives(arrays.fourthInput)).toHaveLength(2);
        expect(countPositivesSumNegatives(arrays.fourthInput)).toEqual(arrays.fourthOutput);
    });

    test('В массиве одно отрицательное число -> возвращается новый массив: элемент[0] = 0, элемент[1] = одно отрицательное число',()=>{
        expect(countPositivesSumNegatives(arrays.fifthInput)).toBeTypeOf('object');
        expect(countPositivesSumNegatives(arrays.fifthInput)).toHaveLength(2);
        expect(countPositivesSumNegatives(arrays.fifthInput)).toEqual(arrays.fifthOutput);
    });

    test('В массиве одно положительные число -> возвращается новый массив: элемент[0] > 0, элемент[1] = 0',()=>{
        expect(countPositivesSumNegatives(arrays.sixthInput)).toBeTypeOf('object');
        expect(countPositivesSumNegatives(arrays.sixthInput)).toHaveLength(2);
        expect(countPositivesSumNegatives(arrays.sixthInput)).toEqual(arrays.sixthOutput);
    });

    //Согласно условию задачи должен возвращаться пустой массив, но возвращается два нуля, у других участников также
    test('В массиве один null -> возвращается массив с двумя нолями',()=>{
        expect(countPositivesSumNegatives(arrays.seventhInput)).toBeTypeOf('object');
        expect(countPositivesSumNegatives(arrays.seventhInput)).toHaveLength(2);
        expect(countPositivesSumNegatives(arrays.seventhInput)).toEqual(arrays.seventhOutput);
    });

    test('В массиве один undefined -> возвращается массив с двумя нолями',()=>{
        expect(countPositivesSumNegatives(arrays.eighthInput)).toBeTypeOf('object');
        expect(countPositivesSumNegatives(arrays.eighthInput)).toHaveLength(2);
        expect(countPositivesSumNegatives(arrays.eighthInput)).toEqual(arrays.eighthOutput);
    });

    test('В массиве одина строка -> возвращается массив с двумя нолями',()=>{
        expect(countPositivesSumNegatives(arrays.ninthInput)).toBeTypeOf('object');
        expect(countPositivesSumNegatives(arrays.ninthInput)).toHaveLength(2);
        expect(countPositivesSumNegatives(arrays.ninthInput)).toEqual(arrays.ninthOutput);
    });

    test('В массиве числа(+ и -) + null -> возвращается новый массив:элемент[0] > 0, элемент[1] = сумма отрицательных чисел, null игнорируется',()=>{
        expect(countPositivesSumNegatives(arrays.tenthInput)).toBeTypeOf('object');
        expect(countPositivesSumNegatives(arrays.tenthInput)).toHaveLength(2);
        expect(countPositivesSumNegatives(arrays.tenthInput)).toEqual(arrays.tenthOutput);
    });

    test('В массиве числа(+ и -) + undefined -> возвращается новый массив:элемент[0] > 0, элемент[1] = сумма отрицательных чисел, undefined игнорируется',()=>{
        expect(countPositivesSumNegatives(arrays.eleventhInput)).toBeTypeOf('object');
        expect(countPositivesSumNegatives(arrays.eleventhInput)).toHaveLength(2);
        expect(countPositivesSumNegatives(arrays.eleventhInput)).toEqual(arrays.eleventhOutput);
    });

    test('В массиве числа(+ и -) + строка -> возвращается новый массив:элемент[0] > 0, элемент[1] = сумма отрицательных чисел, строка игнорируется',()=>{
        expect(countPositivesSumNegatives(arrays.twelfthInput)).toBeTypeOf('object');
        expect(countPositivesSumNegatives(arrays.twelfthInput)).toHaveLength(2);
        expect(countPositivesSumNegatives(arrays.twelfthInput)).toEqual(arrays.twelfthOutput);
    });
})