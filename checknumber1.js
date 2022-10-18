let str = 'ab1cdc1'
//split_string = str.split("")
let flag = false
len=str.length
for (i=0;i<len;i++){
    if (str[i] == 1) {
        flag = true
        break
    }
}
if (flag == true){
    console.log ('notValidString')
}
else {
    console.log ('validstring')
}
