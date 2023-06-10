let letters=document.querySelector(".letters");
let tryingwords=document.querySelector(".tryingwords");
let mistakes=document.querySelector(".hangman-photo");
let state;
let gameover=11;
let p=1;
let wins=0;

const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

const mainobj={
  Objective:["pensel","table","TV","led","book"],
  Names:["nour","jawad","husam","ali","mohammad","batol","husan","abir"],
  Company:["sony","macrosoft","kia","marsidis"]
}

let objectkeys=Object.keys(mainobj);
let randomfirst=objectkeys[Math.floor(Math.random() * objectkeys.length)]; 
let randomSecond=mainobj[randomfirst]
let theword=randomSecond[Math.floor(Math.random()* randomSecond.length)]
// let theword="TV";
document.querySelector(".contry").innerText=randomfirst;


function puttingL(){
  for(let i=0;i<alphabet.length;i++){
    let span=document.createElement("span");
    span.innerText=alphabet[i];
    letters.appendChild(span);
  }
  let allspan=document.querySelectorAll(".letters span");
    allspan.forEach((one)=>{
      one.addEventListener("click",function(){
        one.classList.add("dissable");
        checkiftrue(this.innerText);
      })
  })
}
puttingL()

function numbersfl(){
  for(let i=0;i<theword.length;i++){
    let span=document.createElement("span");
    span.innerText=theword[i].toUpperCase();
    tryingwords.appendChild(span);
  }
}
numbersfl()
let wordspan=document.querySelectorAll(".tryingwords span")

function checkiftrue(t){
  state=false;
  for(let i = 0;i<wordspan.length;i++){
    if(t == wordspan[i].innerText){
      wordspan[i].classList.add("active");
      state=true;
      wins++;
    }
  }
  if(state !== true){
    p++;
    addamistake();
    if((p - 1) >= gameover){
      letters.classList.add("gameover");
      document.querySelector(".ir").classList.remove("first");
      document.querySelector(".ir p").innerText="You Lose The Game";
      document.querySelector(".playagain").innerText="Play Again";
      document.querySelector(".ir p").classList.add("lose");
      document.querySelector(".playagain").classList.add("lose");
      document.querySelector(".ir p").classList.remove("win");
      document.querySelector(".playagain").classList.remove("win");
      document.querySelector(".playagain").addEventListener("click",function(){
        location.reload()
      })
      }
    }

    if(wins == wordspan.length){
        letters.classList.add("gameover");
        document.querySelector(".ir").classList.remove("first");
      document.querySelector(".ir p").innerText="You Win The Game";
      document.querySelector(".ir p").classList.add("win");
      document.querySelector(".playagain").innerText="Play Again";
        document.querySelector(".playagain").classList.add("win");
        document.querySelector(".ir p").classList.remove("lose");
        document.querySelector(".playagain").classList.remove("lose");
        document.querySelector(".playagain").addEventListener("click",function(){
          location.reload()
        })
    }
  }

function addamistake(){
  mistakes.innerHTML='';
  for(let i=1;i<p;i++){
    let div=document.createElement("div");
    div.classList.add(`mistakes-${i}`);
    mistakes.appendChild(div);
  }
}