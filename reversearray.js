
function reverseArray (array) {
    let initialCursor = 0
    let len = values.length
    let lastCursor = len-1
    while (lastCursor > initialCursor) {
        let temp = values[lastCursor]
        values[lastCursor] = values[initialCursor]
        values[initialCursor] = temp
        initialCursor++
        lastCursor--
    }
    console.log(array)
}
let values = ['2','3','4','5']
reverseArray (values)


