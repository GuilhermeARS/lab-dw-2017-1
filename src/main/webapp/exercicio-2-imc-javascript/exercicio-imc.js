
function imc() {
  var peso = document.formulario.peso.value;
  var altura = document.formulario.altura.value;
  var sexo = document.formulario.sexo.value;
  var imc = peso/(altura*altura);
  

  if(sexo == "Mulher") {
	  
	if(imc < 19.1){
		alert("Abaixo do peso");
	} else if( imc < 25.8){
		alert("Peso normal");
	} else if( imc < 27.3){
		alert("Marginalmente acima do peso");
	} else if( imc < 32.3){
		alert("Acima do peso");
	} else if( imc > 32.3){
		alert("Com obesidade");
	}
	
	} else if(sexo == "Homem") {
		if(imc < 20.7){
		alert("Abaixo do peso");
	} else if( imc < 26.4){
		alert("Peso normal");
	} else if( imc < 27.8){
		alert("Marginalmente acima do peso");
	} else if( imc < 31.1){
		alert("Acima do peso");
	} else if( imc > 31.1){
		alert("Com obesidade");
	}
	} else{
		alert("Digite apenas ''Homem'' ou ''Mulher''");
	}
}