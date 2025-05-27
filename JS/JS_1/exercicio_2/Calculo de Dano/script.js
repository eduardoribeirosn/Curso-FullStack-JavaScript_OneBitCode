let name_1, damage_1, name_2, life_2, defense_2, shield_2 = false, danoCausado;

alert("Bem Vindo ao Cálculo de Dano!")

name_1 = prompt("Para começar, digite o nome do primeiro player: ")
damage_1 = parseFloat(prompt("Agora digite o valor do ataque: "))

name_2 = prompt("Certo, agora vamos para o player 2, qual seria o nome dele? ")
life_2 = parseFloat(prompt("E a vida do segundo player? "))
defense_2 = parseFloat(prompt("E a defesa do segundo player? "))
shield_2 = confirm("E para finalizar, o segundo player tem escudo? ")

if (damage_1 > defense_2) {
    if (shield_2 == true) {
        danoCausado = (damage_1 - defense_2) / 2
        life_2 -= danoCausado
        if (life_2 < 0) {
            alert(`${name_1} deu ${damage_1} de dano,\n\n${name_2} Morreu!`)
        }   else {
            alert(`${name_1} deu ${damage_1} de dano,\n\n${name_2} ficou com ${life_2} de vida.`)
        }
    } else {
        danoCausado = damage_1 - defense_2
        life_2 -= danoCausado
        if (life_2 < 0) {
            alert(`${name_1} deu ${damage_1} de dano,\n\n${name_2} Morreu!`)
        }   else {
            alert(`${name_1} deu ${damage_1} de dano,\n\n${name_2} ficou com ${life_2} de vida.`)
        }
    }
} else {
    alert(`${name_1} deu ${damage_1},\n\nO ${name_2} aguentou o ataque sem danos!`)
}