console.log("hello! this is a game of Rock, Paper, Scissors")

const choices=["rock","paper","scissors"]
function playerChoice(){
    const playerSelection=prompt("Rock, Paper, or Scissors?").toLocaleLowerCase()
    return playerSelection
}
function getComputerChoice(){
    const computerSelection = choices[Math.floor(Math.random()*choices.length)]
    console.log(computerSelection)
    return computerSelection
}
function playRound(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        console.log("round tied!")
        return "tie"
    }else if(playerSelection == "rock" && computerSelection == "scissors"){
        console.log("player wins the round")
        return "player"
    }else if (playerSelection == "scissors" && computerSelection == "paper"){
        console.log("player wins the round")
        return "player"
    }else if(playerSelection=="paper"&&computerSelection=="rock"){
        console.log("player wins the round")
        return "player"
    }

    console.log("Computer wins the round")
    return "computer"
}

function game(){
    var playerWins = 0
    var computerWins = 0
    for(i = 0; i < 5; i++){
        var result = playRound (playerChoice(), getComputerChoice())
        if (result == "player"){
            playerWins++
        } else if (result == "computer"){
            computerWins++
        }

        if (playerWins == 3){
            return "player wins the game!"
        } else if (computerWins == 3){
            return "computer wins the game!"
        
    }
    
}
if (playerWins > computerWins){
    return "player wins the game!"
} else if (computerWins > playerWins){
    return "computer wins the game!"
} else {
    return "It's a tie!"
}
}
console.log(game())