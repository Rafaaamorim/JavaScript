function Tabuada() {
    var numero = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
    if (numero.value.length == 0){
        window.alert('ERRO! Por favor, digite um número')
    } else {
       var n = Number(numero.value)
    } 
    tab.innerHTML = ''
    for (var c = 1; c <=10; c++) {
        var item = document.createElement('option')
        item.text = `${n} x ${c} = ${n*c}`
        item.value = `tab${c}`
        tab.appendChild(item)
    }
    
}
