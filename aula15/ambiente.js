var num = [5, 8, 9, 3, 2]

console.log(`O vetor tem ${num.length} posições`)

console.log(`O primeiro valor do vetor é ${num[0]}`)

var pos = num.indexOf(8)
console.log(`O valor 8 está na posição ${pos}`)

var pos = num.indexOf(4)
if(pos == -1){
    console.log('Valor não encontrado')
} else {console.log(`O valor 4 está na posição ${pos}`)
}