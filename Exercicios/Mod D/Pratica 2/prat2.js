function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let pas = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
        window.alert('[Erro] Faltam dados')
    } else {
        res.innerHTML = 'Contando:... <br> '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)

        //para contagem sempre crescente

        //if (i > f){
            //var t = i
            //i = f
            //f = t
        //}
        if ( p <= 0){
            window.alert('Passo Invalido, considerando passo = 1')
            p = 1
        }
        if (i < f){
            //Contagem Progressiva
            for (let c = i; c <= f; c+=p){
                res.innerHTML += `\u{1f449} ${c}, `
            }
        } else {
            //Contagem Regressiva
            for (let c = i; c >= f; c-=p){
                res.innerHTML += `\u{1f449} ${c}, `
            }
        }
    }
}