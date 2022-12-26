function stepsCounter() {
    len = arr.length
    let step =0
    let i = 0
    while(i < len) {
        step = step + arr[i]
        i = step 
        if (arr[i] == 0) {
            break
        }
      
    }
     
    return step >= len
}

let arr = [2, 4, 1, 3, 0, 0, 9]
check = stepsCounter(arr)
console.log(check)