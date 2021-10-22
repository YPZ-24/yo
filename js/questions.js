const questions = [
    {
        question: "¿Quiénes son sus ejemplos a seguir en series?",
        ansA: "El Doctor House y Sheldon Cooper",
        ansB: "Sheldon Copper y El Doctor House",
        ansC: "Malcom el de en medio y el Doctor House",
        true: 0
    },
    {
        question: "¿Dondé planea vivir cuando sea grande?",
        ansA: "En una cabaña",
        ansB: "En una granja",
        ansC: "En la ciudad",
        true: 1
    },
    {
        question: "¿Empresa privada o emprender?",
        ansA: "Ambas",
        ansB: "Privada",
        ansC: "Emprender",
        true: 2
    },
    {
        question: "¿Por qué estudio programación?",
        ansA: "Siempre fue su sueño",
        ansB: "Lo descubrio y le encantó",
        ansC: "No hubo de otra",
        true: 1
    },
    {
        question: "¿Cuál es su mayor miedo?",
        ansA: "A un día olvidar todo lo que a aprendido",
        ansB: "A perder su maravilloso sentido del humor",
        ansC: "A no tener el tiempo suficiente para volver realidad sus sueños",
        true: 2
    },
    {
        question: "¿Por qué no le gusta ir a ver piramides/circos/obras?",
        ansA: "No lo quiere ver, lo quiere vivir",
        ansB: "Le parece aburrido y tedioso",
        ansC: "Si le gusta",
        true: 0
    },
    {
        question: "¿Qué es lo que más la apasiona?",
        ansA: "Programar",
        ansB: "Aprender",
        ansC: "Vivir",
        true: 2
    },
    {
        question: "Uno de estos no es un sueño de Aylin:",
        ansA: "Tener multiples empresas",
        ansB: "Que el mundo la recuerde",
        ansC: "Casarse y tener hijos",
        true: 2
    },
    {
        question: "¿Qué cantantes no escucha?",
        ansA: "Amy Winehouse",
        ansB: "Charles Ans",
        ansC: "The Beatles",
        true: 2
    },
    {
        question: "2 cosas que aprecia más en una persona:",
        ansA: "Pasión y humildad",
        ansB: "Honestidad y respeto",
        ansC: "Solidaridad y Etica",
        true: 0
    },
]

const question = document.querySelector("#question");
const ansA = document.querySelector('#ansA')
const ansB = document.querySelector('#ansB')
const ansC = document.querySelector('#ansC')
const audio = document.querySelector('audio')

let conta=0;
setInitState()

function setInitState(){
    audio.play()
    showQuestion(questions[conta])
}

ansA.onclick = () => checkAnswer(0)
ansB.onclick = () => checkAnswer(1)
ansC.onclick = () => checkAnswer(2)

function checkAnswer(value){
    console.log(questions[conta].true, value)
    const msj = questions[conta].true == value ? 'Correcto' : 'Incorrecto'
    //Next
    conta++;
    if(conta===questions.length){
        alert("Bien, te contaré")
        window.location.href = "./me.html";
    }else{
        alert(msj);
        showQuestion(questions[conta]);
    }
}

async function showQuestion({question: questionTxt, ansA: ansATxt, ansB: ansBTxt, ansC: ansCTxt}){
    ansA.textContent = ansATxt
    ansB.textContent = ansBTxt
    ansC.textContent = ansCTxt

    let txt = '';
    for(let j=0; j<questionTxt.length; j++){
        await new Promise((resolve, reject)=>{
            setTimeout(() => {
                txt = txt + questionTxt[j];
                question.textContent = txt;
                resolve()
            }, 80)
        });
    }
}

