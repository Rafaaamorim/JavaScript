function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('ERRO! Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 12) {
                img.setAttribute('src', 'foto-bebe.png')
            } else if (idade < 18) {
                img.setAttribute('src', 'foto-adolescente.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'foto-adulto.png')
            } else {
                img.setAttribute('src', 'foto-idoso.png')
            }
        } else if (fsex [1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 12) {
                img.setAttribute('src', 'foto-bebe.png')
            } else if (idade < 18) {
                img.setAttribute('src', 'foto-adolescente.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'foto-adulto.png')
            } else {
                img.setAttribute('src', 'foto-idoso.png')
            }
        }
        res.style.textAlih = 'center'
        res.innerHTML = `<p>Detectamos ${gênero} com ${idade} anos.</p>`
        res.appendChild(img)
    }
}
