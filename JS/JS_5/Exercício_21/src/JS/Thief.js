// Ela deve herdar os atributos de Character
// mas deve sobrescrever o método de ataque para que o cálculo seja de duas vezes a diferença entre os pontos de ataque do personagem atual e a defesa do alvo.

import { Character } from "./Character.js"
import { Warrior } from "./Warrior.js"

export class Thief extends Character {
    constructor(nome, vida, ataque, defesa) {
        super(nome, vida, ataque, defesa)
    }
    atacker(pAlvo) {
        let danoReal
        if(pAlvo instanceof Warrior) {
            if(pAlvo.aPosicao = true) {
                danoReal = this.ataque - (pAlvo.defesa + pAlvo.escudo)
                pAlvo.vida -= danoReal * 2
                console.log(
                    `${this.nome} deu ${danoReal * 2} de dano.\n` +
                    `${pAlvo.nome} ficou com ${pAlvo.vida} de vida.`
                )
            } else {
                danoReal = this.ataque - pAlvo.defesa
                pAlvo.vida -= danoReal * 2
                console.log(
                    `${this.nome} deu ${danoReal * 2} de dano.\n` +
                    `${pAlvo.nome} ficou com ${pAlvo.vida} de vida.`
                )
            }
        } else {
            danoReal = this.ataque - pAlvo.defesa
            pAlvo.vida -= danoReal * 2
            console.log(
                `${this.nome} deu ${danoReal * 2} de dano.\n` +
                `${pAlvo.nome} ficou com ${pAlvo.vida} de vida.`
            )
        }
        
    }
}