// TODO:: obj.key ==> key is exactly reside in obj e.g obj = {key: 1}
//TODO:: obj[key] ==> it resolves a variable
// key = 'ashwini'  ;obj = {ashwini: 1} ; abj[key]
// let x = 'chunna'
//obj[x] === obj.chunna true


let obj = {
    babita: ['a','b','c','d'],
    ashwini: ['e','f','g'],
    chunna: ['h','i','j', 'a']
}

//obj.chunna
a = ['ashwini', 'babita', 'chunna', 'chunna', 'ashwini', 'babita', 'rishu']

let obj1 = {
    ashwini: true,
    babita: true,
    chunna: true,
    rishu: true
}

obj1.chunna
for (let i in a){
    let val = a[i]
    obj1[val] = true
}

for(let key in obj){
    let value = obj[key]
    console.log(value)
    for(let i = 0; i<value.length;i++){
        console.log(value[i])
      for(let z= 0; z<=4; z++){
          console.log(z)
          break

      }
    }
}

//['a','b','c','d']
//0
//1
//2
//3
//['e','f','g']
//0
//1
//2

//['h','i','j', 'a']
//0
//1
//2
//3