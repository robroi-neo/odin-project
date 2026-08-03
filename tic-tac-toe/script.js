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

    const checkDraw = (size=3) => {
        // check draw, basically check if every index in the array is not null
        for (let i = 0; i < size;i++){
            // draw default
            for (let j = 0; j < size; j++){
                if (board[i][j] === null){
                    return false;
                }
            }
        }
        return true;
    }

    const clear = () => {
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            board[row][col] = null;
        }
    }
};

    return {getBoard, markCell, printBoard, checkWin, checkDraw, clear}
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
    playerTwo = makePlayer("Emy", "O")
){
    const board = generateGameBoard();

    const getBoard = () => board.getBoard();

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

    const getPlayers = () => [...players];

    const scores = {
        [players[0].name]: 0,
        [players[1].name]: 0,
        ties: 0,
        };

    const getScores = () => ({...scores});

    let activePlayer = players[0];

    const switchPlayerTurn = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0];
    };

    const getActivePlayer = () => activePlayer;

    const printNewRound = () => {
        board.printBoard();
        console.log(`${getActivePlayer().name}'s turn.`);

    };

    let gameOver = false;

    const playRound = (x,y) => {
        
        if (gameOver) {
            return {
                status: "gameover",
            };
        }

        const success = board.markCell(x,y, getActivePlayer().mark);
        

        if (!success){
            console.log("invalid move, try again");
            return {
                status: "invalid",
            }
        }
        // happy path here
        console.log(
            `${getActivePlayer().name}'s marking at index [${x},${y}]`
        );

        // check if win
        const winner = board.checkWin();
        if (winner !== null) {
            gameOver = true;

            const winnerPlayer = players.find(player => player.mark === winner);
            scores[winnerPlayer.name]++
            console.log(`${winnerPlayer.name} wins!`);
            return {
                status: "winner",
                winner: winnerPlayer,
            }
        } 
        // check if draw
        if (board.checkDraw()){
            gameOver = true;
            scores.ties++;
            console.log('its a tie!');
            return {
                status: "draw",
            }
        }

        // continue playing
        switchPlayerTurn();
        printNewRound();
        return {
            status: "continue",
            activePlayer: getActivePlayer(),
        }
    };

    const resetBoard = () => {
        gameOver = false;
        board.clear();
        switchPlayerTurn();
    };

    printNewRound();

    return{
        getBoard,
        playRound,
        getActivePlayer,
        getScores,
        getPlayers,
        resetBoard,
    };
}

function RenderUI(game) {
    const TicTacToe = document.querySelector(".game");
    const result = document.querySelector(".results");
    const results__p1 = document.querySelector(".results__p1");
    const results__p2 = document.querySelector(".results__p2");
    const results__ties = document.querySelector(".results__ties");
    const boardElement = document.querySelector(".board");
    const activePlayerElement = document.querySelector(".game__turn");
    const restartBtn = document.querySelector(".game__restart");

    const modal = document.querySelector(".win-modal");
    const resultText = document.querySelector(".win-modal__winner");
    const playAgainBtn = document.querySelector(".win-modal__button");

    const showGame = () => {
        TicTacToe.classList.remove("hidden");
        result.classList.remove("hidden");
    }

    const hideGame = () => {
        TicTacToe.classList.add("hidden");
        result.classList.add("hidden");
    }

    const showGameResult = (message) => {
        resultText.textContent = message;
        modal.classList.remove("hidden");
    };

    const hideGameResult = () => {
        modal.classList.add("hidden");
    };


    const renderBoard = () => {
        // clear board element
        boardElement.innerHTML = "";

        // get the board object
        const boardState = game.getBoard();
        // render that board
        for (let row = 0; row < boardState.length; row++) {
            for (let col = 0; col < boardState[row].length; col++) {

                const cell = document.createElement("div");

                cell.classList.add("board__cell");

                cell.textContent = boardState[row][col] ?? "";

                cell.dataset.mark = cell.textContent;

                cell.dataset.row = row;
                cell.dataset.col = col;

                // add an event listener for each cell to listen if its being clicked
                cell.addEventListener("click", () => {
                    // tell the controller a move was made
                    const result = game.playRound(event.target.dataset.row, event.target.dataset.col);
                    
                    // rerender the board
                    renderActivePlayer();
                    renderBoard();
                    renderScores();
                    
                    switch (result.status) {
                        case "winner":
                            // Update turn text
                            // Disable further clicks
                            boardElement.style.pointerEvents = "none";
                             showGameResult(`${result.winner.name} wins!`);
                            break;

                        case "draw":
                            // Show "It's a draw!"
                            boardElement.style.pointerEvents = "none";
                            showGameResult("It's a draw!");
                            break;

                        case "invalid":
                            // Maybe do nothing or show a message
                            break;

                        case "continue":
                            // Update the turn indicator
                            break;
                    }
                    
                });
                boardElement.appendChild(cell);
            }
        }
    }

    const renderActivePlayer = () => {
        activePlayerElement.innerHTML = " ";
        const activePlayer = game.getActivePlayer();

        // replace the activePlayerElement with the active player from game object
        activePlayerElement.innerHTML = `${activePlayer.name}'s turn`;
    }

    const renderScores = () => {
        const scores = game.getScores();
        const players = game.getPlayers();

        results__p1.textContent =
            `${players[0].name}: ${scores[players[0].name]}`;

        results__p2.textContent =
            `${players[1].name}: ${scores[players[1].name]}`;

        results__ties.textContent =
            `Ties: ${scores.ties}`;
    }

    const restartGame = () => {
        restartBtn.addEventListener("click", resetGameUI);
        playAgainBtn.addEventListener("click", resetGameUI);
    }

    const resetGameUI = () => {
        game.resetBoard();
        boardElement.style.pointerEvents = "auto";

        hideGameResult();
        renderBoard();
        renderActivePlayer();
        renderScores();
    }

    // swap in a fresh GameController (e.g. after returning to the main
    // menu and starting again) without re-attaching any listeners
    const setGame = (newGame) => {
        game = newGame;
        boardElement.style.pointerEvents = "auto";

        hideGameResult();
        renderBoard();
        renderActivePlayer();
        renderScores();
    }

    restartGame();
    renderBoard();
    renderActivePlayer();
    renderScores();

    return {
        showGame,
        hideGame,
        hideGameResult,
        setGame,
    }
}

function mainMenu() {
    const menu = document.querySelector(".main-menu");
    const startBtn = document.querySelector(".main-menu__start");
    const playerOneInput = document.querySelector("#player-one");
    const playerTwoInput = document.querySelector("#player-two");

    const show = () => {
        menu.classList.remove("hidden");
    };

    const hide = () => {
        menu.classList.add("hidden");
    };

    return {
        show,
        hide,
        startBtn,
        playerOneInput,
        playerTwoInput,
    };

}

function startApp() {
    const menu = mainMenu();
    const homeBtn = document.querySelector(".win-modal__home");

    menu.show();

    let gameUI = null;

    menu.startBtn.addEventListener("click", () => {
        const playerOneName = menu.playerOneInput.value || "Player 1";
        const playerTwoName = menu.playerTwoInput.value || "Player 2";

        menu.hide();

        const game = GameController(
            makePlayer(playerOneName, "X"),
            makePlayer(playerTwoName, "O")
        );

        // reuse the same RenderUI instance across games so restart/play-again
        // listeners never get attached more than once
        if (!gameUI) {
            gameUI = RenderUI(game);
        } else {
            gameUI.setGame(game);
        }

        gameUI.showGame();
    });

    homeBtn.addEventListener("click", () => {
        gameUI.hideGame();
        gameUI.hideGameResult();
        menu.show();
    });
}

startApp();