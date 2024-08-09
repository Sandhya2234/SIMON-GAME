let gameSeq=[];
let userSeq=[];

let buttons=["yellow","red","green","purple"];

let started=false;
let level=0;
let h2=document.querySelector("h2");
let start=document.querySelector("#start");
let highscore=0;

start.addEventListener("click",function(){
   if(started==false){
    console.log("game started");
    started=true;

    levelUp();
   }
});

function levelUp(){
    start.classList.add("remove");
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randIndx=Math.floor(Math.random()*4);
    let color=buttons[randIndx];
    let btn=document.querySelector(`.${color}`)
    gameSeq.push(color);
    console.log(gameSeq);
    btnFlash(btn);
}

function checkAns(idx){

    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
           setTimeout(levelUp, 200);
        }

    }else {
        if(started){
            h2.innerHTML=`Game over! Your score was <b>${level-1}`;
        start.classList.remove("remove");
        let body=document.querySelector("body");
        body.style.backgroundColor="red";
        setTimeout(()=>{
            body.style.backgroundColor="white";
        },150);
        reset();
        }
       
    }
}
    function btnFlash(btn){
    btn.classList.add("flash");

    setTimeout(function(){
        btn.classList.remove("flash");
    },250)
}

let AllBtns=document.querySelectorAll(".button");
for(btn of AllBtns){
    btn.addEventListener("click",btnPress);
}

function btnPress(){
    // console.log(this);
    let btn=this;
    btnFlash(btn);
    let userColor=btn.getAttribute("id");
    
    userSeq.push(userColor);
    // console.log(userSeq);

    checkAns(userSeq.length-1);
  
}

function reset(){
    if(level-1>highscore){
        highscore=level-1;
    }
    console.log(highscore);
    level=0;
    started=false;
    gameSeq=[];
    userSeq=[];
}
