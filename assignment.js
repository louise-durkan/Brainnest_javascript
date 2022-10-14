// diagonal =square root of 2a


//find a diagonal of a square with length of side 9.
let sqrLength = 9;
let diagonal = 0;
diagonal = Math.sqrt(2) * sqrLength;
console.log(diagonal);

/* find the area of a triangle where lengths of the three of its sides
are 5, 6, 7 */
let sideA = 5;
let sideB = 6;
let sideC = 7;
let area = 0;

area = 0.25 * Math.sqrt(sideA + sideB + sideC) * Math.sqrt((-sideA + sideB + sideC)*(sideA - sideB + sideC))
* Math.sqrt(sideA + sideB - sideC);

console.log(area);

/* Find the circumference and surface area of a circle whose radius is 4 */
let radius = 4;
let circumference = 0;
let surfaceArea = 0;
const PI = 3.141592653589793238;

circumference = 2 * PI * radius;
surfaceArea = PI * Math.pow(radius,2);
console.log(circumference);
console.log(surfaceArea);

//Display the higher of two integers
function higherInteger(a, b){
  if(a > b){
    console.log(a);
  }
  else{
    console.log(b);
  }
}

higherInteger(7,2);

//Check if integer is odd or even
function isOddOrEven(n){
  var isWhole = (n - Math.floor(n)) !== 0;

  if(isWhole == 0){
    if(n % 2 == 0){
      console.log(`${n}: This integer is even.`);
    }
    else{
      console.log(`${n}: This integer is odd.`);
    }
  }
  else{
    console.log(`${n}: This is a float number, please enter a whole number`);
  }

  }
  isOddOrEven(9);
