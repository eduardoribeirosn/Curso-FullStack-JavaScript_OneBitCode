import { Mage } from "./JS/Mage.js";
import { Thief } from "./JS/Thief.js";
import { Warrior } from "./JS/Warrior.js";

let player_1 = new Thief("Eduardo", 2000, 50, 10)
let player_2 = new Warrior("Matheus", 2500, 40, 10, 5, false)
let player_3 = new Mage("Lucas", 2000, 10, 10, 35)

player_1.atacker(player_2)
player_2.togglePos()
player_2.atacker(player_1)
player_2.togglePos()
player_1.atacker(player_2)
player_3.moreLife(player_2)

console.log("\n\n\n")

console.log(player_1, "\n", player_2, "\n", player_3)