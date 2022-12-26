
function intersection(arr1, arr2) {
    let obj = {}
    for (i in arr1) {
        arrElement = arr1[i]
        obj[arrElement] = true
    }
    let obj2 = {}
    for (i in arr2) {
        arrElement = arr2[i]
        obj2[arrElement] = true
    }
    let final = []
    for (i in obj) {
        if (obj2[i]) {
            final.push(i)
        }

    }
    return final
}

console.log(intersection([1, 6, 7, 3, 4], [1,6, 3]))

// subtraction of 2 sets

function subtraction(arr1,arr2){
    let obj1={}
for(i in arr1){
    arrElement = arr1[i]
    obj1[arrElement] = true
}
let obj2={}
for(i in arr2){
    arrElement = arr2[i]
    obj2[arrElement] = true
}
let array = []
    for (i in obj1) {
        if (obj2[i]!=obj1[i]) {
            array.push(i)
}
}
return array
}
final = intersection ([1,2,3,9],[1,2,9])
console.log(final)




