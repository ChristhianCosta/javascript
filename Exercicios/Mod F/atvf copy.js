var numAdd = [];
var res = document.getElementById('res')
function eNumero(n){
    if (Number(n)>0 && Number(n)<= 100){
        return true
    }else{
        return false
    }
}

function naLista(n,l){
    if(l.indexOf(Number(n))==-1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    res.innerHTML = ' '
    var tent = document.getElementById('tent')
    var tv = Number(tent.value)
    var opt = document.getElementById('opt')
    
    if(eNumero(tv) && naLista(tv, numAdd)){
        numAdd.push(tv)
        let item = document.createElement('option')
        item.text = `Valor ${tv} adicionado`
        opt.appendChild(item)

    }else{
        window.alert(` A entrada já está inclusa ou é inválida`)
        
    }
    //para apagar o valor no input e voltar o foco para lá
    tent.value=''
    tent.focus()
}

function fin(){
    var sum = 0
    var med = 0
    var min = numAdd[0]
    var max = numAdd[0]

    for (let pos in numAdd){
        if(min > numAdd[pos]){
            min = numAdd[pos]            
        }
        if(max < numAdd[pos]){
            max = numAdd[pos]            
        }
        sum += numAdd[pos]
    }

    med = (sum/(numAdd.length))
    
    res.innerHTML = `Tem-se ${numAdd.length} números cadastrados <br>`
    res.innerHTML += `Sendo o menor dos números cadastrados ${min} <br>`
    res.innerHTML += `Sendo o maior dos números cadastrados ${max} <br>`
    res.innerHTML += `Sendo a Soma deles igual a ${sum} <br>`
    res.innerHTML += `Sendo a média deles ${med} <br>`
}