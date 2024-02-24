class Chessboard {
    constructor(elements, images) {
        this.board =
            [
                [new Square(elements[0]), new Square(elements[1]), new Square(elements[2]), new Square(elements[3])],
                [new Square(elements[0]), new Square(elements[1]), new Square(elements[2]), new Square(elements[3])],
                [new Square(elements[0]), new Square(elements[1]), new Square(elements[2]), new Square(elements[3])],
                [new Square(elements[0]), new Square(elements[1]), new Square(elements[2]), new Square(elements[3])],
                [new Square(elements[0]), new Square(elements[1]), new Square(elements[2]), new Square(elements[3])],
                [new Square(elements[0]), new Square(elements[1]), new Square(elements[2]), new Square(elements[3])],
                [new Square(elements[0]), new Square(elements[1]), new Square(elements[2]), new Square(elements[3])],
                [new Square(elements[0]), new Square(elements[1]), new Square(elements[2]), new Square(elements[3])],
            ];
            this.board[0][0].setPawn(new BlackPawn(images[0]));
            this.board[0][1].setPawn(new BlackPawn(images[1]));
            this.board[0][2].setPawn(new BlackPawn(images[2]));
            this.board[0][3].setPawn(new BlackPawn(images[3]));
            this.board[1][0].setPawn(new BlackPawn(images[4]));
            this.board[1][1].setPawn(new BlackPawn(images[5]));
            this.board[1][2].setPawn(new BlackPawn(images[6]));
            this.board[1][3].setPawn(new BlackPawn(images[7]));
            this.board[2][0].setPawn(new BlackPawn(images[8]));
            this.board[2][1].setPawn(new BlackPawn(images[9]));
            this.board[2][2].setPawn(new BlackPawn(images[10]));
            this.board[2][3].setPawn(new BlackPawn(images[11]));

            this.board[5][0].setPawn(new WhitePawn(images[12]));
            this.board[5][1].setPawn(new WhitePawn(images[13]));
            this.board[5][2].setPawn(new WhitePawn(images[14]));
            this.board[5][3].setPawn(new WhitePawn(images[15]));
            this.board[6][0].setPawn(new WhitePawn(images[16]));
            this.board[6][1].setPawn(new WhitePawn(images[17]));
            this.board[6][2].setPawn(new WhitePawn(images[18]));
            this.board[6][3].setPawn(new WhitePawn(images[19]));
            this.board[7][0].setPawn(new WhitePawn(images[20]));
            this.board[7][1].setPawn(new WhitePawn(images[21]));
            this.board[7][2].setPawn(new WhitePawn(images[22]));
            this.board[7][3].setPawn(new WhitePawn(images[23]));



            this.selectedSquare = null;
            this.selectedX = -1;
            this.selectedY = -1;

    }

    getSquare(x, y) 
    {
        return this.board[y][x];
    }

    movePawn(x, y, newX, newY) 
    {
        const square = this.getSquare(x, y);
        const square2 = this.getSquare(newX, newY);
        square2.setPawn(square.getPawn());
        square.removePawn();
        
    }

    removePawn(x, y) 
    {
        const square = this.getSquare(x, y);
        square.removePawn();
    }

    selectSquare(x, y)
    {
        if(this.selectedSquare != null)
        {
            this.selectedSquare.unSelect();
        }
        this.selectedSquare = this.getSquare(x, y);
        this.selectedSquare.select();
        this.selectedX = x;
        this.selectedY = y;
    }

    resetSelection()
    {
        if(this.selectedSquare != null) 
        {
            this.selectedSquare.unSelect(); 
            this.selectedSquare = null; 
        }

    }

    getSelectedSquare()
    {
        return this.selectedSquare;
    }

    getSelectedX()
    {
        return this.selectedX;
    }

    getSelectedY()
    {
        return this.selectedY;
    }

    getBoardLengthY() 
    {
        return this.board.length;
    }

    getBoardLengthX(y) 
    {
        if (y >= 0 && y < this.board.length) 
        {
            return this.board[y].length;
        } 
    }
}
