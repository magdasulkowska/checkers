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
    else if(canDeletOpponent(element))
    {
        deleteOpponent(element);
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


function canDeletOpponent(element) 
{
    var againstPlayer = 3 - currentPlayer;
    var step = 2 - currentPlayer;
    var targetY = parseInt(selectedElement.dataset.y) + step;
    var targetXLeft = parseInt(selectedElement.dataset.x) - 1;
    var targetXRight = parseInt(selectedElement.dataset.x) + 1;

    function isCorrectCoordinate(y, x) 
    {
        return y >= 0 && y < chessboard.length && x >= 0 && x < chessboard[0].length;
    }

    return (isCorrectCoordinate(targetY + step, targetXLeft) && chessboard[targetY + step][targetXLeft] == againstPlayer || isCorrectCoordinate(targetY + step, targetXRight) && chessboard[targetY + step][targetXRight] == againstPlayer);
}

function deleteOpponent(element)
{

}





