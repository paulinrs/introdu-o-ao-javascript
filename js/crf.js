//Simular que conseguimos carregar de uma API
var crf = ['Gabriel Barbosa', 'De Arrascaeta', 'Felipe Luiz', 'Pedro', 'David Luiz']

function listaJogadores() {

    var ul = document.getElementById('fla')
    ul.innerHTML = ''

    crf.forEach(function (f) {

        var li = document.createElement('li')
        var text = document.createTextNode(f)
        li.appendChild(text)
        ul.appendChild(li)

    })

}