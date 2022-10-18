//a = ['ashwini','ashwini','ashwini','babita', 'chunna', 'chunna','chunna']
//
// diary = {}
//for(let i = 0; i<a.length;i++){
//arryElement = a[i]
//if(diary[arryElement] == undefined){
//diary[arryElement] = 0
//}
//diary[arryElement] = diary[arryElement] + 1
//
//}
//
//console.log(diary)

//for(i in diary){
//if(diary[i] > 1){
//console.log(i)
//}
// //}
// string1 ='abcd'
// let object1 {}
// for(i in string1){
// let key = string1[i]
// if (object1[key] == undefined) {
// object1[key] = 0
// }
// object1[key] = object1[key] + 1
// }
// console.log (object1)

// let x,y, chr
// for(x=1;x<=6;x++){
//     chr = " "
//     for (y = 1; y<=x;y++){
//         chr = chr + (y*y) + " "
//     }
//     console.log(chr)
// // }
//
// let num = 4
// let a= 0
// b=1
// c= a+b
// for(i=1;i<num;i++){
//     c= a+b
//     b=a
//     b=c
// }
// console.log(c)

list =[1,2,3,4]
number = 10
flag = 0
len = list.length
for (let i = 0; i < len; i++) {
    if (list[i] == number) {
       flag = 1
    } else {
       flag = 0
    }
}
if(flag ==1){
    console.log('true')
}
else{
    console.log('false')
}


















