import { calculate } from "./calculate.js"
const input = document.getElementById("input")
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

export const keydown = input.addEventListener("keydown", function (ev) {
    ev.preventDefault()
    if (allowedKeys.includes(ev.key)) {
      input.value += ev.key
      return
    }
    if (ev.key === "Backspace") {
      input.value = input.value.slice(0, -1)
    }
    if (ev.key === "Enter") {
      calculate()
    }
  })