/*1- Criar função
2- Ligar a função no botão correspondente no html
3- capturar o texto escrito no html
4- desenvolver a logica da criptografia
5- retornar na tela o resultado do txt criptografado*/

var textoInicial = document.querySelector("#textoUsuario");
var textoFinal = document.querySelector("#mensagemCodificada");


//função que irá gerar a criptografia:

function criptografaMensagem () {
    var textoInserido = textoInicial.value;

    var criptografia = textoInserido.replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g,"ai")
    .replace(/o/g, "ober")
    .replace(/u/g,"ufat");

    textoFinal.value = criptografia;
}

//função que irá realizar a descriptografia:
function descriptografaMensagem() {
    var textoGerado = textoInicial.value;

    var descriptografia = textoGerado.replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g,"u");

    textoFinal.value = descriptografia;
}

function copiarTexto() {
	var botaoCopia = document.getElementById('botaoCopia');
	document.execCommand('copy');
	alert("O texto selecionado foi copiado.");
}





