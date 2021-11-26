/*function parimp(n){
	
	if (n%2==0){
	return `${n} é par`
	
	}else {
	return `${n} é impar`
	}

}
console.log(parimp(4))*/

// Fatorial

function fatorial (n){
    let fat = 1
    for (let c=n; c>1; c--){
        fat*=c
    }
    return fat
}
console.log(fatorial(171))
