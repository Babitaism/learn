let num = '154'
x = num.split('')
len = x.length
let y = Number(num)
let sum = 0
for (i=0;i<len;i++){
    temp = Math.pow(x[i],len)
    sum = sum + temp
}
if (sum == y ){
    console.log('it is an armstrong')
}
else {
    console.log('notAnArmstrong')
}

// let arr = [[1,2,3,4,5] , [6,7,8,9,10] , [11,12,13,14,15]]
// for (i =0;i<arr.length;i++){
//     console.log (arr[i])
// }