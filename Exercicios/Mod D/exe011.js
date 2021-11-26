var idade = 18;
console.log(`na sua idade de ${idade}, você tem: `)
if (idade<16){
    console.log('voto inválido')
} else {
    //condição limita igual  maior que 16 e(&&) menor  que  18, ou (||) acima de 65
    if(idade>=16 && idade < 18 || idade > 65){
        console.log('voto opcional')
    } else {
        console.log('voto obrigatório')
    }
}