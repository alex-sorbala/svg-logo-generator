class Shape {
    color;
    constructor(color) {
        this.color = color;
    }
}

class Triangle extends Shape{
    constructor(color){
        super(color);
    }
    
    render(){
        return `<polygon points="150,0 30,165 270,165" fill="${this.color}" />`
    }
}

class Circle extends Shape{
    constructor(color){
        super(color);
    }
    
    render(){
        return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`
    }
}

class Square extends Shape{
    constructor(color){
        super(color);
    }
    
    render(){
        return `<rect x="75" y="25" width="150" height="150" fill="${this.color}"/>`
    }
}

module.exports = {
    Triangle : Triangle, 
    Circle: Circle, 
    Square: Square
};