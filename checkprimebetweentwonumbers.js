function checkPrimebetweenTwoNumbers (num1,num2){
flag = 1
for (x=num1;x<=num2;x++){
    for(y=x-1;y>=2;y--) {
        if (x % y == 0) {
            return false
            break
        } else {
           return true
        }
    }
}
}
checkPrimebetweenTwoNumbers (10,20)