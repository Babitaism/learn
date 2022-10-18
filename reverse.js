let n = 3458
remainder = 0
reverse = 0
while (n>0){
remainder = n % 10
reverse = reverse * 10 + remainder
n = Math.floor(n/10)
}
console.log(reverse)