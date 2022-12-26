// let arr = [1,2,3,4,5,6] 
// let name1 = ['ashwini','babita','manu','tanu','jaanu','nanu']
// let obj1 = {}

// for (i in arr){
// let key = arr[i]
// obj1[key]= name1[i]
// }
// console.log(obj1)

function countConVow(){
    let chr
    let obj = {}
    array = str.split("")
    countVowel = 0
    countConsonants = 0
    vowelsArr = ['a', 'e', 'i', 'o', 'u']
    for(i in str){
    if (vowelsArr.includes(str[i])){
        countVowel++
    }
    else{
        countConsonants++
    }
    }
    obj.vowels = countVowel
    obj.consonants = countConsonants
    return obj
    }
    str = 'aabbccddeeiuuxxoo'
    output = countConVow (str)
    console.log(output)
    
    
    
    