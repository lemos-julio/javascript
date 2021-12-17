var pilot_name = window.prompt("Qual o Nome do Pilot?")
var velocity = 0
var choose_option =  window.confirm('Deseja acelarar a Nave')


if(choose_option  == false){
  window.alert('A nave esta parada')
}else{
  var confirmation = window.confirm('Você realmente deseja acelerar a nave?')
  if(confirmation == true){
    var upvelocity = window.prompt('Quanto deseja acelerar a nave?')
    velocity = velocity + upvelocity
    
    switch (velocity) {
      case 0 :
        window.alert('A nave parada. Considere partir e aumentar a velocidade.')
        break;
      case 40:
        window.alert('Parece uma boa velocidade para manter')  
        break;
      case 80:
        window.alert('Boa Velocidade para manter.')
      case 100:
        window.alert('Velocidade alta, considere diminuir.')
        break;
      default:
    }

  }else{
    window.alert(" A nave esta parada!")
  }

}

