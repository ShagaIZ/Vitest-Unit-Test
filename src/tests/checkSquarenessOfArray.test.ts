import { assert, describe, expect, test, it } from 'vitest';
import { squareOrSquareRoot }  from  "../functions/checkSquarenessOfArrayFunction";
import { arrays }  from  "../data/checkSquarenessOfArrayData";

describe('Базовые тесты', ()=>{

test('Шесть положительных чисел в массиве ->  невозведённые в квадрат == возводятся, возведённые в квадрат == выводиться квадратный корень', ()=>{
    expect(squareOrSquareRoot(arrays.firstInput)).to.be.a('array');
    expect(squareOrSquareRoot(arrays.firstInput)).to.have.lengthOf(6);
    expect(squareOrSquareRoot(arrays.firstInput)).toMatchObject(arrays.firstOutput);
});

test('Семь положительных чисел в массиве -> невозведённые в квадрат == возводятся, возведённые в квадрат == выводиться квадратный корень', ()=>{
    expect(squareOrSquareRoot(arrays.secondInput)).to.be.a('array');
    expect(squareOrSquareRoot(arrays.secondInput)).to.have.lengthOf(7);
    expect(squareOrSquareRoot(arrays.secondInput)).toMatchObject(arrays.secondOutput);
});

test('В массиве отрацательные числа невозведённые в квадрат -> все числа становятся положительными возведёнными в квадрат', ()=>{
    expect(squareOrSquareRoot(arrays.thirdInput)).to.be.a('array');
    expect(squareOrSquareRoot(arrays.thirdInput)).to.have.lengthOf(5);
    expect(squareOrSquareRoot(arrays.thirdInput)).toMatchObject(arrays.thirdOutput);
});

test('Пустой массив ->  возвращен пустой массив', ()=>{
    expect(squareOrSquareRoot(arrays.fourthInput)).to.be.a('array');
    expect(squareOrSquareRoot(arrays.fourthInput)).to.have.lengthOf(0);
    expect(squareOrSquareRoot(arrays.fourthInput)).toMatchObject(arrays.fourthOutput);
});

test('В массив одно положительное число возведённое в квадрат ->  возвращен квадратный корень числа', ()=>{
    expect(squareOrSquareRoot(arrays.fifthInput)).to.be.a('array');
    expect(squareOrSquareRoot(arrays.fifthInput)).to.have.lengthOf(1);
    expect(squareOrSquareRoot(arrays.fifthInput)).toMatchObject(arrays.fifthOutput);
});

test('В массив строка ->  возвращен Nan', ()=>{
    expect(squareOrSquareRoot(arrays.sixthInput)).to.be.a('array');
    expect(squareOrSquareRoot(arrays.sixthInput)).to.have.lengthOf(1);
    expect(squareOrSquareRoot(arrays.sixthInput)).toMatchObject(arrays.sixthOutput);
});

test('В массив null ->  возвращен 0', ()=>{
    expect(squareOrSquareRoot(arrays.seventhInput)).to.be.a('array');
    expect(squareOrSquareRoot(arrays.seventhInput)).to.have.lengthOf(1);
    expect(squareOrSquareRoot(arrays.seventhInput)).toMatchObject(arrays.seventhOutput);
});

test('В массив undefined -> возвращен Nan', ()=>{
    expect(squareOrSquareRoot(arrays.eighthInput)).to.be.a('array');
    expect(squareOrSquareRoot(arrays.eighthInput)).to.have.lengthOf(1);
    expect(squareOrSquareRoot(arrays.eighthInput)).toMatchObject(arrays.eighthOutput);
});

test('В массив объект -> возвращен Nan', ()=>{
    expect(squareOrSquareRoot(arrays.ninthInput)).to.be.a('array');
    expect(squareOrSquareRoot(arrays.ninthInput)).to.have.lengthOf(1);
    expect(squareOrSquareRoot(arrays.ninthInput)).toMatchObject(arrays.ninthOutput);
});
})