// JavaScript Document

function muda_altura(altura)
{
	document.getElementById("caixa_altura").value = altura;
}

function muda_peso(peso)
{
	document.getElementById("caixa_peso").value = peso;
}

function calcula_imc() {
	var peso = document.getElementById("caixa_peso").value;
	peso=parseFloat(peso);
	
	var altura = document.getElementById("caixa_altura").value;
	altura=parseFloat(altura);
	
	var imc= (peso/(altura*altura)).toFixed(4);
	document.getElementById("valor_imc").innerHTML = imc;
	avalia_imc(imc);
}