
// Função calculadora
function calculadora(num1, num2, operador) {
    const resultado = document.querySelector("p");
    let calc;
    // Processamento
    if (operador === "+") {
        calc = (num1 + num2);
    } else if (operador === "-") {
        calc = (num1 - num2);
    } else if (operador === "*") {
        calc = (num1 * num2);
    } else if (operador === "/") {
        calc = (num1 / num2);
    } else {
        alert("Opa.. insira um operador válido entre (+, -, *, /)!");
    }
    resultado.innerText = `O Resultado é: ${calc}`;
}


document.getElementById("calcForm").addEventListener('submit', function(event){
    event.preventDefault();

    const num1User = parseFloat(document.getElementById("num1").value);
    const num2User = parseFloat(document.getElementById("num2").value);
    const operadorUser = document.getElementById("sinal").value;

    calculadora(num1User, num2User, operadorUser);
})
