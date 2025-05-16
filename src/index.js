/* **O Que deve ser utilizado**

 - Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões //

## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**" */

let herois = [
]
let cadastro = [
    ["Artur" , 10500],
    ["Cristovão" , 9350],
    ["Loki" , 8700],
    ["Apolo" , 7999],
    ["Nike" , 5400 ],
    ["Zeus" , 2350 ],
    ["Thor" , 1500 ],
    ["Hércules" , 500 ]
]
let classificacao = ["Ferro", "Bronze", "Prata", "Ouro", "Platina" , "Ascendente", "Imortal", "Radiante" ]
let contador =0

console.clear()
console.log(" === Fala Felipão!!! ===")
console.log(" ")
console.log(" Vou primeiro cadastrar meus Herois")

setTimeout(function() { 
    console.clear()
    for (let i=0; i<cadastro.length; i++){
        herois.unshift(cadastro[i])
        console.log("Cadastro realizado com sucesso do Heroi ==> " + cadastro[i])
    }
; }, 2000)

for (let w=4000; w<=11000 ; w=w+1000)
setTimeout(function() { 
    console.clear()
    console.log("Agora vou mostrar o " + classificacao[contador])
    console.log(" ")
    console.log("O Herói de nome *** " + herois[contador][0] + " *** está no nível de " + herois[contador][1])
    contador++
; }, w)

setTimeout(function() { 
    console.clear()
    console.log("Aquele abraço !!!!!!" )
    console.log("By CBS" )
 ;}, 12000)

