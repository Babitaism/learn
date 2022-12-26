function checkMaxAge(list) {
    let values = Object.values(list)
    let keys = Object.keys(list)
    let highest = list[1].age
    for (i in list) {
        if (list[i].age > highest) {
            highest = list[i].age
        }
    }
    let array = []
    for (i in list) {
        if (list[i].age == highest) {
            array.push(list[i])
        }
    }
    return array
}

final = checkMaxAge({ 1: { Name: 'Ashwini', age: 48 }, 2: { Name: 'Babita', age: 38 }, 3: { Name: 'Saish', age: 2 }, 4: { Name: 'Rishika', age: 10 } })
console.log(final)

// function to calculate smallest age of input

function checkMaxAge(input) {
    values = Object.values(input)
    keys = Object.keys(input)
    let smallest = input[1].age
    for (i in input) {
        if (input[i].age < smallest) {
            smallest = input[i].age
        }
    }
   let array =[]
   for(i in input){
   if(input[i].age == smallest){
    array.push(input[i])
   }
}
   return array
}

final = checkMaxAge({ 1: { Name: 'Ashwini', age: 28 }, 2: { Name: 'Babitaa', age: 0.8 }, 3: { Name: 'Saish', age: 2 }, 4: { Name: 'Rishika', age: 10 } })
console.log(final)

