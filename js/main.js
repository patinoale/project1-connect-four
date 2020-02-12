/*----- constants -----*/

 const players = {
     player1 = 1
     player2 = 2
 }

/*----- app's state (variables) -----*/

let board;
let turn;
let winner;



/*----- cached element references -----*/

const cells = Array.from(document.querySelectorAll('#board > div'));
const message = document.querySelector('h2');

/*----- event listeners -----*/

document.getElementById('board').addEventListener('click', moveMade);

/*----- functions -----*/

function init() {
    board =  new Array(42).fill(null);
    turn = 1;
    winner = null;

render();
};

init()

//////////////////////////////////////////////////////////////

function render(){
    board.forEach(function(e, i) {
        //console.log(e,i)
    cells[i].textcontent = e;
});
  
    message.textContent = `${turn}'s turn!`;
};


//////////////////////////////////////////////////////////////

function moveMade(event) {
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

function changeColor() {
    if (moveMade === 1) {
        document.getElementsByClassName("box").style.backgroundColor="red";
    }
}


// init();


//start game with empty cells set to 0 or null
//player1 is red(1) (goes first) player2 is yellow(2)(goes second)
//when player clicks over column change color of cell to player's color (first from the top that is 0 or null)
//make a transparent row above first row that selects entire column and drops token in first empty cell
//players keep picking until someone connects 4 
//0 - empty cell 1- red 2- yellow;

