list1 = {
    head: {
        value: 1,
        next: {
            value: 2,
            next: {
                value: 3,
                next: {
                    value: 4,
                    next: {
                        value: 5,
                        next: {
                            value: 'h',
                            next: null
                        }
                    }
                }
            }
        }
    }
}

let currentHop = list1.head
while (currentHop != null) {
    console.log(currentHop.value)
    nextHop = currentHop.next
    currentHop = nextHop
    if (nextHop == null) {
        break
    }
}