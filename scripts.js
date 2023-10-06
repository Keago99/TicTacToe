
// Player factory to create player objects. 
const playerFactory = (name, symbol) => {
    return {name, symbol};
};

// BoardModule for things that have to do with the gameboard only
const boardModule = (() => {

    // An array where the board information is stored, with 9 slots.
    boardArray = [8];

    // Adding all the ticBoxes to a DOM collection of elements.
    const ticBoxes = document.querySelectorAll('.ticBox');

    // A function that happens when the user clicks on any of the boards.
    function clickBox(){
        this.innerText = "testo";
    }
  

    for (i = 0; i < ticBoxes.length; i++){
        ticBoxes[i].addEventListener('click', clickBox);
        ticBoxes[i].dataset.Name = i;
    }
})();


// a module controller for the game
const gameController =  (() => {

})();
