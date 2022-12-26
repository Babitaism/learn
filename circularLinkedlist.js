let list = {
    head: {
        value: '1',
        next: 'a'
    },
    a: {
        value: '2',
        next: 'd'
    },
    d: {
        value: '5',
        next: 'a'
    },
    c: {
        value: '4',
        next: null
    }
}

let currentHopId = 'head'
let currentHop = list.head
let array = []
let flag = false
while (currentHopId != null) {
    nextHopId = currentHop.next
    currentHop = list[nextHopId]
    currentHopId = nextHopId
    // search in array fist
     for(i in array){
        if(array[i] == currentHopId){
            flag = true
            break
        }
     }
    // search in array fist
    if(flag){
        break
    }
    else{
        array.push(currentHopId)
    }
}
if(flag){
    console.log('circular')
}
else{
    console.log('non circular')
}
