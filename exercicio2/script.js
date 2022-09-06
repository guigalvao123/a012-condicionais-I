let idade = confirm("Voce e maior de idade?")
let terminouEnsinoMedio = confirm ("Voce terminou o ensino medio?")
let isCursandoOutraFaculdade = confirm ("Voce esta cursando alguma faculdade?")

if(idade === true){
    console.log("Voce e maior de idade.")
}else if(idade === false){
    console.log("Voce nao e maior de idade.")
}else{
    console.log("Valor indevido!")
}

if(terminouEnsinoMedio === true){
    console.log("Voce terminou o ensino medio.")
}else if(terminouEnsinoMedio === false){
    console.log("Voce nao terminou o ensino medio")
}else{
    console.log("Valor indevido!")
}

if(isCursandoOutraFaculdade === true){
    console.log("Voce esta cursando uma faculdade.")
}else if(isCursandoOutraFaculdade === false){
    console.log("Voce nao esta cursando uma faculdade.")
}else{
    console.log("Valor indevido!")
}