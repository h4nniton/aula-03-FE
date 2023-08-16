'use strict'

const botaoSomar = document.getElementById('somar')
const botaoIdentificar = document.getElementById('identificar')
const botaoMedia = document.getElementById('media')


function somar () {

    const numero1 = parseInt(document.getElementById('numero1').value)
    const numero2 = parseInt(document.getElementById('numero2').value)
    const resultado = document.getElementById('resultado')

    const total = numero1 + numero2

    resultado.textContent = total

}

function identificar () {

    const numero = parseInt(document.getElementById('numero-item2').value)
    const resultado = document.getElementById('resultado-item2')

    if (numero > 0){
        resultado.textContent = 'POSITIVO'
    } else if (numero < 0){
        resultado.textContent = 'NEGATIVO'
    } else {
        resultado.textContent = 'ZERO'
    }

}

function media () {

    const nota1 = parseInt(document.getElementById('nota1')).value
    const nota2 = parseInt(document.getElementById('nota2')).value
    const nota3 = parseInt(document.getElementById('nota3')).value
    const nota4 = parseInt(document.getElementById('nota4')).value
    const resultado = document.getElementById('resultado-item3')

    const media = nota1 + nota2 + nota3 + nota4 / 4

    resultado.textContent = media



}


botaoSomar.addEventListener('click', somar)
botaoIdentificar.addEventListener('click', identificar)
botaoMedia.addEventListener('click', media)

/** Fazendo exercício D !!! */