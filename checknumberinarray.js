list =[1,2,3,4,10]
number = 3
flag = 0
len = list.length
for (let i = 0; i < len; i++) {
    if (list[i] == number) {
        flag = 1
        break
    } else {
        flag = 0
    }
}
if(flag ==1){
    console.log('true')
}
else{
    console.log('false')
}