let n1, n2, soma, sub, mult, div;

alert("Bem Vindo a Calculadora de 4 Operações!")

n1 = parseFloat(prompt("Para começar digite o primeiro número da operação: "))
n2 = parseFloat(prompt("Agora digite o segundo número da operação: "))

soma = n1 + n2;
sub = n1 - n2;
mult = n1 * n2;
div = n1 / n2;

alert(`Aqui estão os resultado:\nSoma = ${soma}\nSubtração = ${sub}\nMultiplicação = ${mult}\nDivisão = ${div}`)