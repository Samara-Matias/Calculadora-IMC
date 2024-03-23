const btnCalcular = document.querySelector("#calcular");

/**
 *  @description Esta função pega o peso fornecido pelo usuário no input
 *  @param Nenhum
 *  @returns Retora o peso que está no input ou zero (caso não seja possível transformar para float)
 */
const getPeso = () => parseFloat(document.getElementById("peso").value) || 0;

/**
 *  @description Esta função pega a altura, em metros, fornecida pelo usuário no input
 *  @param Nenhum
 *  @returns Retorna a altura que está no input ou zero (caso não seja possível transformar para float)
 */
const getAltura = () => parseFloat(document.querySelector("#altura").value) || 0;

/**
 *  @description Esta função calcula o IMC propriamente dito
 *  @param {float} peso
 *  @param {float} altura
 *  @returns Retorna o IMC
 */
function calcIMC (peso, altura){
    return (peso/(altura**2)).toFixed(2);
}

/**
 * 
 * @param {float} imc 
 * @returns Retorna uma string/texto com a classificação do IMC da pessoa
 */

function classificaIMC (imc){
    if (imc < 18.5) return "ABAIXO DO PESO";
    if (imc >= 18.5 && imc <= 24.9) return "NO PESO IDEAL";
    if (imc >= 25 && imc <= 29.9) return "ACIMA DO PESO";
    if (imc >= 30 && imc <= 34.9) return "COM OBESIDADE DE GRAU I";
    if (imc >= 35 && imc <= 40) return "COM OBESIDADE DE GRAU II";
    if (imc > 40) return "COM OBESIDADE DE GRAU III";
}

btnCalcular.addEventListener("click", (evento) => {
    evento.preventDefault();
    const ulDivRes = document.querySelector("#ulRes");
    console.log(ulDivRes);
    const peso = getPeso();
    const altura = getAltura();

    const IMC = calcIMC(peso, altura);

    const liRes = `<li>Seu IMC é de: ${IMC} </li> <li>Você está: ${classificaIMC(IMC)}</li>`;

    ulDivRes.innerHTML = liRes;
    console.log(ulDivRes);
});