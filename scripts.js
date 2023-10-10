
// Player factory to create player objects. 
const playerFactory = (name, symbol) => {
    return {name, symbol};
};

// BoardModule for things that have to do with the gameboard only
const boardModule = (() => {

    // An array where the board information is stored, with 9 slots.
    boardArray = ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", ];


    const player1 = playerFactory("player1", "x");
    const player2 = playerFactory("player2", "o");

    var playerTurn = "p1";
    const winningPlayer = null;

    const getWinningPlayer = () => winningPlayer;

    const getPlayerTurn = () => playerTurn;

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
            if (boardArray[i] == "empty"){
                ticBoxes[i].innerHTML = "empty";
            }
            else if (boardArray[i] == "x")
            {
                ticBoxes[i].innerHTML = "x";
            }
            else if (boardArray[i] == "o")
            {
                ticBoxes[i].innerHTML = "o";
            }
        }
    }

    // A function that happens when the user clicks on any of the boards.
    function clickBox(){
        let numberInArray = this.dataset.Number;
        if (boardArray[numberInArray] == "empty"){
            currentPlayerTurn = getPlayerTurn();
            if (currentPlayerTurn === "p1"){
                boardArray.splice(numberInArray, 1, "x");
            }
            else if (currentPlayerTurn === "p2"){
                boardArray.splice(numberInArray, 1, "o");
            }
            changeTurn();
            updateBoard();
            updateDisplay();
        }
        else{
            alert("this has a thinngy already");
        }

    }
  
    // adding click eventlisteners to each checkbox.
    for (i = 0; i < ticBoxes.length; i++){
        ticBoxes[i].addEventListener('click', clickBox);
        ticBoxes[i].dataset.Number = i;
    }

    //return get methods for WinningPlayer and the Players turn, to be used in displayController.
    return {getWinningPlayer, getPlayerTurn};
})();


// a module controller for the game
const displayController =  (() => {

    const mainDisplay = document.querySelector('#turnWinDisplay');

    updateDisplay = () => {
        mainDisplay.innerText = "yeaaaaahhh BOIIIII";
    };

    return {updateDisplay}
})();
