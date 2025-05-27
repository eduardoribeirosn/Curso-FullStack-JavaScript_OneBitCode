export default async function toggleMenu(elemento = document.querySelector('#menu')) {
    console.log(elemento)
    if (elemento.classList.contains('dflex')) {
        elemento.classList.remove('dflex')
        elemento.classList.add('dnone')
    } else {
        elemento.classList.remove('dnone')
        elemento.classList.add('dflex')
    }

    /* Outro Método

    elemento.classList.toggle('dnone')
    elemento.classList.toggle('dflex')

    */
}