let nome, sobrenome, estudo, anoNascimento, anoAtual = 2024;

alert("Bem Vindo ao Cadastro de Recrutas!");

nome = prompt("Qual é seu primeiro nome?");
sobrenome = prompt("E qual seria o seu sobrenome?");
estudo = prompt("E qual campo você estuda?");
anoNascimento = prompt("E para finalizar, em que ano você nasceu?")

let idade = anoAtual - anoNascimento;

console.log(`Olá, ${nome} ${sobrenome}, então você tem ${idade} anos, e estuda na área de ${estudo}, certo?`)
alert(`Olá, ${nome} ${sobrenome}, então você tem ${idade} anos, e estuda na área de ${estudo}, certo?`);
