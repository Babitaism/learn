////write a function which accepts an array and print the product on the array element ?


function product(values){
length = values.length
let pro = 1
for (i=0; i<length;i++){
pro = pro * values[i]
}
console.log(pro)
}
product([1,2,3,5])