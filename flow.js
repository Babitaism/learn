function finder (list, number) {

    let len = list.length
    let flag = 0
    for (let i = 0; i < len; i++) {
        if (list[i] == number) {
            flag = 1
        } else {
            flag = 0
        }
    }
    if (flag == 1) {
        return true
    } else {
        return false
    }

}


function doubleArrayElement (output) {
let len = output.length
        for (i = 0; i < len; i++) {
            output[i] = 2 * output[i]
        }
            return output
 }


function reverseArray (finalArray) {
    let initialCursor = 0
    let len = finalArray.length
    let lastCursor = len-1
    while (lastCursor > initialCursor) {
        let temp = finalArray[lastCursor]
        finalArray[lastCursor] = finalArray[initialCursor]
        finalArray[initialCursor] = temp
        initialCursor++
        lastCursor--
    }
    return finalArray
}


function processor (array,number) {
    let existence = finder(array,number)
    if (existence) {
        let doubleElement = doubleArrayElement (array)
        let final = reverseArray(doubleElement)
        return final
    } else {
        return 'TBD'
    }

}

finalResponse = processor ([1,2,3,4],4)
console.log(finalResponse)

