// parent
class FlatSahpes{
    constructor(side,length, width){
        this.side = side;
        this.length = length;
        this.width = width;

    }
}

// Class Square
class Square extends FlatSahpes{
    constructor(side, length, width){
        super(side)

    }

    calculateSquareArea(){
        return this.side * this.side
    }

    calculatePerimeterSquare(){
        return 4 * this.side;
    }

    

     

}


// Class Retangle
class  Rectangle extends FlatSahpes{
    constructor(length, width){
        super();
        this.length = length;
        this.width = width;

    }

    calculateRectangleArea(){
        return this.length * this.width;

    }

    calculateRectanglePerimeter(){
        return 2 * (this.length + this.width);
    }
}



module.exports = {
    Square, Rectangle
}