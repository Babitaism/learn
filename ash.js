function isPalindromn(){
    backup = num
reverse = 0
remainder = 0
while (num > 0) {
remainder = num%10
reverse = reverse * 10 + remainder
num = Math.floor(num/10)
}
console.log (reverse)
console.log(backup)
if (reverse == backup){
console.log('palendrome')
}
else {
console.log ('notPalendrome')
}
}
isPalindrome (121)

