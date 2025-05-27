let palavra, apalavra = "";

palavra = prompt("Qual a palavra? ")

for (let i = palavra.length; i >= 1; i--) {
    apalavra += palavra[i - 1]
}

if (palavra === apalavra) {
    alert("A palavra é um palíndromo!\n"  +
        `\n- ${palavra}\n` +
        `\n- ${apalavra}`)
} else {
    alert(`Não é um palíndromo:\n` +
        `\n- ${palavra}\n` +
        `\n- ${apalavra}`
    )
}