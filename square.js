class Square
{
    constructor(element)
    {
        this.element = element;
        this.selected = false;
    }

    isSelected()
    {
        return this.selected;
    }

    select()
    {
        this.element.style.backgroundColor = "grey"; 
        this.selected = true;
    }

    unSelect()
    {
        this.element.style.backgroundColor = "black"; 
        this.selected = false;
    }

    setPawn(pawn)
    {
        this.pawn = pawn;
    }

    removePawn()
    {
        this.pawn = null;
    }

    getPawn()
    {
        return this.pawn;
    }
}