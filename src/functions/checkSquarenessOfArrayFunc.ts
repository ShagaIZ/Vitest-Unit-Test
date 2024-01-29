export function squareOrSquareRoot(array:Array<any>) {
    let item:number;
    return array.map(item => Number.isInteger(Math.sqrt(item)) ? Math.sqrt(item) : item*item);  
}

