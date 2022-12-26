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
let object = {}
let visited
let flag = false
while (currentHopId != null) {
    nextHopId = currentHop.next
    currentHop = list[nextHopId]
    currentHopId = nextHopId
    if (object[nextHopId] == 'visited') {
       flag = true
        break
    }
    else {
        object[nextHopId] = 'visited'
    }  
}
if(flag == true){
    console.log('circular')
}
else{
    console.log('nonCircular')
}



