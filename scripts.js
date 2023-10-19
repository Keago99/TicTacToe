 

// Player factory to create player objects. 
const playerFactory = (name, symbol) => {
    return {name, symbol};
};



// BoardModule for things that have to do with the gameboard only
const boardModule = (() => {


    // An array where the board information is stored, with 9 slots.
    boardArray = [" ", " ", " ", " ", " ", " ", " ", " ", " ", ];
    
    var body = document.getElementsByTagName("BODY")[0];

    const mainDisplay = document.querySelector('#turnWinDisplay');
    const player1 = playerFactory("player1", "x");
    const player2 = playerFactory("player2", "o");
    var squareScores = [1, 2, 4, 8, 16, 32, 64, 128, 256];
    var wins = [7, 56, 448, 73, 146, 292, 273, 84, 277, 281, 305];
    var play1Score = 0;
    var play2Score = 0;

    var playerTurn = "p1";
    var winningPlayer = null;

    

    getWinningPlayer = () => winningPlayer;

    getPlayerTurn = () => playerTurn;

    const winningConditions = (array1, array2) =>
        array2.every((element) =>
        array1.includes(element));

    const checkWinningConditions = () => {
        
    }

    const changeTurn = () => {
        if (playerTurn === "p1"){
            playerTurn = "p2";
        }
        else{
            playerTurn = "p1";
        }
    }


    // Adding all the ticBoxes to a DOM collection of elements.
    const ticBoxes = document.querySelectorAll('.ticBox');

    function updateBoard(){
        for (i = 0; i < boardArray.length; i++){
            if (boardArray[i] == " "){
                ticBoxes[i].innerHTML = " ";
            }
            else if (boardArray[i] == "X")
            {
                ticBoxes[i].innerHTML = "X";
            }
            else if (boardArray[i] == "O")
            {
                ticBoxes[i].innerHTML = "O";
            }
        }
    }

    // A function that happens when the user clicks on any of the boards.
    function clickBox(){
        var numberInArray = this.dataset.Number;
        if (boardArray[numberInArray] === " "){
             var currentPlayerTurn = getPlayerTurn();
            if (currentPlayerTurn === "p1"){
                this.classList.remove('greeno');
                this.classList.remove('reddo');
                this.classList.add('greeno');
                boardArray.splice(numberInArray, 1, "X");
                play1Score += squareScores[numberInArray];
                console.log("player 1s score is: " + play1Score);
                body.classList.add('backReddo');
                body.classList.remove('backGreeno');
            }
            if (currentPlayerTurn === "p2"){
                this.classList.remove('greeno');
                this.classList.remove('reddo');
                this.classList.add('reddo');
                boardArray.splice(numberInArray, 1, "O");
                play2Score += squareScores[numberInArray];
                console.log("player 2s score is: " + play2Score);
                body.classList.add('backGreeno');
                body.classList.remove('backReddo');
            }
   
            if (winnerCheck(play1Score)){
                winningPlayer = "p1";
            }
            if (winnerCheck(play2Score)){
                winningPlayer = "p2";
            }
            changeTurn();
            updateBoard();
            updateDisplay();
            checkForDraw();
        }
        else{
            alert("Square is occupied, please play somewhere else");
        }

    }

    const winnerCheck = (score) =>  wins.includes(score)



    // adding click eventlisteners to each checkbox.
        for (i = 0; i < ticBoxes.length; i++){
            ticBoxes[i].addEventListener('click', clickBox);
            ticBoxes[i].dataset.Number = i;
        }



    

    removePlayability = () => {
        for(j = 0; j < ticBoxes.length; j++){
            ticBoxes[j].removeEventListener('click', clickBox);
        }
    }

    resetBoard = () => {
        winningPlayer = null;
        play1Score = 0;
        play2Score = 0;
        playerTurn = "p1";
        boardArray = [" ", " ", " ", " ", " ", " ", " ", " ", " ", ];
        for (i = 0; i < ticBoxes.length; i++){
            ticBoxes[i].addEventListener('click', clickBox);
        }
        updateBoard();
        updateDisplay();
        body.classList.remove('backReddo');
        body.classList.remove('backGreeno');
        body.classList.add('backGreeno');

    }

    //return get methods for WinningPlayer and the Players turn, to be used in displayController.
    return {getWinningPlayer, getPlayerTurn, removePlayability, resetBoard};
})();


// a module controller for the game
const displayController =  (() => {

    const mainDisplay = document.querySelector('#turnWinDisplay');
    const resetButton = document.querySelector('#resetButton');

    resetButton.addEventListener('click', resetBoard);


    updateDisplay = () => {
        isThereaWinnner = getWinningPlayer();
        if (isThereaWinnner === null){
            currentTurn = getPlayerTurn();
            mainDisplay.innerText = "It's currently " + currentTurn + "'s turn";
        }
        else{
            if (isThereaWinnner === "p1"){
                mainDisplay.innerText = "Player 1 has won!";
                removePlayability();
            }
            if (isThereaWinnner === "p2"){
                mainDisplay.innerText = "Player 2 has won!";
                removePlayability();
            }
        }


    }

    checkForDraw = () => {
        if (boardArray.includes(" ")){
            console.log ("not a draw yet");
        }
        else{
            console.log ("its a draw!");
            mainDisplay.innerText = "Its a draw!";
            removePlayability();
        }
    }

    
    return {updateDisplay, checkForDraw}
})();
