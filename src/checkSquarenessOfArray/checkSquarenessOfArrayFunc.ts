export function squareOrSquareRoot(array:Array<number>) {
    let item:number;
    return array.map(item => Number.isInteger(Math.sqrt(item)) ? Math.sqrt(item) : item*item);  
}

