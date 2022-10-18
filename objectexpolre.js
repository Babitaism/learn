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


str = 'abaccqffgghhjjk'
let table = {}
for(let i=0;i<str.length;i++){
let key = str[i]
if(table[key] == undefined){
table[key] = 0
}
table[key] = table[key] + 1
}
console.log(table)





