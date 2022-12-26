// function average (array){
// let sum = 0
// length = values.length
// for(i=0;i<length;i++){
// sum = sum + values[i]
// }
// average = sum/length
// console.log(average)
// }
// let values = [1,2,3,4,5]
// average (values)

// let string = 'abc#de'
// len = string.length
// result = ""
// for(i=0;i<len;i++){
//     if(string[i]== '#'){
//         for(i=i;i<len-1;i++){
//             console.log(string[i+1])
//         }
//     }
// }

class BabitaFamily{
   constructor(name,mothers_name,fathers_name,husbands_name){
        this.name = name
        this.mothers_name = mothers_name
        this.fathers_name = fathers_name
        this.husbands_name = husbands_name
    }
   father(){
    return 'ss rawat'
  }

  mother(){
     return ''
  }

}

const babita1=new BabitaFamily('babz','shanti','s_s_rawat','ashwini')
console.log(babita1.mothers_name)
console.log(babita1.fathers_name)
console.log(babita1.name)
console.log(babita1.husbands_name)