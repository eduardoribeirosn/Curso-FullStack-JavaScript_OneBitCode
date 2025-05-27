const resultInput = document.getElementById("result")

const calculate = function calculate() {
    resultInput.value = "ERROR"
    resultInput.classList.add("error")
    const result = eval(input.value)
    resultInput.value = result
    resultInput.classList.remove("error")
  }

const equal = document.getElementById("equal").addEventListener("click", calculate)

export { equal, calculate, resultInput}