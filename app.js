let boxes=document.querySelectorAll(".box");
let resetBtn = document.querySelector("#Reset");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-con");
let msg = document.querySelector("#msg");

let turnO=true;

const winPatterns=[
    [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5][6,7,8],
];


const resetGame =()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}



boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            box.style.color="green";
            turnO=false;
        }else{
            box.innerText="X";
            box.style.color="Black";

            turnO=true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const disableBoxes =()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes =()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}


const showWinner=(winner)=>{
    msg.innerText=`Congrulations, Winner is ${winner} `
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner=()=>{
    for(let x of winPatterns){
        let pos1Val = boxes[x[0]].innerText;
        let pos2Val = boxes[x[1]].innerText;
        let pos3Val = boxes[x[2]].innerText;

        if(pos1Val !="" && pos2Val !="" && pos3Val!=""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("winner",pos1Val);
                showWinner(pos1Val);
            }
        }
    }

}
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
