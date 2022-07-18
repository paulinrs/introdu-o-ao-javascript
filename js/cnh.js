function verificarIdade() {

    var nome = document.querySelector('input[name=nome]')
    var idade = document.querySelector('input[name=idade]')

    if (idade.value.length == 0) {
        alert('Idade é um campo obrigatório.')
        return
    }

    var idadeNum = parseInt(idade.value)
    
    if (idadeNum >=18) {
        alert('Permitido tirar CNH.')
    } else if (idadeNum > 15) {
        alert('Menor de Idade, infelizmente não pode tirar CNH.')
    } else {
        alert('Infelizmente não pode tirar CNH, vai ter que esperar um pouco.')
    }

}

