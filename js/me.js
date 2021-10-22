const audio = document.querySelector('audio')
const title = document.querySelector('header>h1')
document.body.onload = ()=>{
    setInitState()
}

function setInitState(){
    audio.play()
    let vis = true;
    let tiempo = 200;
    setInterval(() => {
        title.style.visibility = vis ? 'visible' : 'hidden'
        vis = !vis;
    }, tiempo);


}