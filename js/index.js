const audio = document.querySelector('audio')
const conteTitle = document.querySelector("#conteTitle");
const btnRandom = document.querySelector("#conteTxtRandom>input[type=button]");
const txtsRandom = ["Si", "No", "Talvez", "Quien sabe", "No tengo idea", "Puede ser", "Posiblemente", "Para nada"]

let cambio;

setInitState();

function setInitState(){
    let i = 0;
    cambio = setInterval(() => {
        i = (i===(txtsRandom.length-1)) ? 0 : i+1;
        btnRandom.value = txtsRandom[i];
    }, 100);
}

btnRandom.onclick = () => {
    clearInterval(cambio)
    setTimeout(() => {
        audio.play();
        alert("Ya lo veremos");
        window.location.href = "./html/questions.html";
    }, 500);
}