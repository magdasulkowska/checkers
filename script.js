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
        movePieceToNewLocation(element)
        deleteOpponent(element);
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
    return Math.abs(selectedElement.dataset.x - element.dataset.x) == 1 && Math.abs(selectedElement.dataset.y - element.dataset.y) == 0;
}

function canDeleteOnEvenRow(element) 
{
    return selectedElement.dataset.y % 2 == 0 && element.dataset.x == selectedElement.dataset.x - 1;
}

function canDeleteOnOddRow(element) 
{
    return !(isEvenRow = selectedElement.dataset.y % 2 == 0) && element.dataset.x == parseInt(selectedElement.dataset.x) + 1;
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





