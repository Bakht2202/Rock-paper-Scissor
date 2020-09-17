const form = document.getElementById("form");
const gameSection = document.getElementById("game-section");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const computerScore = document.getElementById("computer-score");
const playerScore = document.getElementById("player-score");
const optionSection = document.getElementById("Shoose-option-section");
const addComputer = document.getElementById("computer-add");
const addPlayer = document.getElementById("player-add");
var tostart = false;
var secondSubject;
var plusComputerScore = 0;
var plusPlayerScore = 0;

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
        whenDraw();
    }
    else if(firstObject.id == "rock" && secondObject.id == "scissor"){
        computerScore.innerHTML++;
        addScoreToComputer();
        whenLose();
    }
    else if(firstObject.id == "scissor" && secondObject.id == "paper"){
        computerScore.innerHTML++;
        addScoreToComputer();
        whenLose();
    }
    else if(firstObject.id == "paper" && secondObject.id == "rock"){
        computerScore.innerHTML++;
        addScoreToComputer();
        whenLose();
    }
    else if(secondObject.id == "rock" && firstObject.id == "scissor"){
        playerScore.innerHTML++;
        addScoreToPlayer();
        whenWin();
    }
    else if(secondObject.id == "paper" && firstObject.id == "rock"){
        playerScore.innerHTML++;
        addScoreToPlayer();
        whenWin();
    }
    else if(secondObject.id == "scissor" && firstObject.id == "paper"){
        playerScore.innerHTML++;
        addScoreToPlayer();
        whenWin();
    }
}

function randomSubject(){
    addComputer.innerHTML = null;
    addPlayer.innerHTML = null;
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
function addScoreToComputer(){
    addComputer.classList.add("add-to-plus-score");
    plusPlayerScore = 0;
    plusComputerScore++;
    addComputer.innerHTML = "+" + plusComputerScore;
    whichToShow = true;
}
function addScoreToPlayer(){
    addPlayer.classList.add("add-to-plus-score");
    plusComputerScore = 0;
    plusPlayerScore++;
    addPlayer.innerHTML = "+" + plusPlayerScore;
    whichToShow = false;
}
function whenWin(){
    form.style.backgroundColor = "#deffde";
}
function whenLose(){
    form.style.backgroundColor = "#f9dbdb";
}
function whenDraw(){
    form.style.backgroundColor = "white";
    if(plusComputerScore != 0){
        addComputer.innerHTML = "+" + plusComputerScore;
    }
    else if(plusPlayerScore != 0){
        addPlayer.innerHTML = "+" + plusPlayerScore;
    }
}