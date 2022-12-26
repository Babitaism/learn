function billGenerator(unit) {
    if (unit <= 100) {
        final = unit * 2
    }
    if (unit > 100 && unit <= 200) {
        final = 200 + (unit - 100) * 4
    }
    if (unit > 200 && unit <= 500) {
        final = 200 + 400 + (unit - 200) * 6
    }
    if (unit >= 500) {
        final = 200 + 400 + 1800 + (unit - 500) * 10
    }
    return final
}

getOutput = billGenerator (105)
console.log(getOutput)

function generateBillForCustomers(category, unit) {
    bill = billGenerator(unit)
    if (category == 'prime') {
        discount = 0.1 * bill
        final = bill - discount
        return final
    }
    if (category != 'prime') {
        return bill
    }
}

let billForPrime = generateBillForCustomers('nprime', 105)
console.log(billForPrime)