let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
// accessing paragraph element in which msg will be displayed
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score")

// Generating Computer choices
const genCompchoice = () =>{
    const options = ["rock" , "paper" , "scissor"];
    const randind = Math.floor(Math.random() * 3);
    return options[randind];
}
//Draw Game condition
const drawgame = () =>{
    console.log("Game is draw");
    msg.innerText = "Game Drawn";
    msg.style.backgroundColor = "black";
}
// Display the winner
const showwinner =(userwin , userchoice , compchoice) =>{
    if(userwin){
        console.log("You win");
        msg.innerText = `You win , your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        console.log("You lose");
        msg.innerText = `You lost ${compchoice} beats your ${userchoice}` ;
        msg.style.backgroundColor = "red";
    }
} 
const displayscore = (userwin) =>{
    if(userwin){
        userscore++;
        userscorepara.innerText = userscore;
        console.log("Userscore = " , userscore);
        console.log("Compscore = " , compscore);
    }
    else{
        compscore++;
        compscorepara.innerText = compscore;
        console.log("Userscore = " , userscore);
        console.log("Compscore = " , compscore);
        
    }
}
const Playgame = (userchoice) => {
    console.log("User choice = " , userchoice);
    const compchoice = genCompchoice();
    console.log("Comp choice = " , compchoice);
    // Win and Lose Conditions
    if(userchoice === compchoice){
        drawgame();
    }
    else{
        let userwin = true ;
        if(userchoice === "rock"){
                userwin = compchoice === "paper" ? false : true ;
        }
        else if(userchoice === "paper"){
            userwin = compchoice === "scissor" ? false : true ;
        }
        else{
            userwin = compchoice === "rock" ? false : true;
        }
        showwinner(userwin , userchoice , compchoice);
        displayscore(userwin);
        
    }
    

}

choices.forEach((choice) =>{
    // console.log(choice);
    choice.addEventListener("click" , () =>{
        const userchoice = choice.getAttribute("id")

        // console.log("Choice was clicked" , userchoice);
        Playgame(userchoice);
    });

});