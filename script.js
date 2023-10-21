var selectedElement = null;


function select(element)
{
    if(selectedElement != null) 
    {
        selectedElement.style.backgroundColor="black";
    }

    if(selectedElement == element)
    {
        selectedElement = null;
    }

    if (element.querySelector("img[src]"))
    {
        element.style.backgroundColor="grey";
        selectedElement = element;
    }

    else 
    {
        alert("Alert: Kliknięto miejsce bez pionka.");
    }
 }

