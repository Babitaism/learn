
function findEvenNumbers(num1, num2) {
    let arrayEven = []
    for (i = num1; i <= num2; i++) {
        if (i % 2 == 0) {
            arrayEven.push(i)
        }
    }
    return arrayEven
}


function findOddNumbers(num1, num2) {
    let arrayOdd = []
    for (i = num1; i <= num2; i++) {
        if (i % 2 != 0) {
            arrayOdd.push(i)
        }
    }
    return arrayOdd
}




function findPrimeNumbers(num1, num2) {
    let array = []
    for (x = num1; x <= num2; x++) {
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

function p(arg){
    return console.log(arg)
}


function resultSet(lowerBound, upperBound){
    let object = {
        prime: findPrimeNumbers(lowerBound, upperBound),
        odd: findOddNumbers(lowerBound, upperBound),
        even: findEvenNumbers(lowerBound, upperBound)
    }
    return object
}


let response = resultSet(30,50)


p (response)









