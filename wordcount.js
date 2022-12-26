//input = ['adsfse', 'dfssdfsf', 'asdasfaf', 'asafa']

//output = {'adsfse': 6, 'dfssdfsf': 8, 'asdasfaf': word_count, 'asafa': word_count}

// function wordCount(arr) {
//     let obj = {}
//     for (i in arr) {
//         arrElement = arr[i]
//         len = arrElement.length
//         obj[arrElement] = len
//         final = obj
//     }
// return final
// }
// output = wordCount (['adsfse', 'dfssdfsf', 'asdasfaf', 'asafa'])
// console.log(output)


//input = 'abcdsghhffsdchf21kkhg118ggf'

//output = {a 2,b 4}

function calculateCount(string) {
    let len = string.length
    let obj = {}
    for (i in string) {
        let key = string[i]
        if (obj[key] == null) {
            obj[key] = 0
        }
        obj[key] = obj[key] + 1
    }
    final = obj
    return final
}

output = calculateCount('aabc2aagghh2')
console.log(output)