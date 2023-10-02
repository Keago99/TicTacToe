
// Player factory for creating new players
const Player = (name) => {
    let score = 0;
    const getName = ()  => name;
    const getScore = () => score;
    return{getName, getScore};
};

// module for gameboard
var gameBoard = (function(){

})();

// module for gamecontroller
var gameController = (function (){

})();