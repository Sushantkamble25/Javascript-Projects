const bodyE = document.querySelector('#container');

const carreer = ["Learner","FreeLancer","Student"];

let carrerIndex = 0;

let characterIndex = 0;

let Isdeleting = false;



function Update(){
characterIndex++
bodyE.innerHTML = `
    <h1>I am a <span>${carreer[carrerIndex].slice(0,characterIndex)}</span></h1>
`;

if (characterIndex === carreer[carrerIndex].length){
    carrerIndex++
    characterIndex = 0
    // Isdeleting = false
  }

setTimeout(Update, 400);
}
Update();

