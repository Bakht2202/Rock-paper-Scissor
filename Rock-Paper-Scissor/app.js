const gameSection = document.getElementById("game-section");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const computerScore = document.getElementById("computer-score");
const playerScore = document.getElementById("player-score");
const optionSection = document.getElementById("Shoose-option-section");
var tostart = false;
var secondSubject;

rock.onclick = function(){
    manageSize();
    randomSubject();
    var newRock = rock.cloneNode(true);
    document.getElementById("game-section").appendChild(newRock);
    newRock.classList.add("second-subject");
    importResults()
}
paper.onclick = function(){
    manageSize(); 
    randomSubject();
    var newPaper = paper.cloneNode(true);
    document.getElementById("game-section").appendChild(newPaper);
    newPaper.classList.add("second-subject");
    importResults()
}
scissor.onclick = function(){
    manageSize();
    randomSubject();
    var newScissor =scissor.cloneNode(true);
    document.getElementById("game-section").appendChild(newScissor);
    newScissor.classList.add("second-subject");
    importResults()
}

function importResults(){
    var firstObject = document.getElementsByClassName("first-subject")[0];
    var secondObject = document.getElementsByClassName("second-subject")[0];
    if(firstObject.id == secondObject.id){

    }
    else if(firstObject.id == "rock" && secondObject.id == "scissor"){
        computerScore.innerHTML++;
    }
    else if(firstObject.id == "scissor" && secondObject.id == "paper"){
        computerScore.innerHTML++;
    }
    else if(firstObject.id == "paper" && secondObject.id == "rock"){
        computerScore.innerHTML++;
    }
    else if(secondObject.id == "rock" && firstObject.id == "scissor"){
        playerScore.innerHTML++;
    }
    else if(secondObject.id == "paper" && firstObject.id == "rock"){
        playerScore.innerHTML++;
    }
    else if(secondObject.id == "scissor" && firstObject.id == "paper"){
        playerScore.innerHTML++;
    }
}

function randomSubject(){
    if(tostart == true){
        gameSection.removeChild(gameSection.firstElementChild);
        gameSection.removeChild(gameSection.lastElementChild);
        var randomElement;
        var randomNumber = Math.floor(Math.random() * Math.floor(3));
        if(randomNumber == 0){
            randomElement = rock;
        }
        else if(randomNumber == 1){
            randomElement = paper;
        }
        else{
            randomElement = scissor;
        }
        var randomElement = randomElement.cloneNode(true);
        
        document.getElementById("game-section").appendChild(randomElement);
        randomElement.classList.add("first-subject");       
    }
    else if(tostart == false){
        var randomElement;
        var randomNumber = Math.floor(Math.random() * Math.floor(3));
        if(randomNumber == 0){
            randomElement = rock;
        }
        else if(randomNumber == 1){
            randomElement = paper;
        }
        else{
            randomElement = scissor;
        }
        var randomElement = randomElement.cloneNode(true);
         
        document.getElementById("game-section").appendChild(randomElement);
        randomElement.classList.add("first-subject");
        tostart = true;
    }
}

function manageSize() {  
    gameSection.style.animationName = "downLine";
    gameSection.style.animationDuration = "0.5s";
}
