function babita(num){
    if(num%2 == 0){
        return true
    }
    else{
        return false
    }
}

for(i=0;i<10;i++){
    result = babita(2)
    console.log('$$', result)
}
