function contar (){
    var ini = document.getElementById('tini')
    var fim = document.getElementById('tfim')
    var pas = document.getElementById('tpas')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0 || pas.value == 0){
        window.alert('Valores invalidos, favor corrigir')
    } else {
        //res.innerHTML = `Ta indo`
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pas.value)
        res.innerHTML='contando... <br>'
        if (i <= f){
            do{
                res.innerHTML += ` ${i},`
                i+=p
            }while(i <= f)
        }
        if (i > f){
            do{
                res.innerHTML += ` ${i},`
                i-=p
            }while(i >= f)
        }
        
    }
}