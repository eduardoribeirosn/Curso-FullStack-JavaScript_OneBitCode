// Essa classe também deve possuir um atributo para pontos de escudo e outro para posição, que poderá ser de ataque ou defesa.
// Ela também deve sobrescrever o método de ataque para que ele só aconteça se a posição atual for a de ataque.
// Por fim, ela deverá ter também um método para mudar a posição entre ataque e defesa.
// Enquanto estiver em posição de defesa, os pontos de escudo devem ser somados aos de defesa para fazer o cálculo do método de ataque.
// Ao trocar para a posição de ataque apenas os pontos de defesa devem ser considerados (comportamento normal).

import { Character } from "./Character.js";

export class Warrior extends Character {
    constructor(nome, vida, ataque, defesa, escudo, aPosicao) {
        super(nome, vida, ataque, defesa)
        this.escudo = escudo
        this.aPosicao = aPosicao
    }
    atacker(pAlvo) {
        let danoReal
        if(pAlvo instanceof Warrior) {
            if(pAlvo.aPosicao = true) {
                danoReal = this.ataque - (pAlvo.defesa + pAlvo.escudo)
                pAlvo.vida -= danoReal
                console.log(
                    `${this.nome} deu ${danoReal} de dano.\n` +
                    `${pAlvo.nome} ficou com ${pAlvo.vida} de vida.`
                )
            } else {
                danoReal = this.ataque - pAlvo.defesa
                pAlvo.vida -= danoReal
                console.log(
                    `${this.nome} deu ${danoReal} de dano.\n` +
                    `${pAlvo.nome} ficou com ${pAlvo.vida} de vida.`
                )
            }
        } else {
            danoReal = this.ataque - pAlvo.defesa
            pAlvo.vida -= danoReal
            console.log(
                `${this.nome} deu ${danoReal} de dano.\n` +
                `${pAlvo.nome} ficou com ${pAlvo.vida} de vida.`
            )
        }
        
    }
    togglePos() {
        if(this.aPosicao == true) {
            this.aPosicao = false
            console.log(
                `${this.nome} trocou para a posição de Defesa!`
            )
        } else {
            this.aPosicao = true
            console.log(
                `${this.nome} trocou para a posição de Ataque!`
            )
        }
    }
}