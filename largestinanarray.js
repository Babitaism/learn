function largest (a){
 let largest = a[0]
 length = a.length
 for(i=0;i<length;i++){
 if (a[i] > largest){
 largest = a[i]
 }
 }
 console.log(largest)
 }
 largest ([1,20,3,4])

function smallest (a){
let smallest = a[0]
len = a.length
for (i=0;i<len;i++){
if (smallest > a[i]){
smallest = a[i]
}
}
console.log(smallest)
}
smallest ([12,2,3,4,10])