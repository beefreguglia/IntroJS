const classA = [
    
    {

        name:"Bernardo",
        grade: 9.8

    },

    {

        name:"Douglas",
        grade: 1

    },

    {

        name:"Bethy",
        grade: 1.6

    },

    {

        name:"Ingrid",
        grade: 1.5

    }
]

const classB = [
    
    {

        name:"Leandro",
        grade: 8.5

    },

    {

        name:"Aline",
        grade: 1.7

    },

    {

        name:"Lucas",
        grade: 2.2

    },

    {

        name:"Luan",
        grade: 4.5

    }
]

function calculateAverage(students){

    let sum = 0

    for(student of students){

        sum = sum + student.grade

    }

    const average = sum / students.length
    return average

}

const average1 = 0
const average2 = 0
 
function sendeMessage(average, turma){

    if(average > 5){

        console.log(`A média da turma ${turma} foi de ${average}. Parabéns`)

    }else{

        console.log(`A Media da turma ${turma} é menor que 5`)

    }

}

function markAsFlunked(student){

    student.flunked = false

    if(student.grade < 5){

        student.flunked = true

    }

}

function sendMessageFlunked(student){

    if(student.flunked){

        console.log(`O student ${student.name} está Reprovado`)

    }

}

function studentsReprovados(students){

    for (let student of students){

        markAsFlunked(student)
        sendMessageFlunked(student)

    }

}

sendeMessage(average1, 'classA')
sendeMessage(average2, 'classB')
studentsReprovados(classA)
studentsReprovados(classB)