const usuarios = [

    {

        nome: "Carlos",
        tecnologias: ["HTML", "CSS"]

    },

    {

        nome: "Jasmine",
        tecnologias: ["JavaScript", "CSS"]

    },

    {

        nome: "Tuane",
        tecnologias: ["HTML", "Node.js"]

    }
]


for (let i = 0; i < usuarios.length; i++) {

    console.log(` ${usuarios[i].nome} trabala com  ${usuarios[i].tecnologias.join(', ')}`)

}

//Busca Por tecnologias

function checaSeUsaCSS(usuarios) {

    for (let i = 0; i < usuarios.tecnologias.length; i++) {


        if (usuarios.tecnologias[i] == 'CSS') {

            return true

        }

    }

    return false

}

for (let i = 0; i < usuarios.length; i++) {

    const usuarioTrabalhaComCSS = checaSeUsaCSS(usuarios[i])

    if (usuarioTrabalhaComCSS) {

        console.log(`O Usuario ${usuarios[i].nome} trabalha com CSS`)

    }

}