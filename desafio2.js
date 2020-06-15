//Construção e Impressão de objetos

const empresa = {

    nome: "RocketSeat",
    cor: "Roxo",
    foco: "Programacao",
    endereco: {

        rua: "Rua Guilerme Gembala",
        numero: 260 

    }

}


console.log(`A empresa ${empresa.nome} está localizada  em ${empresa.endereco.rua}, ${empresa.endereco.numero}`)


//Vetores e Objetos 

const programador = {
    nome: "Diego",
    idade: 23,
    tecnologias:[


        {
            nome: "C++",
            especialidade: "Desktop"
        },

        {
            nome: "Python",
            especialidade: "Data science"
        },

        {
            nome: "JavaScript",
            especialidade: "web/mobile"
        }

    ] 

}


console.log(`O usuario ${programador.nome}, tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} com especialiadade em ${programador.tecnologias[0].especialidade} `)