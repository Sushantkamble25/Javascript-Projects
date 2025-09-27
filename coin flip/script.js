const coin = document.querySelector("#coin");

const button = document.querySelector("#flip");

const statusbar = document.querySelector('#Status');

const heads = document.querySelector("#headsCount");

const Tails = document.querySelector("#TailCount");


let headsCount = 0;
let TailsCount = 0;

function processR(result){
    if(result === 'heads'){
        headsCount++;
        heads.innerHTML = headsCount;
    }else{
        TailsCount++;
        Tails.innerHTML = TailsCount;
    }

    statusbar.innerText = result.toUpperCase();
}

function flipCoin(){

    const random = Math.random();

    const result = random < 0.5 ? 'heads' : 'tails';

    setTimeout(()=>{
        coin.setAttribute('class','animate-' + result)

        setTimeout(()=>{
            processR(result);
        },2900)

    },100);
    
}

button.addEventListener("click",flipCoin);

