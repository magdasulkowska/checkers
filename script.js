var selectedElement = null;
var currentPlayer = 1;
var chessboard = [
    [2,2,2,2],
    [2,2,2,2],
    [2,2,2,2],
    [0,0,0,0],
    [0,0,0,0], 
    [1,1,1,1],
    [1,1,1,1],
    [1,1,1,1]
];

function select(element) 
{
    if (isAnyElementSelected()) 
    {
        if (canSelectElement(element))
        {
            changeSelectedElement(element)
        }
    }
     else if (isElementSelectedElement(element))     
    {
        unselectSelectedElement();
    } 
    else if (containsPawn(element))
    {
        return;
    }
     else if(isGoodMoveForOddRow(element))
    {
        makeMoveIfGood(element)
        isGameOver()
    }
    else if (isGoodMoveForEvenRow(element))
    {
        makeMoveIfGood(element)
        isGameOver()
    }
    else
    { 
        if(canDeleteLeftRight(element) || canDeleteOnEvenRow(element) || canDeleteOnOddRow(element) || canDeleteOnEvenRowEvenColumn(element) || canDeleteOnOddRowOddColumn(element) || canDeleteOnOddRowEvenColumn(element) || canDeleteOnEvenRowOddColumn(element) || canDeleteByColor(element)) 
        {
        if (currentPlayer == 1)
        {
           if (selectedElement.dataset.y % 2 == 0)
           {
            if (selectedElement.dataset.x - element.dataset.x == 1)
            {
                if (selectedElement.dataset.y - element.dataset.y == 2)
                {
                    deleteOpponent(parseInt(selectedElement.dataset.x) - 1, parseInt(selectedElement.dataset.y) - 1);
                    isGameOver()
                }
                else
                {
                    deleteOpponent(parseInt(selectedElement.dataset.x) - 1, parseInt(selectedElement.dataset.y) + 1);
                    isGameOver()
            
                }
               
            }
            else
            {
                if (selectedElement.dataset.y - element.dataset.y == 2)
                {
                    deleteOpponent(selectedElement.dataset.x, parseInt(selectedElement.dataset.y) - 1);
                    isGameOver()
                }
                else
                {
                    deleteOpponent(parseInt(selectedElement.dataset.x) - 1, parseInt(selectedElement.dataset.y) + 1);
                    isGameOver()
            
                }
            }
           }
           else
           {
            if (selectedElement.dataset.x - element.dataset.x == 1)
            {
                if (selectedElement.dataset.y - element.dataset.y == 2)
            {
                deleteOpponent(selectedElement.dataset.x, parseInt(selectedElement.dataset.y) - 1);
                isGameOver()
            }
            else
            {
                deleteOpponent(selectedElement.dataset.x, parseInt(selectedElement.dataset.y) + 1);
                isGameOver()
            }
           }
           else
                {
                    if (selectedElement.dataset.y - element.dataset.y == 2)
                    {
                        deleteOpponent(parseInt(selectedElement.dataset.x) +1, parseInt(selectedElement.dataset.y) - 1);
                        isGameOver()
                    }
                    else
                    {
                        deleteOpponent(parseInt(selectedElement.dataset.x) +1, parseInt(selectedElement.dataset.y) + 1);
                        isGameOver()
                    }  
                }   
           }
        }
        else
        {
            if (selectedElement.dataset.y % 2 == 0)
           {
            if (selectedElement.dataset.x - element.dataset.x == 1)
            {
                if (selectedElement.dataset.y - element.dataset.y == 2)
                {
                    deleteOpponent(parseInt(selectedElement.dataset.x) - 1, parseInt(selectedElement.dataset.y) - 1);
                    isGameOver()
                }
                else
                {
                    deleteOpponent(parseInt(selectedElement.dataset.x) - 1, parseInt(selectedElement.dataset.y) + 1);
                    isGameOver()
            
                }
               
            }
            else
            {
                deleteOpponent(selectedElement.dataset.x, parseInt(selectedElement.dataset.y) + 1);
                isGameOver()
            }
           }
           else
           {
            if  (selectedElement.dataset.x - element.dataset.x == 1)
            {
                if (selectedElement.dataset.y - element.dataset.y == 2)
            {
                deleteOpponent(selectedElement.dataset.x, parseInt(selectedElement.dataset.y) + 1);
                isGameOver()
            }
            else
            {
                deleteOpponent(selectedElement.dataset.x, parseInt(selectedElement.dataset.y) + 1);
                isGameOver()
            }
           }
           else 
           {
            if (selectedElement.dataset.y - element.dataset.y == 2)
            {
                deleteOpponent(selectedElement.dataset.x, parseInt(selectedElement.dataset.y) - 1);
                isGameOver()
            }
            else
            {
                deleteOpponent(parseInt(selectedElement.dataset.x) + 1, parseInt(selectedElement.dataset.y) + 1);
                isGameOver()
            
           }
        }
    }
    }
        movePieceToNewLocation(element)
        isGameOver()
        }
    }
}


function isAnyElementSelected()
{
    return selectedElement == null;
}

function canSelectElement(element)
{
 return (chessboard[element.dataset.y][element.dataset.x] == currentPlayer)
}

function changeSelectedElement(element)
{
    element.style.backgroundColor = "grey";
    selectedElement = element;
}

function isElementSelectedElement(element)
{
    return element == selectedElement;
}

function unselectSelectedElement()
{
    selectedElement.style.backgroundColor = "black";
    selectedElement = null;
}

function containsPawn(element)
{
    return (chessboard[element.dataset.y][element.dataset.x] > 0)
}

function isGoodMoveForOddRow(element)
{
   return selectedElement.dataset.y % 2>0 && (selectedElement.dataset.x == element.dataset.x || element.dataset.x == parseInt(selectedElement.dataset.x) +1) && (Math.abs(selectedElement.dataset.y - element.dataset.y) == 1)
}

function makeMoveIfGood(element)
{
    if (currentPlayer == 1 && selectedElement.dataset.y == parseInt(element.dataset.y) +1)
        {
            movePieceToNewLocation(element)
        }
        else if (currentPlayer == 2 && selectedElement.dataset.y == parseInt(element.dataset.y) -1)
        {  
            movePieceToNewLocation(element)
        }
}

function isGoodMoveForEvenRow(element)
{
    return selectedElement.dataset.y % 2==0 && (selectedElement.dataset.x == element.dataset.x || element.dataset.x == parseInt(selectedElement.dataset.x) -1 ) && (Math.abs(selectedElement.dataset.y - element.dataset.y) == 1)
}

function movePieceToNewLocation(element)
{
    chessboard[element.dataset.y][element.dataset.x] = currentPlayer;
    chessboard[selectedElement.dataset.y][selectedElement.dataset.x] = 0;

    element.appendChild(selectedElement.querySelector("img[src]"));
    selectedElement.style.backgroundColor = "black";
    selectedElement = null;

    
    currentPlayer = 3 - currentPlayer;
}

function canDeleteLeftRight(element) 
{
    if (currentPlayer == 1) 
    {
        return (Math.abs(selectedElement.dataset.x - element.dataset.x) == 1 && Math.abs(selectedElement.dataset.y - element.dataset.y) == 2);
    } 
    else 
    {
        return (Math.abs(selectedElement.dataset.x - element.dataset.x) == 1 && Math.abs(selectedElement.dataset.y - element.dataset.y) == 2);
    }
}

function canDeleteOnEvenRow(element) 
{
    return selectedElement.dataset.y % 2 == 0 && element.dataset.x == selectedElement.dataset.x - 1;
}

function canDeleteOnOddRow(element) 
{
    return !(selectedElement.dataset.y % 2 == 0) && element.dataset.x == parseInt(selectedElement.dataset.x) + 1; 
}

function canDeleteOnEvenRowEvenColumn(element) 
{
    return selectedElement.dataset.y % 2 == 0 && element.dataset.x % 2 == 0 && canDeleteLeftRight(element);
}

function canDeleteOnOddRowOddColumn(element) 
{
    return !(selectedElement.dataset.y % 2 == 0) && element.dataset.x % 2 !== 0 && canDeleteLeftRight(element);
}

function canDeleteOnOddRowEvenColumn(element) 
{
    return !(selectedElement.dataset.y % 2 == 0) && element.dataset.x % 2 == 0 && canDeleteLeftRight(element);
}

function canDeleteOnEvenRowOddColumn(element) 
{
    return selectedElement.dataset.y % 2 == 0 && element.dataset.x % 2 !== 0 && canDeleteLeftRight(element);
}

function canDeleteByColor(element) 
{
    const currentPlayerPawnColor = (currentPlayer == 1) ? 'white' : 'black';
    const opponentPawnColor = (currentPlayer == 1) ? 'black' : 'white';
    const isOpponentColor = element.querySelector(`img[src*=${opponentPawnColor}]`);
    return isOpponentColor;
}

function deleteOpponent(x, y)
{
    var field = document.querySelector('td[data-x="'+ x + '"][data-y="'+ y +'"]');

    field.querySelector('img').remove();

    chessboard[y][x] = 0;
}

function isGameOver() 
{
    var player1 = 0;
    var player2 = 0;
    var makeMovePlayer1 = 0;
    var makeMovePlayer2 = 0;

    for (var y = 0; y < chessboard.length; y++) 
    {
        for (var x = 0; x < chessboard[y].length; x++) 
        {
            if (chessboard[y][x] == 1) 
            {
                player1++;
                makeMovePlayer1 += checkMove(x, y, 1);
            } 
            else if (chessboard[y][x] == 2) 
            {
                player2++;
                makeMovePlayer2 += checkMove(x, y, 2);
            }
        }
    }

    if (player1 == 0 || player2 == 0) 
    {
        alert("Koniec gry: Wszystkie pionki jednego z graczy zostaly zbite.");
        return true;
    }

    if ((currentPlayer == 1 && makeMovePlayer1 == 0) || (currentPlayer == 2 && makeMovePlayer2 == 0)) 
    {
        alert("Koniec gry: Gracz " + currentPlayer + " nie ma dostepnych ruchow.");
        return true; 
    }
    return false; 
}

function checkMove(x, y, player) 
{
    var makeMove = 0;

    if (player == 1) 
    {
        if (y > 0) 
        {
            if (y % 2 == 0) 
            {
                if (x > 0 && chessboard[y - 1][x - 1] == 0) makeMove++; //parzysty - lewo 
                if (x < chessboard[y].length - 1 && chessboard[y - 1][x + 1] == 0) makeMove++; //parzysty - prawo
            } 
            else 
            {
                if (x > 0 && chessboard[y - 1][x] == 0) makeMove++; // nieparzysty - lewo
                if (x < chessboard[y].length - 1 && chessboard[y - 1][x + 1] == 0) makeMove++; // nieparzysty - prawo
            }
        }
    } 
    else 
    {
        if (y < chessboard.length - 1) 
        {
            if (y % 2 == 0) 
            {
                if (x > 0 && chessboard[y + 1][x - 1] == 0) makeMove++; // parzystyw - lewo
                if (x < chessboard[y].length - 1 && chessboard[y + 1][x + 1] == 0) makeMove++; // parzysty - prawo
            } 
            else 
            {
                if (x > 0 && chessboard[y + 1][x] == 0) makeMove++; //nieparzysty - lewo
                if (x < chessboard[y].length - 1 && chessboard[y + 1][x + 1] == 0) makeMove++; //nieparzysty - prawo
            }
        }
    }
    return makeMove;
}
