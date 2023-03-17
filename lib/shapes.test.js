const {Triangle, Circle, Square} = require('./shapes.js');

// A testing suite for Arithmetic is created.
describe('Shapes', () => {
    // A test is created to check that sum does in fact return the two numbers added together.
    describe('Triangle', () => {
      it('create and render a triangle object', () => {
        expect(new Triangle('blue').render()).toEqual(`<polygon points="150,0 30,165 270,165" fill="blue" />`);
      });
    });
  });

describe('Shapes', () => {
    // A test is created to check that sum does in fact return the two numbers added together.
    describe('Circle', () => {
      it('create and render a circle object', () => {
        expect(new Circle('blue').render()).toEqual(`<circle cx="150" cy="100" r="80" fill="blue"/>`);
      });
    });
  });

describe('Shapes', () => {
    // A test is created to check that sum does in fact return the two numbers added together.
    describe('Square', () => {
      it('create and render a square object', () => {
        expect(new Square('blue').render()).toEqual(`<rect x="75" y="25" width="150" height="150" fill="blue"/>`);
      });
    });
  });