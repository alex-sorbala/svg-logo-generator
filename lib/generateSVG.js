const {Triangle, Circle, Square} = require('./shapes.js');

// A function to generate SVG
function generateSVG(data) {
  var backgroundShape;
  switch (data.shape) {
    case "circle":
      backgroundShape = new Circle(data.background);
      break;
    case "square":
      backgroundShape = new Square(data.background);
      break;
    case "triangle":
      backgroundShape = new Triangle(data.background);
      break;
    default:
      break;
  }


  return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  ${backgroundShape.render()}

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>

  </svg>`;
}

module.exports = generateSVG;
