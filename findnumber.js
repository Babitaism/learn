let num = 2
array = [1,2,3,4,5,6]
length = array.length
let flag
for (i=0;i<length;i++){
if (num == array[i]) {
flag = 0
break
}
}
if (flag == 0) {
console.log('true')
}
else {
console.log('false')
}