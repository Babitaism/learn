function checkMaxStringchar(list) {
    let values = Object.values(list)
    let keys = Object.keys(list)
    let array = []
    let final
    for (i in list) {
        let count = 0
        let string = list[i].Name
        for (i in string) {
            count++
        }
        final = { count: count, name: string }
        array.push(final)
    }

    let highest = array[0].count
    for (i in array) {
        if (array[i].count > highest) {
            highest = array[i].count
        }
    }
    let array1 =[]
    for ( i in array){
        if (array[i].count == highest) {
            array1.push(array[i])
        }
        desiredOutput = array1
    
    }
    return desiredOutput
    }


output = checkMaxStringchar({ 1: { Name: 'ashwini  kumarr', age: 48 }, 2: { Name: 'babita ttttyttt', age: 38 }, 3: { Name: 'saish', age: 2 }, 4: { Name: 'rishika', age: 10 } })
console.log(output)