import { assert, describe, expect, test, it } from 'vitest'
import { countPositivesSumNegatives }  from  "./countOfElementsInArrayFunc";
import { arrays  } from "./countOfElementsInArrayData";

describe('Базовые тесты', ()=>{

    test('Числа(+ и -) в массиве -> возвращается новый массив: элемент[0]=кол-во положительных чисел, элемент[1]=сумма отрицательных чисел',()=>{
        expect(countPositivesSumNegatives(arrays.firstInput)).toBeTypeOf('object');
        expect(countPositivesSumNegatives(arrays.firstInput)).toHaveLength(2);
        expect(countPositivesSumNegatives(arrays.firstInput)).toEqual(arrays.firstOutput);
    });
})