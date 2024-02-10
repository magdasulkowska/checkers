class Game
{
    constructor()
    {
        this.chessboard = new Chessboard();
        this.selectedElement = null;
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
           if (this.selectedElement.dataset.y % 2 == 0)
           {
            if (this.selectedElement.dataset.x - element.dataset.x == 1)
            {
                if (this.selectedElement.dataset.y - element.dataset.y == 2)
                {
                    this.deleteOpponent(parseInt(this.selectedElement.dataset.x) - 1, parseInt(this.selectedElement.dataset.y) - 1);
                    this.isGameOver()
                }
                else
                {
                    this.deleteOpponent(parseInt(this.selectedElement.dataset.x) - 1, parseInt(this.selectedElement.dataset.y) + 1);
                    this.isGameOver()
            
                }
               
            }
            else
            {
                if (this.selectedElement.dataset.y - element.dataset.y == 2)
                {
                    this.deleteOpponent(this.selectedElement.dataset.x, parseInt(this.selectedElement.dataset.y) - 1);
                    this.isGameOver()
                }
                else
                {
                    this.deleteOpponent(parseInt(this.selectedElement.dataset.x) - 1, parseInt(this.selectedElement.dataset.y) + 1);
                    this.isGameOver()
            
                }
            }
           }
           else
           {
            if (this.selectedElement.dataset.x - element.dataset.x == 1)
            {
                if (this.selectedElement.dataset.y - element.dataset.y == 2)
            {
                this.deleteOpponent(this.selectedElement.dataset.x, parseInt(this.selectedElement.dataset.y) - 1);
                this.isGameOver()
            }
            else
            {
                this.deleteOpponent(this.selectedElement.dataset.x, parseInt(this.selectedElement.dataset.y) + 1);
                this.isGameOver()
            }
           }
           else
                {
                    if (this.selectedElement.dataset.y - element.dataset.y == 2)
                    {
                        this.deleteOpponent(parseInt(this.selectedElement.dataset.x) +1, parseInt(this.selectedElement.dataset.y) - 1);
                        this.isGameOver()
                    }
                    else
                    {
                        this.deleteOpponent(parseInt(this.selectedElement.dataset.x) +1, parseInt(this.selectedElement.dataset.y) + 1);
                        this.isGameOver()
                    }  
                }   
           }
        }
        else
        {
            if (this.selectedElement.dataset.y % 2 == 0)
           {
            if (this.selectedElement.dataset.x - element.dataset.x == 1)
            {
                if (this.selectedElement.dataset.y - element.dataset.y == 2)
                {
                    this.deleteOpponent(parseInt(this.selectedElement.dataset.x) - 1, parseInt(this.selectedElement.dataset.y) - 1);
                    this.isGameOver()
                }
                else
                {
                    this.deleteOpponent(parseInt(this.selectedElement.dataset.x) - 1, parseInt(this.selectedElement.dataset.y) + 1);
                    this.isGameOver()
            
                }
               
            }
            else
            {
                deleteOpponent(this.selectedElement.dataset.x, parseInt(this.selectedElement.dataset.y) + 1);
                this.isGameOver()
            }
           }
           else
           {
            if  (this.selectedElement.dataset.x - element.dataset.x == 1)
            {
                if (this.selectedElement.dataset.y - element.dataset.y == 2)
            {
                deleteOpponent(this.selectedElement.dataset.x, parseInt(this.selectedElement.dataset.y) + 1);
                this.isGameOver()
            }
            else
            {
                deleteOpponent(this.selectedElement.dataset.x, parseInt(this.selectedElement.dataset.y) + 1);
                this.isGameOver()
            }
           }
           else 
           {
            if (this.selectedElement.dataset.y - element.dataset.y == 2)
            {
                deleteOpponent(this.selectedElement.dataset.x, parseInt(this.selectedElement.dataset.y) - 1);
                this.isGameOver()
            }
            else
            {
                deleteOpponent(parseInt(this.selectedElement.dataset.x) + 1, parseInt(this.selectedElement.dataset.y) + 1);
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
        return this.selectedElement == null;
    }

    canSelectElement(element)
    {
     return (this.chessboard[element.dataset.y][element.dataset.x] == this.currentPlayer)
    }
    
    changeSelectedElement(element)
    {
        element.style.backgroundColor = "grey"; 
        this.selectedElement = element;
    }
    
    isElementSelectedElement(element)
    {
        return element == this.selectedElement;
    }
    
    unselectSelectedElement()
    {
        this.selectedElement.style.backgroundColor = "black"; 
        this.selectedElement = null;
    }
    
    containsPawn(element)
    {
        return (this.chessboard[element.dataset.y][element.dataset.x] > 0)
    }

    deleteOpponent(x, y)
    {
        var field = document.querySelector('td[data-x="'+ x + '"][data-y="'+ y +'"]');
        field.querySelector('img').remove();
        this.chessboard[y][x] = 0;
    }

    canDeleteLeftRight(element) 
    {
        if (this.currentPlayer == 1) 
        {
            return (Math.abs(this.selectedElement.dataset.x - element.dataset.x) == 1 && Math.abs(this.selectedElement.dataset.y - element.dataset.y) == 2);
        } 
        else 
        {
            return (Math.abs(this.selectedElement.dataset.x - element.dataset.x) == 1 && Math.abs(this.selectedElement.dataset.y - element.dataset.y) == 2);
        }
    }

    canDeleteOnEvenRow(element) 
    {
        return this.selectedElement.dataset.y % 2 == 0 && element.dataset.x == this.selectedElement.dataset.x - 1;
    }

    canDeleteOnOddRow(element) 
    {
        return !(this.selectedElement.dataset.y % 2 == 0) && this.element.dataset.x == parseInt(this.selectedElement.dataset.x) + 1; 
    }

    canDeleteOnEvenRowEvenColumn(element) 
    {
        return this.selectedElement.dataset.y % 2 == 0 && element.dataset.x % 2 == 0 && this.canDeleteLeftRight(element);
    }

    canDeleteOnOddRowOddColumn(element) 
    {
        return !(this.selectedElement.dataset.y % 2 == 0) && element.dataset.x % 2 !== 0 && this.canDeleteLeftRight(element);
    }

    canDeleteOnOddRowEvenColumn(element) 
    {
        return !(this.selectedElement.dataset.y % 2 == 0) && element.dataset.x % 2 == 0 && this.canDeleteLeftRight(element);
    }

    canDeleteOnEvenRowOddColumn(element) 
    {
        return this.selectedElement.dataset.y % 2 == 0 && element.dataset.x % 2 !== 0 && this.canDeleteLeftRight(element);
    }

    canDeleteByColor(element) 
    {
        const currentPlayerPawnColor = (this.currentPlayer == 1) ? 'white' : 'black';
        const opponentPawnColor = (this.currentPlayer == 1) ? 'black' : 'white';
        const isOpponentColor = element.querySelector(`img[src*=${opponentPawnColor}]`);
        return isOpponentColor;
    }


    isFinished()
    {
        
    }
}