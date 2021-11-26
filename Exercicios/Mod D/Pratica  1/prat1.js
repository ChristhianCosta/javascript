function carregar() {
    var msg =  window.document.getElementById('msg')
    var img =  window.document.getElementById('imagem')
    var data = new Date()
    var b = data.getMinutes
    //var hora = data.getHours()
    var hora = 16
    msg.innerText=`Agora são ${hora} horas`
        if (hora <= 12 && hora >= 6){
            img.src= "manha.jpg"
            document.body.style.background='#2ecd9f'
        } else if (hora > 12 && hora < 19){
            img.src= "tarde.jpeg"
            document.body.style.background='#b9846f'
        } else {
            img.src= "noite.jpg"
            document.body.style.background='#515154'
        }

}