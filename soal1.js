// memanggil module

const {Square, Rectangle  } = require('./moduleflatshapes')

// Square
const square = new Square(8);
console.log('persegi');
console.log('luas persegi = ', square.calculatePerimeterSquare());
console.log('keliling persegi = ',square.calculateSquareArea());


console.log(`persegi panjang`)
let lenght = 8;
let width = 12;
const rectangle = new Rectangle(lenght, width)
console.log('luas persegi Panjang = ', rectangle.calculateRectangleArea());
console.log('keliling persegi Panjang = ',rectangle.calculateRectanglePerimeter());
