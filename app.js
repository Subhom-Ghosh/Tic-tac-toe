let boxes = document.querySelectorAll(".box")
let resetbtn = document.querySelector("#reset")
let newbtn = document.querySelector("#new");
let msgcontainer = document.querySelector(".msgcontainer");
let msg = document.querySelector("#msg")
let turnO = true;

const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];
const resetgame=()=>{
    turnO = true;
    enableboxes();
    msgcontainer.classList.add("hide");
};


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
       if(turnO){
        box.innerText = "O";
        turnO = false;
       }else{
        box.innerText = "X"
        turnO = true;
       }
       box.disabled = true;

       checkWinner();
    })
})

const disableboxes = ()=>{
    for(let box of boxes){
    box.disabled =true;
}
};
const enableboxes = ()=>{
    for(let box of boxes){
    box.disabled =false;
    box.innerText = " ";
}
};
const showWinner = (Winner)=>{
    msg.innerText = `Congratulations ,winner is ${Winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
}
const checkWinner = () =>{
    for(let pattern of winpatterns){
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val !="" && pos2Val !="" && pos3Val!="") {
        if(pos1Val == pos2Val && pos2Val == pos3Val){
            showWinner(pos1Val);
            }
    }
}
};

newbtn.addEventListener("click",resetgame)
resetbtn.addEventListener("click",resetgame)