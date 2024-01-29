export function countPositivesSumNegatives(input: Array<any>) {
    if((!!input) && (input.length!==0)){
      let a = input.filter((item) => item>0).length
      let b = input.filter((item) => item<0).reduce((a,b) => a + b,0)
      return input = [a,b]
      } else {
        return []
      }
   }