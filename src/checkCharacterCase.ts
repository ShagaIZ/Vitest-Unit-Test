export let sameCase = function (a:any, b:any){
  if((a.match(/[a-z]/) && b.match(/[a-z]/)||(a.match(/[A-Z]/) && b.match(/[A-Z]/)))){
    return 1
  }else if((a.match(/^[a-zA-Z]+$/) && b.match(/^[a-zA-Z]+$/) )){
    return  0
  }else{
    return -1
  } 
};
