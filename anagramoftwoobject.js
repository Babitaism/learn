str1 = "aabbbbcc"
str2 = "aabbbbcc"
let obj1 = {}
let flag = 1
for (i in str1) {
    let key = str1[i]
    if (obj1[key] == undefined) {
        obj1[key] = 0
    }
    obj1[key] = obj1[key] + 1
}
//console.log(obj1)
let obj2 = {}
for (i in str2) {
    let key = str2[i]
    if (obj2[key] == undefined) {
        obj2[key] = 0
    }
    obj2[key] = obj2[key] + 1
}
//console.log(obj2)
let arr1 = Object.keys(obj1)
let arr2 = Object.keys(obj2)
length1 = arr1.length
length2 = arr2.length
//console.log(arr1, arr2)
if (length1 != length2) {
    flag = 1
}
for (i in obj1){
if(obj1[i]==obj2[i]){
flag = 0
}
else{
    flag=1
    break
}
}
if(flag==0){
console.log('anagram')
}
else{
    console.log('nonAnagram')   
}




