function fibonacci(num) {
    let a = 0;
    let b = 1;
    let c = a + b;
    let arr = [];
    arr.push(a, b, c);
    for (i = 1; i <= num-2; i++) {
      let d = b + c;
      b = c;
      c = d;
      arr.push(d)
    }
    return arr
  }
  
  let fibonacciSeries = fibonacci(6);
  console.log(fibonacciSeries);


// let num = 6
// let a= 0
// let b=1
// let c=a+b
// for(i=1;i<num-2;i++){
//     a=b
//     b=c
//     c=a+b
// }
// console.log(a,b,c)


// let a = 0
// b = 1
// let c
// let number = 6
// for (let i = 1; i <= number; i++) {
//     console.log(a)
//     c = a + b
//     a = b
//     b = c
// }