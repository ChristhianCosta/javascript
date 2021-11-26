var numAdd = [];
var res = document.getElementById('res')

function adicionar(){
    res.innerHTML = ' '
    var tent = document.getElementById('tent')
    var tv = Number(tent.value)
    var opt = document.getElementById('opt')
    
    if(numAdd.includes(tv)|| tv <= 0){
        window.alert(` A entrada já está inclusa ou é inválida`)

    }else{
        numAdd.push(tv)
        //window.alert(`funciona ${numAdd}`)
        let item = document.createElement('option')
        item.text = `Valor ${tv} adicionado`
        opt.appendChild(item)
    }
    //para apagar o valor no input e voltar o foco para lá
    tent.value=''
    tent.focus()
}

function fin(){
    /*min = Math.min(numAdd)
    max = Math.max(numAdd)*/
    //max = getMaxOfArray(numAdd)
    var numCopy = [];
    var sum = 0;
    var med = 0
    for (var i=0; i<numAdd.length; i++){
        numCopy[i] = numAdd[i]
        sum += numAdd[i]       
    }
    med = (sum/i)
    numCopy.sort()
    res.innerHTML = `Tem-se ${numAdd.length} números cadastrados <br>`
    res.innerHTML += `Sendo o menor dos números cadastrados ${numCopy[0]} <br>`
    res.innerHTML += `Sendo o maior dos números cadastrados ${numCopy[(i-1)]} <br>`
    res.innerHTML += `Sendo a Soma deles igual a ${sum} <br>`
    res.innerHTML += `Sendo a média deles ${med} <br>`
}