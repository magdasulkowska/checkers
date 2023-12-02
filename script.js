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
    }
    else if (isGoodMoveForEvenRow(element))
    {
        makeMoveIfGood(element)
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
                deleteOpponent(selectedElement.dataset.x - 1, selectedElement.dataset.y - 1);
            }
            else
            {
                deleteOpponent(selectedElement.dataset.x, selectedElement.dataset.y - 1);
            }
           }
           else
           {
            if (selectedElement.dataset.x - element.dataset.x == 1)
            {
                deleteOpponent(selectedElement.dataset.x, selectedElement.dataset.y - 1);
            }
            else
            {
                deleteOpponent(selectedElement.dataset.x + 1, selectedElement.dataset.y - 1);
            }
           }
           
        }
        else
        {
            if (selectedElement.dataset.y % 2 == 0)
           {
            if (selectedElement.dataset.x - element.dataset.x == 1)
            {
                deleteOpponent(selectedElement.dataset.x - 1, selectedElement.dataset.y + 1);
            }
            else
            {
                deleteOpponent(selectedElement.dataset.x, selectedElement.dataset.y + 1);
            }
           }
           else
           {
            if (selectedElement.dataset.x - element.dataset.x == 1)
            {
                deleteOpponent(selectedElement.dataset.x, selectedElement.dataset.y + 1);
            }
            else
            {
                deleteOpponent(selectedElement.dataset.x + 1, selectedElement.dataset.y + 1);
            }
           }
        }
        movePieceToNewLocation(element)
        
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
   return selectedElement.dataset.y % 2>0 && (selectedElement.dataset.x == element.dataset.x || element.dataset.x == parseInt(selectedElement.dataset.x) +1)
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
    return selectedElement.dataset.y % 2==0 && (selectedElement.dataset.x == element.dataset.x || element.dataset.x == parseInt(selectedElement.dataset.x) -1)
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
        return (Math.abs(selectedElement.dataset.x - element.dataset.x) == 1 && Math.abs(selectedElement.dataset.y - element.dataset.y) == 2)  && element.dataset.y < selectedElement.dataset.y;
    } 
    else 
    {
        return (Math.abs(selectedElement.dataset.x - element.dataset.x) == 1 && Math.abs(selectedElement.dataset.y - element.dataset.y) == 2) && element.dataset.y > selectedElement.dataset.y;
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

    field.querySelector('img').remove()
}

function isGameOver() 
{
    if (areAllOpponentPawnsDeleted()) 
    {
        alert("Koniec gry! Zbiłeś wszystkie pionki przeciwnika.");
        return true;
    }

    let allOpponentPawnBlocked = true;

    for (let i = 0; i < 8; i++) 
    {
        for (let j = 0; j < 4; j++) 
        {
            if (chessboard[i][j] == 3 - currentPlayer) 
            {
                if (!isPawnBlocked(j, i)) 
                {
                    allOpponentPawnBlocked = false;
                    break;
                }
            }
        }
        if (!allOpponentPawnBlocked) 
        {
            break;
        }
    }

    if (allOpponentPawnBlocked) 
    {
        alert("Koniec gry! Wszystkie pionki przeciwnika są zablokowane.");
        return true;
    }

    return false;
}

function areAllOpponentPawnsDeleted() 
{
    for (let i = 0; i < chessboard.length; i++) 
    {
        for (let j = 0; j < chessboard[i].length; j++) 
        {
            if (chessboard[i][j] == 3 - currentPlayer) 
            {
                return false; 
            }
        }
    return true;
}

function isPawnBlocked(x, y) 
{
    if((y % 2 == 0 && x > 0 && chessboard[y - 1][x - 1] == 0) ||
    (y % 2 == 0 && x > 0 && chessboard[y - 1][x + 1] == 0) ||
     (y % 2 == 1 && x < 3 && chessboard[y - 1][x + 1] == 0) ||
     (y % 2 == 1 && x < 3 && chessboard[y - 1][x - 1] == 0) ||
     (y % 2 == 0 && x > 0 && chessboard[y + 1][x - 1] == 0) ||
     (y % 2 == 0 && x > 0 && chessboard[y + 1][x + 1] == 0) ||
      (y % 2 == 1 && x < 3 && chessboard[y + 1][x + 1] == 0) ||
      (y % 2 == 1 && x < 3 && chessboard[y + 1][x - 1] == 0))
    {
        return false; 
    }
         return true; 
    }
}
