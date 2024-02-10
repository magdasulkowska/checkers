class Chessboard
{
    constructor ()
    {
        this.board = 
        [
    [new BlackPawn(),new BlackPawn(),new BlackPawn(),new BlackPawn()],
    [new BlackPawn(),new BlackPawn(),new BlackPawn(),new BlackPawn()],
    [new BlackPawn(),new BlackPawn(),new BlackPawn(),new BlackPawn()],
    [null,null,null,null],
    [null,null,null,null], 
    [new WhitePawn(),new WhitePawn(),new WhitePawn(),new WhitePawn()],
    [new WhitePawn(),new WhitePawn(),new WhitePawn(),new WhitePawn()],
    [new WhitePawn(),new WhitePawn(),new WhitePawn(),new WhitePawn()]
        ];
    }

    getPawn(x, y)
    {
        return this.board[y][x];
    }

    movePawn(x, y, newX, newY)
    {
        const pawn = this.getPawn(x, y);
        this.board[newY][newX] = pawn;
        this.board[y][x] = null;
    }

    removePawn(x, y)
    {
        this.board[y][x] = null;
    }

    isGameOver() 
    {
        let player1 = 0
        let player2 = 0;
        let makeMovePlayer1 = 0
        let makeMovePlayer2 = 0;

        for (let y = 0; y < this.board.length; y++) 
        {
            for (let x = 0; x < this.board[y].length; x++) 
            {
                if (this.board[y][x] == 1) 
                {
                    player1++;
                    makeMovePlayer1 += this.checkMove(x, y, 1);
                } 
                else if (this.board[y][x] == 2) 
                {
                    player2++;
                    makeMovePlayer2 += this.checkMove(x, y, 2);
                }
            }
        }

        if (player1 === 0 || player2 === 0) 
        {
            alert("Koniec gry: Wszystkie pionki jednego z graczy zostały zbite.");
            return true;
        }

        if ((currentPlayer === 1 && makeMovePlayer1 === 0) || (currentPlayer === 2 && makeMovePlayer2 === 0)) 
        {
            alert(`Koniec gry: Gracz ${currentPlayer} nie ma dostępnych ruchów.`);
            return true;
        }

        return false;
    }

    checkMove(x, y, player) 
    {
    var makeMove = 0;

    if (player == 1) 
    {
        if (y > 0) 
        {
            if (y % 2 == 0) 
            {
                if (x > 0 && this.board[y - 1][x - 1] == 0) makeMove++; //parzysty - lewo 
                if (x < this.board[y].length - 1 && this.board[y - 1][x + 1] == 0) makeMove++; //parzysty - prawo
            } 
            else 
            {
                if (x > 0 && this.board[y - 1][x] == 0) makeMove++; // nieparzysty - lewo
                if (x < this.board[y].length - 1 && this.board[y - 1][x + 1] == 0) makeMove++; // nieparzysty - prawo
            }
        }
    } 
    else 
    {
        if (y < this.board.length - 1) 
        {
            if (y % 2 == 0) 
            {
                if (x > 0 && this.board[y + 1][x - 1] == 0) makeMove++; // parzystyw - lewo
                if (x < this.board[y].length - 1 && this.board[y + 1][x + 1] == 0) makeMove++; // parzysty - prawo
            } 
            else 
            {
                if (x > 0 && this.board[y + 1][x] == 0) makeMove++; //nieparzysty - lewo
                if (x < this.board[y].length - 1 && this.board[y + 1][x + 1] == 0) makeMove++; //nieparzysty - prawo
            }
        }
    }
    return makeMove;
    }
}
