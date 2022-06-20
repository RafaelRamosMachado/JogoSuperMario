const mario = document.querySelector(".super-mario");
const pipe = document.querySelector(".pipe-game");

const jump = () => {
    mario.classList.add("jump-mario");

    setTimeout(() => {
        mario.classList.remove("jump-mario");
    }, 500);
};


let segundos = 0;
let minutos = 0;
function segundo(){
    segundos++;
    if(segundos==60){
        minutos++;
        segundos=0;
        document.getElementById("minutos").innerHTML=minutos
    }

    document.getElementById("segundos").innerHTML=segundos
}

setInterval(function(){ segundo() }, 1000)


const loopGame = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;
    
    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    mario.src = "./images/mario-game-over.png";
    mario.style.width = "75px";
    mario.style.marginLeft = "45px";

    restart.style.display = "block";


    clearInterval(loopGame)

    }
    
}, 10);

document.addEventListener("keydown", jump);

