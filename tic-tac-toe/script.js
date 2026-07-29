// a function to generateGameBoard
// this object detects how the board should be played.
function generateGameBoard(){
    const rows = 3;
    const cols = 3;
    // create a 3x3 array.
    const board = Array(rows).fill().map(() => Array(cols).fill(null));

    const getBoard = () => board;

    // a function to mark a cell in the 3x3 grid
    const markCell = (x,y, mark) => {

        // add check if x > row and y > cols
        if (x < 0 || x >= rows || y < 0 || y >= cols) {
        console.log("Invalid index");
        return;
        }

        // add check if index is already occupied.
        if (board[x][y] !== null) {
        console.log("Can't do shit here mate.");
        return;
        }

        // push the number to the specified index
        board[x][y] = mark;

        return true;
    }

    const printBoard = () => {
        console.log(board);
    }

    const checkWin = (size=3) => {
        // Returns "X" or "O" if there is a winner; otherwise returns null.

        // check rows
        // i have to iterate each row 
        for (let row = 0; row < size; row++) {
            let player = board[row][0];
            // get the first element of that row

            // if the first element of that row is null
            // then skip early
            if (player === null) continue;

            let won = true;

            // iterate per col
            for (let col = 1; col < size; col++) {
                if (board[row][col] !== player) {
                    // not a winning row
                    won = false;
                    break;
                }
            }
            if (won) {
                return player;
            }
        }

        // check column
        for (let col = 0; col < size; col++) {
            player = board[0][col];
            // get the first element of that row

            // if the first element of that row is null
            // then skip early
            if (player === null) continue;

            let won = true;

            // iterate per col
            for (let row = 1; row < size; row++) {
                if (board[col][row] !== player) {
                    // not a winning row
                    won = false;
                    break;
                }
            }
            if (won) {
                return player;
            }
        }

        // Check main diagonal
        player = board[0][0];
        if (player !== null) {
            let won = true;

            for (let i = 1; i < size; i++) {
                if (board[i][i] !== player) {
                    won = false;
                    break;
                }
            }

            if (won) {
                return player;
            }
        }

        // Check other diagonal
        player = board[0][size - 1];
        if (player !== null) {
            let won = true;

            // start at the second row after board[0][size - 1];
            for (let i = 1; i < size; i++) {
                if (board[i][size - 1 - i] !== player) {
                    won = false;
                    break;
                }
            }

            if (won) {
                return player;
            }
        }

        // No winner
        return null;
    }

    return {getBoard, markCell, printBoard, checkWin }
}

// a player factory
function makePlayer(name, mark){
    // returns a player object 
    const username = ("@" + name).toLowerCase();
    return {username, mark};
}

// controls the game flow
// this is the game logic itself
function GameController(
    playerOne = makePlayer("Robroi","X"),
    playerTwo = makePlayer("Emy", "o")
){
    const board = generateGameBoard();

    const players = [
        {
            name: playerOne.username,
            mark: playerOne.mark,
        },
        {
            name: playerTwo.username,
            mark: playerTwo.mark,
        },
    ];

    let activePlayer = players[0];

    const switchPlayerTurn = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0];
    };

    const getActivePlayer = () => activePlayer;

    const printNewRound = () => {
        board.printBoard();
        console.log(`${getActivePlayer().name}'s turn.`);

    };

    const playRound = (x,y) => {
        const success = board.markCell(x,y, getActivePlayer().mark);
        
        if (!success){
            console.log("invalid move, try again");
            return;
        }
        // happy path
        console.log(
            `${getActivePlayer().name}'s marking at index [${x},${y}]`
        );

        const winner = board.checkWin();

        if (winner) {
            const winnerPlayer = players.find(player => player.mark === winner);
            console.log(`${winnerPlayer.name} wins!`);
            return;
        }

        switchPlayerTurn();
        printNewRound();
    };

    printNewRound();

    return{
        playRound,
        getActivePlayer,
    };
}

function startGame() {
    console.log("game start!");
    const game = GameController();
    while (true) {
        const x = Number(prompt("Enter row (0-2):"));
        const y = Number(prompt("Enter column (0-2):"));

        game.playRound(x, y);
    }
}

startGame();