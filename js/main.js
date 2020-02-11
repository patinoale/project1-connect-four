/*----- constants -----*/

const players = {
    player1: 1,
    player2: 2
}

/*----- app's state (variables) -----*/

let board;
let turn = 1;
let winner;



/*----- cached element references -----*/

const cells = document.querySelectorAll('#board > div');
const message = document.querySelector('h2');
/*----- event listeners -----*/

document.getElementById('board').addEventListener('click', turnMade);

/*----- functions -----*/

function init() {
    board =  new Array(42).fill(null);
    turn = 1;
    winner = null;
    selectedCell = null;
    render();
};
init()


function render(){
    cells.forEach(function(e, i) {
        //console.log(play,i)
    let color;
    if (board[i] === selectedCell){
        color = 'player1';
    };   
    cells[i].textcontent = e;
    });
    message.textContent = `${turn}'s turn!`};


function turnMade(event) {
    let idx = cells.findIndex(function(box) {
        return box === event.target;
    });
    board[idx] = turn;
    
        if (turn === 1) {
        turn = 2 }
        else {
        turn = 1
        };
    render();
    



};

// init();



//player1 is red(1) (goes first) player2 is yellow(2)(goes second)
//player whose turn it is picks a column 
//their tile will fall on the first open spot (0) in that column 
//players keep picking until someone connects 4 
//0 - empty cell 1- red 2- yellow;