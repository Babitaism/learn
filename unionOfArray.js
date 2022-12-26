// // Write a function 
// // Use your ouwn logic to derive union and intersection of two given array. 
// //The array can contain duplicates elements?

function union (arr1, arr2){
    let obj = {}
    for(i in arr1){
        arrElement = arr1[i]
        obj[arrElement] = true
       
    }
    for(i in arr2){
        arrElement = arr2[i]
        obj[arrElement] = true
    }
    
    return Object.keys(obj)
}

console.log( union ([1,2,2,3,4],[8,9,9]))

function value(obj){
    let array = []
    for (i in obj){
      array.push(obj[i])
    }
    return array
    }


function key(obj){
let array = []
for (i in obj){
  array.push(i)
}
return array
}

check = key ({name: 'babi', age:18, sex:'f'})
console.log(check)