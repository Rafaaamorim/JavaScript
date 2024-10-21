var num = document.querySelector('input#fnum')
var lista = document.querySelector('select#flista')
var res = document.querySelector('div#res')
var valores = []

function numero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(numero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if(valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        var total = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = valores[0]
        for(var pos in valores) {
            soma += valores[pos]
            media = soma / total
            if(valores[pos] > maior) {
                maior = valores[pos]
            if(valores[pos] < menor) {
                menor = valores[pos]
            }
            }
        }
        res.innerHTML = ''
        res.innerHTML += `Ao todo, foram cadastrados ${total} números.`
        res.innerHTML += `<p>O maior número cadastrado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor número cadastrado foi ${menor}.</p>`
        res.innerHTML += `<p>A soma dos valores cadastrados é ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores cadastrados é ${media}.</p>`
    }
}



