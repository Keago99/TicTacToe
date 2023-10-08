
// Player factory to create player objects. 
const playerFactory = (name, symbol) => {
    return {name, symbol};
};

// BoardModule for things that have to do with the gameboard only
const boardModule = (() => {

    // An array where the board information is stored, with 9 slots.
    boardArray = ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", ];

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
                console.log(currentTicBox);
            }
        }
    }

    // A function that happens when the user clicks on any of the boards.
    function clickBox(){
        let numberInArray = this.dataset.Number;
        if (boardArray[numberInArray] == "empty"){
            boardArray.splice(numberInArray, 1, "x");
            updateBoard();
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
})();


// a module controller for the game
const gameController =  (() => {

function playTurn(){

}
})();
