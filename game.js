class Game
{
    constructor(elements, images)
    {
        this.chessboard = new Chessboard(elements, images);
        this.currentPlayer = 1;
    }

     step (element)
    { 
        if (this.isAnyElementSelected()) 
    {
        if (this.canSelectElement(element))
        {
            this.changeSelectedElement(element)
        }
    }
     else if (this.isElementSelectedElement(element))     
    {
        this.unselectSelectedElement();
    } 
    else if (this.containsPawn(element))
    {
        return;
    }
     else if(this.isGoodMoveForOddRow(element))
    {
        this.makeMoveIfGood(element)
        this.isGameOver()
    }
    else if (this.isGoodMoveForEvenRow(element))
    {
        this.makeMoveIfGood(element)
        this.isGameOver()
    }
    else
    { 
        if(this.canDeleteLeftRight(element) || this.canDeleteOnEvenRow(element) || this.canDeleteOnOddRow(element) || this.canDeleteOnEvenRowEvenColumn(element) || this.canDeleteOnOddRowOddColumn(element) || this.canDeleteOnOddRowEvenColumn(element) || this.canDeleteOnEvenRowOddColumn(element) || this.canDeleteByColor(element)) 
        {
        if (this.currentPlayer == 1)
        {
           if (this.chessborad.getSelectedY() % 2 == 0)
           {
            if (this.chessborad.getSelectedX() - element.dataset.x == 1)
            {
                if (this.chessborad.getSelectedY() - element.dataset.y == 2)
                {
                    this.chessboard.removePawn(this.chessborad.getSelectedX() - 1, this.chessborad.getSelectedY() - 1);
                    this.isGameOver()
                }
                else
                {
                    this.chessboard.removePawn(parseInt(this.chessborad.getSelectedX()) - 1, parseInt(this.chessborad.getSelectedY()) + 1);
                    this.isGameOver()
            
                }
               
            }
            else
            {
                if (this.chessborad.getSelectedY() - element.dataset.y == 2)
                {
                    this.chessboard.removePawn(this.chessborad.getSelectedX(), parseInt(this.chessborad.getSelectedY()) - 1);
                    this.isGameOver()
                }
                else
                {
                    this.chessboard.removePawn(parseInt(this.chessborad.getSelectedX()) - 1, parseInt(this.chessborad.getSelectedY()) + 1);
                    this.isGameOver()
            
                }
            }
           }
           else
           {
            if (this.chessborad.getSelectedX()- element.dataset.x == 1)
            {
                if (this.chessborad.getSelectedY() - element.dataset.y == 2)
            {
                this.chessboard.removePawn(this.chessborad.getSelectedX(), parseInt(this.chessborad.getSelectedY()) - 1);
                this.isGameOver()
            }
            else
            {
                this.chessboard.removePawn(this.chessborad.getSelectedX(), parseInt(this.chessborad.getSelectedY()) + 1);
                this.isGameOver()
            }
           }
           else
                {
                    if (this.chessborad.getSelectedY() - element.dataset.y == 2)
                    {
                        this.chessboard.removePawn(parseInt(this.chessborad.getSelectedX()) +1, parseInt(this.chessborad.getSelectedY()) - 1);
                        this.isGameOver()
                    }
                    else
                    {
                        this.chessboard.removePawn(parseInt(this.chessborad.getSelectedX()) +1, parseInt(this.chessborad.getSelectedY()) + 1);
                        this.isGameOver()
                    }  
                }   
           }
        }
        else
        {
            if (this.chessborad.getSelectedY() % 2 == 0)
           {
            if (this.chessborad.getSelectedX() - element.dataset.x == 1)
            {
                if (this.chessborad.getSelectedY() - element.dataset.y == 2)
                {
                    this.deleteOpponent(parseInt(this.chessborad.getSelectedX()) - 1, parseInt(this.chessborad.getSelectedY()) - 1);
                    this.isGameOver()
                }
                else
                {
                    this.deleteOpponent(parseInt(this.chessborad.getSelectedX()) - 1, parseInt(this.chessborad.getSelectedY()) + 1);
                    this.isGameOver()
            
                }
               
            }
            else
            {
                deleteOpponent(this.chessborad.getSelectedX(), parseInt(this.chessborad.getSelectedY()) + 1);
                this.isGameOver()
            }
           }
           else
           {
            if  (this.chessborad.getSelectedX() - element.dataset.x == 1)
            {
                if (this.chessborad.getSelectedY() - element.dataset.y == 2)
            {
                deleteOpponent(this.chessborad.getSelectedX(), parseInt(this.chessborad.getSelectedY()) + 1);
                this.isGameOver()
            }
            else
            {
                deleteOpponent(this.chessborad.getSelectedX(), parseInt(this.chessborad.getSelectedY()) + 1);
                this.isGameOver()
            }
           }
           else 
           {
            if (this.chessborad.getSelectedY() - element.dataset.y == 2)
            {
                deleteOpponent(this.chessborad.getSelectedX(), parseInt(this.chessborad.getSelectedY()) - 1);
                this.isGameOver()
            }
            else
            {
                deleteOpponent(parseInt(this.chessborad.getSelectedX()) + 1, parseInt(this.chessborad.getSelectedY()) + 1);
                this.isGameOver()
            
           }
        }
    }
    }
    this.movePieceToNewLocation(element)
    this.isGameOver()
        }
    }
    }

    isAnyElementSelected()
    {
        return this.chessboard.getSelectedSquare() == null;
    }

    canSelectElement(element)
    {
     return (this.chessboard.getSquare(element.dataset.x, element.dataset.y).getPawn().getPlayer() == this.currentPlayer)
    }
    
    changeSelectedElement(element)
    {
        this.chessboard.selectSquare(element.dataset.x, element.dataset.y);
    }
    
    isElementSelectedElement(element)
    {
        return this.chessboard.getSelectedX() == element.dataset.x && this.chessboard.getSelectedY() == element.dataset.y;
    }
    
    unselectSelectedElement()
    {
        this.chessboard.resetSelection();
    }
    
    containsPawn(element)
    {
        return this.chessboard.getSquare(element.dataset.x, element.dataset.y).getPawn() != null;
    }

    canDeleteLeftRight(element) 
    {
        if (this.currentPlayer == 1) 
        {
            return (Math.abs(this.chessborad.getSelectedX() - element.dataset.x) == 1 && Math.abs(this.chessborad.getSelectedY() - element.dataset.y) == 2);
        } 
        else 
        {
            return (Math.abs(this.chessborad.getSelectedX() - element.dataset.x) == 1 && Math.abs(this.chessborad.getSelectedY() - element.dataset.y) == 2);
        }
    }

    canDeleteOnEvenRow(element) 
    {
        return this.chessborad.getSelectedY() % 2 == 0 && element.dataset.x == this.chessborad.getSelectedX() - 1;
    }

    canDeleteOnOddRow(element) 
    {
        return !(this.chessborad.getSelectedY() % 2 == 0) && this.element.dataset.x == parseInt(this.chessborad.getSelectedX()) + 1; 
    }

    canDeleteOnEvenRowEvenColumn(element) 
    {
        return this.chessborad.getSelectedY() % 2 == 0 && element.dataset.x % 2 == 0 && this.canDeleteLeftRight(element); 
    }

    canDeleteOnOddRowOddColumn(element) 
    {
        return !(this.chessborad.getSelectedY() % 2 == 0) && element.dataset.x % 2 !== 0 && this.canDeleteLeftRight(element); 
    }

    canDeleteOnOddRowEvenColumn(element) 
    {
        return !(this.chessborad.getSelectedY() % 2 == 0) && element.dataset.x % 2 == 0 && this.canDeleteLeftRight(element); 
    }

    canDeleteOnEvenRowOddColumn(element) 
    {
        return this.chessborad.getSelectedY() % 2 == 0 && element.dataset.x % 2 !== 0 && this.canDeleteLeftRight(element); 
    }

    canDeleteByColor(element)
    {
        const currentPlayerPawnColor = (this.currentPlayer == 1) ? 'white' : 'black';
        const opponentPawnColor = (this.currentPlayer == 1) ? 'black' : 'white';
        const isOpponentColor = element.querySelector(`img[src*=${opponentPawnColor}]`); //
        return isOpponentColor;
    }

isGoodMoveForOddRow(element)
{
   return this.chessborad.getSelectedY() % 2>0 && (this.chessborad.getSelectedX() == element.dataset.x || element.dataset.x == parseInt(this.chessborad.getSelectedX()) +1) && (Math.abs(this.chessborad.getSelectedY() - element.dataset.y) == 1)
}

isGoodMoveForEvenRow(element)
{
    return this.chessborad.getSelectedY() % 2==0 && (this.chessborad.getSelectedX() == element.dataset.x || element.dataset.x == parseInt(this.chessborad.getSelectedX()) -1 ) && (Math.abs(this.chessborad.getSelectedY() - element.dataset.y) == 1)
}

makeMoveIfGood(element)
{
    if (this.currentPlayer == 1 && this.chessborad.getSelectedY() == parseInt(element.dataset.y) +1)
        {
            this.movePieceToNewLocation(element)
        }
        else if (this.currentPlayer == 2 && this.chessborad.getSelectedY() == parseInt(element.dataset.y) -1)
        {  
            this.movePieceToNewLocation(element)
        }
}

movePieceToNewLocation(element)
{
    this.chessboard.movePawn(this.chessboard.getSelectedX(), this.chessboard.getSelectedY(), element.dataset.x, element.dataset.y); 

    element.appendChild(this.chessboard.getSelectedSquare().querySelector("img[src]")); // movePawn
    this.chessboard.resetSelection(); 

    this.currentPlayer = 3 - this.currentPlayer;
}
}
isGameOver() 
{
    let player1 = 0
    let player2 = 0;
    let makeMovePlayer1 = 0
    let makeMovePlayer2 = 0;

    for (let y = 0; y < this.chessborad.getBoardLengthY(); y++)
    {
        for (let x = 0; x < this.chessborad.getBoardLengthX(y); x++) 
        {
            if (this.chessborad.getSquare(x, y).getPawn() != null && this.chessboard.getSquare(x, y).getPawn().getPlayer() == 1) 
            {
                player1++;
                makeMovePlayer1 += this.checkMove(x, y, 1);
            }
            else if (this.chessborad.getSquare(x, y).getPawn() != null && this.chessboard.getSquare(x, y).getPawn().getPlayer() == 2) 
            {
                player2++;
                makeMovePlayer2 += this.checkMove(x, y, 2);
            }
        }
    }

    if (player1 == 0 || player2 == 0) 
    {
        alert("Koniec gry: Wszystkie pionki jednego z graczy zostały zbite.");
        return true;
    }

    if ((this.currentPlayer == 1 && makeMovePlayer1 == 0) || (this.currentPlayer == 2 && makeMovePlayer2 == 0)) 
    {
        alert(`Koniec gry: Gracz ${this.currentPlayer} nie ma dostępnych ruchów.`);
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
                if (x > 0 && this.chessborad.getSquare(x - 1, y - 1).getPawn() == null) makeMove++; //parzysty - lewo 
                if (x < this.chessborad.getBoardLengthX(y) - 1 && this.chessborad.getSquare(x + 1, y - 1).getPawn() == null) makeMove++; //parzysty - prawo
            }
            else 
            {
                if (x > 0 && this.chessborad.getSquare(x, y - 1).getPawn() == null) makeMove++; // nieparzysty - lewo
                if (x < this.chessborad.getBoardLengthX(y) - 1 && this.chessborad.getSquare(x + 1, y - 1).getPawn() == null) makeMove++; // nieparzysty - prawo
            }
        }
    }
    else {
        if (y < this.chessborad.getBoardLengthY() - 1) 
        {
            if (y % 2 == 0) 
            {
                if (x > 0 && this.chessborad.getSquare(x - 1, y + 1).getPawn() == null) makeMove++; // parzystyw - lewo
                if (x < this.chessborad.getBoardLengthX(y) - 1 && this.chessborad.getSquare(x + 1, y + 1).getPawn() == null) makeMove++; // parzysty - prawo
            }
            else 
            {
                if (x > 0 && this.chessborad.getSquare(x, y + 1).getPawn() == 0) makeMove++; //nieparzysty - lewo
                if (x < this.chessborad.getBoardLengthX(y) - 1 && this.chessborad.getSquare(x + 1, y + 1).getPawn() == null) makeMove++; //nieparzysty - prawo
            }
        } 
    }
    return makeMove;
}
