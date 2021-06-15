function carregar(){
    var msg = document.getElementById('hora')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = 14
    msg.innerHTML = `Agora São ${hora} Horas`

    if(hora >= 0 && hora < 12 ){
        img.src = 'img/imagem1.png'
    }else if(hora >= 12 && hora < 18){
        img.src = 'img/imagem2.png'
    }else{
        img.src = 'img/imagem3.png'
    }





}


