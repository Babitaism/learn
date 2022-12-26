let list = {
    head: {
        value: 'ashwini',
        next: 2
    },
    2: {
        value: 'babita',
        next: 4
    },
    4: {
        value: 'chunna',
        next: 3
    },
    3: {
        value: 'rishu',
        next: 7
    },
    7: {
        value: 'babbu',
        next: null
    }
}

console.log('pre')
console.log(list)
let currentHopId = 'head'
let currentHop = list.head
list.x = {
    value: 'baby',
    next: undefined
}
debugger
while (currentHopId != null) {
    nextHopId = currentHop.next
    currentHop = list[nextHopId]
    currentHopId = nextHopId
    if (currentHopId == 4) {
       list['4'].next = 'x'
        list.x.next = 3
        nextHopId = currentHop.next
    }
}

console.log('--------------------');
console.log(list)














