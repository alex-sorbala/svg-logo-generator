// generate circle
function circle(color){
  return ` <circle cx="150" cy="100" r="80" fill="${color}"/>`
}
// generate square
function square(color){
  return `<rect x="75" y="25" width="150" height="150" fill="${color}"/>`
}
// generate trinagle
function triangle(color){
  return `<polygon points="150,0 30,165 270,165" fill="${color}" />`
}

// A function to generate SVG
function generateSVG(data) {
  var backgroundShape;
  switch (data.shape) {
    case "circle":
      backgroundShape = circle(data.background);
      break;
    case "square":
      backgroundShape = square(data.background);
      break;
    case "triangle":
      backgroundShape = triangle(data.background);
      break;
    default:
      break;
  }


  return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  ${backgroundShape}

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>

  </svg>`;
}

module.exports = generateSVG;
