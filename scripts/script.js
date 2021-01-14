// Regra de negócios
// Carne - 400 gr por pessoas + de 6 horas 650 gr
// Cerveja - 1200 ml por pessoa + de 6 horas 2000 ml
// Refrigerante/agua - 1000 ml por pessoa + 6 horas 1500 ml
// Crianças valem por 0.5 adulto

let inputAdultos = document.getElementById('adultos')
let inputCriancas = document.getElementById('criancas')
let inputDuracao = document.getElementById('duracao')

let resultado = document.getElementById('resultado')

function calcular() {
    console.log('Calculando...')

    let adultos = inputAdultos.value
    let criancas = inputCriancas.value
    let duracao = inputDuracao.value

    let qtdTotalCarne = carnePorPessoa(duracao) * adultos + (carnePorPessoa(duracao) / 2 * criancas)
    let qtdTotalBebidas = bebidasPorPessoa(duracao) * adultos + (bebidasPorPessoa(duracao) / 2 * criancas)
    let qtdTotalCerveja = cervejaPorPessoa(duracao) * adultos

    resultado.innerHTML = `<p> ${(qtdTotalCarne)/1000} Kg de Carne </p>`
    resultado.innerHTML += `<p>${Math.ceil((qtdTotalBebidas)/2000)} Refrigerantes </p>`
    resultado.innerHTML += `<p>${Math.ceil((qtdTotalCerveja)/365)} Latas de Cerveja</p>`

}

function carnePorPessoa() {
    if (duracao >= 6) {
        return 650
    }
    return 400
}

function cervejaPorPessoa() {
    if (duracao >= 6) {
        return 2000
    }
    return 1200
}

function bebidasPorPessoa() {
    if (duracao >= 6) {
        return 1500
    }
    return 1000
}