/*----- constants -----*/



/*----- app's state (variables) -----*/

let board;
let turn = 1;
let winner;


/*----- cached element references -----*/

const cells = Array.from(document.querySelectorAll('#board div'));

/*----- event listeners -----*/

document.getElementById('board').addEventListener('click', turnMade);

/*----- functions -----*/

function init() {
    board = [
        0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,
    ];
    render();
};
 


function render(){
    board.forEach(function(play, i) {
        //console.log(play,i);   
    cells[i].textcontent = play;
    });
};

function turnMade(event) {
    let idx = cells.findIndex(function(box) {
        return box === event.target;
    });
    board[idx] = turn;
    //console.log(board);
    if (turn === 1) {
        turn = 2 }
        else {
        turn = 1
        }
    }



};

init();



//first player is red(1) (goes first) second player is yellow(2)(goes second)
//player whose turn it is picks a column 
//their tile will fall on the first open spot in that column 
//players keep picking until someone connects 4 
//0 - empty cell 1- red 2- yellow