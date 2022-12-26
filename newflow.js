// string ='1234#456'
// # true - print # k bad elements
// # nahi hai to msg aya this string doesnot contain #

function finder(str) {
    len = str.length
    flag = 0
    for (i = 0; i < len; i++) {
        if (str[i] == '#') {
            flag = 1
            break
        }
        else {
            flag = 0
        }
    }
    if (flag == 1) {
        return true
    }
    else {
        return false
    }
}

// check = finder ('abcef')
// console.log(check)



function checkCondition(string) {
    check = finder(string)
    let start = 0
    len = string.length
    if (check) {
        for (i = 0; i < len; i++) {
            if (string[i] == '#') {
                start = i
                break
            }
        }
        output = string.slice(start+1, len+1)
        return output
    }
}


let finalOutput = checkCondition('abcdef#')
console.log(finalOutput)

if (finalOutput == ''){
    console.log('no element after #')
}



