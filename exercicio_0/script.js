function carregar(){
    var msg = document.getElementById('hora')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    /*var hora = 14*/
    msg.innerHTML = `Agora São ${hora} Horas`

    if(hora >= 0 && hora < 12 ){
        
        img.src = 'img/imagem1.png'
        document.body.style.background='#5F9EA0'
    }else if(hora >= 12 && hora < 18){
        
        img.src = 'img/imagem2.png'
        document.body.style.background='#00BFFF'
    }else{
        
        img.src = 'img/imagem3.png'
        document.body.style.background='#363636'
    }





}


