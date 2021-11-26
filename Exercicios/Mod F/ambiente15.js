let num = [5,8,2,9,3]
console.log(`o vetor é ${num}`)
num [2] = 4
num [5] = 1
console.log(`o vetor modificado é ${num}`)
console.log(`o vetor 0 é ${num[0]}`)

//usando push
num.push(7)
console.log(`o vetor modificado com push é ${num}`)
console.log(`o comprimento do vetor modificado é ${num.length}`)

//Usando o .sort()
/*num.sort()
console.log(`o vetor ordenado é ${num}`)*/

//Para mostrar o vetor parte a parte

/*for (var p = 0; p < num.length; p++){
    console.log(`A entrada ${p} do vetor é ${num[p]}`)
}*/

/* for (let pos in num){
    console.log(num[pos])
}*/

console.log(num.indexOf(9))

console.log(num.indexOf(11))