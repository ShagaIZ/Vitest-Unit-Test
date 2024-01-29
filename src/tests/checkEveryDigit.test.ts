import { assert, describe, expect, test, it } from 'vitest';
import { squareDigits}  from  "../functions/func";
import { InputNumbers, OutputNumbers}  from  "../data/squreEveryDigitData";

describe('Базовые тесты', ()=>{

test('Четыре единицы -> результат 1111', ()=>{
    expect(squareDigits(InputNumbers.FourOne)).to.be.a('number');
    expect(squareDigits(InputNumbers.FourOne)).toEqual(OutputNumbers.FourOne)
});

test('Четыре единицы -> результат 2222', ()=>{
    expect(squareDigits(InputNumbers.FourTwo)).to.be.a('number');
    expect(squareDigits(InputNumbers.FourTwo)).toEqual(OutputNumbers.FourTwo)
});

test('Четыре единицы -> результат 9999', ()=>{
    expect(squareDigits(InputNumbers.FourThree)).to.be.a('number');
    expect(squareDigits(InputNumbers.FourThree)).toEqual(OutputNumbers.FourThree)
});
});