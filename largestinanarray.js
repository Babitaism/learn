let a = [18,2,28,4]
let largest = a[0]
length = a.length
for(i=0;i<length;i++){
if (a[i] > largest){
largest = a[i]
}
}
console.log(largest)

let a = [1,2,28,4]
let smallest = a[3]
length = a.length
for(i=0;i<length;i++){
if (a[i] < smallest){
smallest = a[i]
}
}
console.log(smallest)