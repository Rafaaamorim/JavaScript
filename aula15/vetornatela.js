var valor = [8, 1, 7, 4, 2 ,9]
/* valor.sort() para colocar os valores em ordem crescente*/

for(var pos = 0; pos < valor.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valor[pos]}`)
}

/* ou então de uma forma mais simplificada: */

for(var pos in valor) {
    console.log(`A posição ${pos} tem o valor ${valor[pos]}`)
}