function diff(arr1,arr2){
let obj1 = {}
for (i in arr1){
    let keys1 = arr1[i]
    obj1[keys1] = true
    }

let obj2 = {}
    for(i in arr2){
        keys2 = arr2[i]
        obj2[keys2] = true
    }
    let final =[]
    for (i in obj1){
       if (obj2[i]!=true) {
      final.push(i)
    }
    }
   return final
}

output = diff([1,2,3,4,5],[1,2,3])
console.log(output)