let num1 = 10
num2 = 20
flag = 1
for (x=num1;x<=num2;x++){
    for(y=x-1;y>=2;y--) {
        if (x % y == 0) {
            flag = 0
            break
        } else {
            flag = 1
        }
    }
    if (flag == 0){
        console.log(x,'notPrime')
    }
    else{
        console.log(x,'prime')
    }
}