let ntabu, tabuada = "";

ntabu = parseFloat(prompt("Qual tabuada será? "))

for (let i = 0; i <= 20; i++) {
    tabuada += `\n${ntabu} x ${i} = ${ntabu*i}`
}

alert(`A tabuada ficou:\n${tabuada}`)