// Ela deverá possuir atributos para nome, pontos de vida, de ataque e de defesa.
// Ela também deverá possuir um método para atacar, que tem como argumento o personagem alvo (outra instância de Character) e subtrai os pontos de vida desse alvo pela diferença entre os pontos de ataque do personagem atual e a defesa do alvo.

export class Character {
    constructor(nome, vida, ataque, defesa) {
        this.nome = nome
        this.vida = vida
        this.ataque = ataque
        this.defesa = defesa
    }

    atacker(pAlvo) {
        let danoReal
        if(pAlvo instanceof Warrior) {
            if(pAlvo.aPosicao = true) {
                danoReal = this.ataque - (pAlvo.defesa + pAlvo.escudo)
                pAlvo.vida -= danoReal
            } else {
                danoReal = this.ataque - pAlvo.defesa
                pAlvo.vida -= danoReal
            }
        } else {
            danoReal = this.ataque - pAlvo.defesa
            pAlvo.vida -= danoReal
        }
        
    }
}