// check prime numbers between two numbers
function primeBetweenTwoNumbers (num1, num2) {
let array = []
    for (x = num1; x <= num2; x++){
        for (y = x - 1; y >= 2; y--) {
            if (x % y == 0) {
                flag = 1
                break
            }
            else {
                flag = 0
            }
        }
    if (flag == 0) {
     array.push(x)
    }
    }
return array
  }
let allPrime = primeBetweenTwoNumbers(3, 21)
console.log(allPrime)

//check even numbers between 2 numbers
function checkEvenNumbers (num1,num2){
    let array = [ ]
    for(i=num1;i<=num2;i++){
    if (i%2==0){
    array.push (i)
    }
    }
    return array
    }
    let allEven = checkEvenNumbers (4,10)
    console.log(allEven)