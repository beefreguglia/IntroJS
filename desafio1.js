//Desafio 1

//IMC

const nome1 = 'Bernardo'
const peso = 84
const altura = 1.73
const sexo1 = "M"

imc = peso / (altura * altura) 

if(imc >= 30){

    console.log(`${nome1} você está acima do peso`)

}else{

    console.log(`${nome1} você não está acima do peso`)

}


//Cálculo aposentadoria


const nome2 = 'Diogo'
const idade = 80
const contribuicao = 35
const sexo2 = "M"

if(sexo2 == "M"){

    if( contribuicao >= 35 && (idade + contribuicao) >= 95){

        console.log(`${nome2} você pode se aposentar !`)

    }else{

        console.log(`${nome2} você não pode se aposentar !`)

    }

}else{

    if( contribuicao >= 30 && (idade + contribuicao) >= 85){

        console.log(`${nome2} você pode se aposentar !`)

    }else{

        console.log(`${nome2} você não pode se aposentar !`)

    }

}