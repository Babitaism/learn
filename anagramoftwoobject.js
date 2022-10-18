str1 = 'ababc'
let obj1 = {}
for(let i=0;i<str1.length;i++){
let key = str1[i]
if(obj1[key] == undefined){
obj1[key] = 0
}
obj1[key] = obj1[key] + 1
}
console.log(obj1)
str2 = 'aabbc'
let obj2 = {}
for(let i=0;i<str2.length;i++){
let key = str2[i]
if(obj2[key] == undefined){
obj2[key] = 0
}
obj2[key] = obj2[key] + 1
}
console.log(obj2)

//obj1.keys.lenght == obj2.keys.length
keys1array = Object.keys(obj1)
// [a,b]

bothAreEqual = false

for(k in keys1array){

obj1EachKey = keys1array[k]

if (obj2[obj1EachKey] == obj1[obj1EachKey]){
 bothAreEqual = true
}

else{
bothAreEqual = false
}
}


if(bothAreEqual){
console.log('anagram')
}
else {
console.log('non anagram')
}

