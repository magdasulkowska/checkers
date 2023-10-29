var selectedElement = null;
var currentPlayer = 'white';

function select(element) 
{
    if (selectedElement == null) 
    {
        if (element.querySelector("img[src]") && element.querySelector("img[src]").alt.includes(currentPlayer)) 
        {
            element.style.backgroundColor = "grey";
            selectedElement = element;
        }
    }
     else if (element == selectedElement) 
    
    {
        selectedElement.style.backgroundColor = "black";
        selectedElement = null;
    } 
    else if (element.querySelector("img[src]") && element.querySelector("img[src]").alt != (currentPlayer)) 
    {
        return;
    }
     else 
    {
        element.appendChild(selectedElement.querySelector("img[src]"));
        selectedElement.style.backgroundColor = "black";
        selectedElement = null;

        if (currentPlayer == 'white') 
        {
            currentPlayer = 'black';
        } 
        else
        {
            currentPlayer = 'white';
        }
    }
}
