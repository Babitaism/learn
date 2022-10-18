let num = 12
let flag = 'prime'
for (let i=2;i<num;i++){
if (num%i==0){
flag = 'notPrime'
console.log('notPrime')
break
}
}
if(flag != 'notPrime'){
console.log('Prime')
}
