// Uma classe Mage que representa outro tipo de personagem e também herda de Character.
// No entanto, essa classe também deve ter um atributo para pontos de magia.
// Além disso, ela também deve sobrescrever o método de ataque para que o cálculo utilize os pontos de ataque somados aos pontos de magia. 

// A classe Mage também deverá ter um outro método exclusivo que servirá para aumentar os pontos de vida de um personagem alvo (passado como argumento do método) em um valor de duas vezes os pontos de magia do personagem atual.

import { Character } from "./Character.js"
import { Warrior } from "./Warrior.js"

export class Mage extends Character {
    constructor(nome, vida, ataque, defesa, magia) {
        super(nome, vida, ataque, defesa)
        this.magia = magia
    }
    atacker(pAlvo) {
        let danoReal
        if(pAlvo instanceof Warrior) {
            if(pAlvo.aPosicao = true) {
                danoReal = (this.ataque + this.magia) - (pAlvo.defesa + pAlvo.escudo)
                pAlvo.vida -= danoReal
                console.log(
                    `${this.nome} deu ${danoReal} de dano.\n` +
                    `${pAlvo.nome} ficou com ${pAlvo.vida} de vida.`
                )
            } else {
                danoReal = (this.ataque + this.magia) - pAlvo.defesa
                pAlvo.vida -= danoReal
                console.log(
                    `${this.nome} deu ${danoReal} de dano.\n` +
                    `${pAlvo.nome} ficou com ${pAlvo.vida} de vida.`
                )
            }
        } else {
            danoReal = (this.ataque + this.magia) - pAlvo.defesa
            pAlvo.vida -= danoReal
            console.log(
                `${this.nome} deu ${danoReal} de dano.\n` +
                `${pAlvo.nome} ficou com ${pAlvo.vida} de vida.`
            )
        }
        
    }
    moreLife(pAlvo) {
        pAlvo.vida += this.magia * 2
        console.log(
            `${this.nome} aumentou a vida de ${pAlvo.nome}\n` +
            `em ${this.magia * 2} e ${pAlvo.nome} ficou com ${pAlvo.vida} de vida.`
        )
    }
}