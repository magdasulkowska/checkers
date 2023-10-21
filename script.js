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
        if(selectedElement != null) 
        {
            element.appendChild(selectedElement.childNodes[0]);
            selectedElement.style.backgroundColor="black";
            selectedElement = null;
        }
    }
 }

