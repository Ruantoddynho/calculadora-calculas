let visor = document.getElementById('visor');
let valorSalvo = null;
let operadorSalvo = null;

let botaoNum = document.getElementsByClassName('numero');
for(let botao of botaoNum){
    botao.addEventListener('click', clicaNum);
}
function clicaNum(event){
    if(isNaN(visor.innerHTML) === true){
        visor.innerHTML = event.target.innerHTML;
    } else {
        visor.innerHTML = visor.innerHTML + event.target.innerHTML;
    }

}

let botaoC = document.getElementById('c');
botaoC.addEventListener("click", limpaVisor);
function limpaVisor(event){
    visor.innerHTML = "";
    valorSalvo = null;
}

let botaoOp = document.getElementsByClassName('operadores   ');
for(let botao of botaoOp){
    botao.addEventListener('click' , clicaOp);
} 
function clicaOp(event){
    if(isNaN(visor.innerHTML) === false){
        if(valorSalvo === null){
            valorSalvo = Number(visor.innerHTML);
        } else {
            let resultado = executaOp (valorSalvo, operadorSalvo, Number(visor.innerHTML))
            valorSalvo = resultado
        }
    }
    visor.innerHTML = event.target.innerHTML;
    operadorSalvo = event.target.innerHTML;
} 

let botaoIgual = document.getElementById('calcula');
botaoIgual.addEventListener('click' , calcResultado);

function calcResultado(event){
    if (valorSalvo != null && operadorSalvo != null && isNaN(visor.innerHTML) === false){
        let resultado = executaOp(valorSalvo, operadorSalvo, Number(visor.innerHTML));
        visor.innerHTML = resultado;
        valorSalvo = null;
        operadorSalvo = null;
    }
}

function executaOp(valor1, operador, valor2){
    if (operador === "+"){
         return valor1 + valor2;
    } else if (operador === "-"){
        return valor1 - valor2;
    } else if (operador === "X"){
        return valor1 * valor2;
    } else if (operador === "/"){
        return valor1 / valor2
    }
}