function contar(){
    let ini = document.getElementById('txti')
    var res = document.getElementById('res')
    res.innerHTML =`Tabuada de ${ini.value}`
    if (ini.value.length == 0){
        window.alert('Por favor, digite um número')

    } else {
        for (let c = 1; c <= 10; c++){
        let v = Number(ini.value)
        let m = (v*c)
        let item = document.createElement('option')
        item.text = `${v} x ${c} = ${m}`
        res.appendChild(item)

        }
    }

}
