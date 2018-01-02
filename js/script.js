//new game
var newGameBtn = document.getElementById('js-newGameButton');

newGameBtn.addEventListener('click', newGame);

//play  er pick
var pickRock = document.getElementById('js-playerPick_rock'),
     pickPaper = document.getElementById('js-playerPick_paper'),
     pickScissors = document.getElementById('js-playerPick_scissors');

pickRock.addEventListener('click', function() { playerPick('rock') });
pickPaper.addEventListener('click', function() { playerPick('paper') });
pickScissors.addEventListener('click', function() { playerPick('scissors') });

var gameState = ' ',  //started // ended
    player = {
        name: '',
        score: 0
    },
    computer = {
        score: 0
    };

var newGameElem = document.getElementById('js-newGameElement'),
    pickElem = document.getElementById('js-playerPickElement'),
    resultsElem = document.getElementById('js-resultsTableElement');


setGameElements('notStarded');

function setGameElements() {
        switch(gameState) {
          case 'started':
              newGameElem.style.display = 'none';
              pickElem.style.display = 'block';
              resultsElem.style.display = 'block';
            break;
          case 'ended':
              newGameBtn.innerText = 'Jeszcze raz';
          case 'notStarted':
          default:
              newGameElem.style.display = 'block';
              pickElem.style.display = 'none';
              resultsElem.style.display = 'none';
        }
      }

  var playerPointsElem = document.getElementById('js-playerPoints'),
      playerNameElem = document.getElementById('js-playerName'),
      computerPointsElem = document.getElementById('js-computerPoints');


function newGame() {
  player.name = prompt('Please enter your name', 'imię gracza');
  if (player.name) {
    player.score = computer.score = 0;
    gameState = 'started';
    setGameElements();

    playerNameElem.innerHTML = player.name;
    setGamePoints(); 
  }

}

function playerPick(playerPick) {
    console.log(playerPick);
}

function getComputerPick() {
    var possiblePicks = ['rock', 'paper', 'scissors'];
    return possiblePicks[Math.floor(Math.random()*3)];
}


var playerPickElem = document.getElementById('js-playerPick'),
    computerPickElem = document.getElementById('js-computerPick'),
    playerResultElem = document.getElementById('js-playerResult'),
    computerResultElem = document.getElementById('js-computerResult');

   

function checkRoundWinner(playerPick, computerPick) {
        playerResultElem.innerHTML = computerResultElem.innerHTML = '';
    var scoreInsert = document.get
        var winnerIs = 'player';
      
          if (playerPick == computerPick) {
              winnerIs = 'noone'; // remis
          } else if (
              (computerPick == 'rock' &&  playerPick == 'scissors') ||
              (computerPick == 'scissors' &&  playerPick == 'paper') ||
              (computerPick == 'paper' &&  playerPick == 'rock')) {
      
              winnerIs = 'computer';
          }
      
          if (winnerIs == 'player') {
              playerResultElem.innerHTML = "Win!";
              player.score++;
              setGamePoints();
              
          } else if (winnerIs == 'computer') {
              computerResultElem.innerHTML = "Win!";
              computer.score++;
             setGamePoints();
             
          }else {
            playerResultElem.innerHTML = "Tie";
            computerResultElem.innerHTML = "Tie";
          }

          checkScore();
      
      }

function playerPick(playerPick) {
        var computerPick = getComputerPick();
    
        playerPickElem.innerHTML = playerPick;
        computerPickElem.innerHTML = computerPick;
    
        checkRoundWinner(playerPick, computerPick);
    }

function setGamePoints() {

        playerPointsElem.innerHTML = player.score;
        computerPointsElem.innerHTML = computer.score;
    }

//ending the game
function checkScore() {
    if (player.score >= 10) {
        playerResultElem.innerHTML = "!Winner!";
        gameState = 'ended';
        setGameElements();
        alert('The winner is ' + player.name + ' with score ' + player.score )
    }else if (computer.score >=10) {
        computerResultElem.innerHTML = "!Winner!";
        gameState = 'ended' ;
        setGameElements();
        alert('The winner is Computer with score ' + computer.score)
    }
}
