string1 ='abcde'
let object1 = {}
for(i in string1){
let key = string1[i]
if (object1[key] == undefined) {
object1[key] = 0
}
object1[key] = object1[key] + 1
}
console.log (object1)
string2='abcde'
let object2 = {}
for(k in string2){
let key = string2[k]
if(object2[key] == undefined){
object2[key] = 0
}
object2[key] = object2[key] + 1
}
console.log(object2)

let flag = false

 lengthofobj1 = Object.keys(object1)
 lengthofobj2 = Object.keys(object2)
 console.log(lengthofobj1)
 console.log(lengthofobj2)

if(lengthofobj1.length == lengthofobj2.length)
for (i in object1){
if(object1[i] == object2[i]){
flag = true
}
else {
flag = false
}
}

if (flag == true){
console.log ('anagram')
}
else{
console.log ('nonanagram')
}
