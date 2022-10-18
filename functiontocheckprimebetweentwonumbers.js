function isPrime(x) {
    for (y = x - 1; y >= 2; y--) {
        if(x % y == 0) {
            return false
        }
    }
    return true
}


let num1 = 20
num2 = 30
flag = 1
for (x=num1;x<=num2;x++) {
    let result = isPrime(x);
    if(result){
        console.log(x)
    }
}

//0, null, undefined, false , ''   > false