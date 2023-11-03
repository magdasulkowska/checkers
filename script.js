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
            currentlySelectedElement(element)
        }
    }
     else if (isElementSelectedElement(element))     
    {
        unselectSelectedElement();
    } 
    else if (cellContents(element))
    {
        return;
    }
     else 
    {
        movePieceToNewLocation(element)
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

function currentlySelectedElement(element)
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

function cellContents(element)
{
    return (chessboard[element.dataset.y][element.dataset.x] > 0)
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