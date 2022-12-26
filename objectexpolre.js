//userInfo = {}
//userInfo.name = 'chunna'
//userInfo.sex = 'female'
//userInfo.wife = 'babita'
//userInfo.hobby = 'hilana'
//userInfo.char = 'thaliKaBaigan'
//userInfo.love = 'guitar'
//for (i in userInfo){
// if  (i == 'sex') {
//   console.log('encountered ' + 'sex ' + 'Nomoreexecution')
//   break
//   }
//else {
//console.log(userInfo[i])
//  }
//  console.log('ll')
//   }

//function to calculate string length
function calculateStringLength() {
    let object = {}
    for (i in str) {
        let key = str[i]
        if (object[key] == undefined) {
            object[key] = 0
        }
        object[key] = object[key] + 1
    }
    return object
}

str = 'abaccqffgghhjjlllk'
result = calculateStringLength(str)
console.log(result)



