class Pawn 
{
    constructor()
    {
        this.chessboard = new Chessboard();
        this.currentPlayer = currentPlayer; 
        this.selectedElement = null; 
    }
    
isGoodMoveForOddRow(element)
{
   return this.selectedElement.dataset.y % 2>0 && (this.selectedElement.dataset.x == element.dataset.x || element.dataset.x == parseInt(this.selectedElement.dataset.x) +1) && (Math.abs(this.selectedElement.dataset.y - element.dataset.y) == 1)
}

isGoodMoveForEvenRow(element)
{
    return this.selectedElement.dataset.y % 2==0 && (this.selectedElement.dataset.x == element.dataset.x || element.dataset.x == parseInt(this.selectedElement.dataset.x) -1 ) && (Math.abs(this.selectedElement.dataset.y - element.dataset.y) == 1)
}

makeMoveIfGood(element)
{
    if (currentPlayer == 1 && this.selectedElement.dataset.y == parseInt(element.dataset.y) +1)
        {
            this.movePieceToNewLocation(element)
        }
        else if (this.currentPlayer == 2 && this.selectedElement.dataset.y == parseInt(element.dataset.y) -1)
        {  
            this.movePieceToNewLocation(element)
        }
}

movePieceToNewLocation(element)
{
    this.chessboard[element.dataset.y][element.dataset.x] = this.currentPlayer;
    this.chessboard[this.selectedElement.dataset.y][this.selectedElement.dataset.x] = 0;

    element.appendChild(this.selectedElement.querySelector("img[src]"));
    this.selectedElement.style.backgroundColor = "black";
    this.selectedElement = null;

    
    this.currentPlayer = 3 - this.currentPlayer;
}
}