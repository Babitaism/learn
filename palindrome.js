let a=[6,4,5,5,4,6]
let initialCursor = 0
len = a.length
let flag = 0
let lastCursor=len-1
while(lastCursor>initialCursor){
    if(a[initialCursor]!==a[lastCursor]){
        flag = 1
        break
    }
    initialCursor++
    lastCursor--
}
if (flag===1){
    console.log('nonPalindrome')
}
else {
    console.log('Palindrome')
}