const ComputerResult = document.querySelector(".result");

const state = document.querySelectorAll('.state');

const images = [
    {"id":"rock",
    "image":"./images/rock.jpg"
    },

    {"id":"paper",
    "image":"./images/paper.jpg"
    },

    {"id":"scissor",
    "image":"./images/scissor.jpg"
    }
];

function randomeImageSelect(){
    const randomNum = Math.floor(Math.random()* 3);
    const randomeId = images[randomNum].id;
    const randomeImage = images[randomNum].image;
    return({randomeId, randomeImage});
}

function setImageLink(element, link, id){
    element.src = link;
    element.id = id;
}

function compair(playerId, computerId){
    const winner = playerId === computerId? "draw"
    :playerId === "rock" && computerId === "scissor" ? "player Win"
    :playerId === "scissor" && computerId === "paper"? "player Win"
    :playerId === "paper" && computerId === "rock"? "player win"
    : "computer Win";
    return winner
}

function winCount(winner){
    const computerWinCount = document.querySelector(".computerWin");
    const playerWinCount = document.querySelector(".playerWin");
    let count = 0;
    count++

    winner === "computerWin" ?  playerWinCount.innerText += 1 : computerWinCount.innerText += 1
}

function gameResult(winner){
    let winnerSection = document.querySelector(".gameResult");
    let winnerName = document.querySelector(".gameResult h3");
    winnerName.innerText = winner;
    winnerSection.style.display = 'block';
}

function finalResults(winner){
    const finalResult = document.querySelector("#finalResult");
    finalResult.innerText = winner;
}


function checkInput(){
    const {randomeId, randomeImage} = randomeImageSelect();
    const resultImage = this.src
    const getId = this.id === 'paper'? "paper"
    :this.id === "rock"? "rock"
    :"scisoor";
    ComputerResult.id = getId;

    setImageLink(ComputerResult, randomeImage, randomeId);

    
    const winner = compair(this.id, ComputerResult.id);
    finalResults(winner)
    // setTimeout(() => {
    //     gameResult(winner)
    // }, 500);
    
    // winCount(winner);
    console.log(compair(this.id, ComputerResult.id));
    return ({getId,
        resultImage});
}


state.forEach(selectedImg => {
    selectedImg.addEventListener('click',checkInput)
})


function reload(){
    const restart = document.querySelector(".btn");
    restart.addEventListener('click', ()=> {location.reload()})
}
reload()

