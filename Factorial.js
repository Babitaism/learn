// function factorial (num){
// product = 1
// for (i=1;i<=num;i++){
// product = product * i
// }
// console.log(product)
// }
// factorial (5)


function checkPrimebetweenTwoNumbers(num1, num2) {
    for (x = num1; x <= num2; x++) {
        for (y = x - 1; y >= 2; y--) {
            if (x % y == 0) {
               return false
               break
            }
            else{
                return true
            }
        }
    }

}


final = checkPrimebetweenTwoNumbers(10, 20)
console.log(final)

