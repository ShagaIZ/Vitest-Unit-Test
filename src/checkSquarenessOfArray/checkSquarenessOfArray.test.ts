import { assert, describe, expect, test, it } from 'vitest';
import { squareOrSquareRoot }  from  "./checkSquarenessOfArrayFunc";
import { firstArrayInput,firstArrayOutput }  from  "./checkSquarenessOfArrayData";

test('Первый тест', ()=>{
    expect(squareOrSquareRoot(firstArrayInput)).to.be.a('array');
    expect(squareOrSquareRoot(firstArrayInput)).to.have.lengthOf(6);
    expect(squareOrSquareRoot(firstArrayInput)).toMatchObject(firstArrayOutput);
})