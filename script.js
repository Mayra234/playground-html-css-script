/**
 * Las variables se definen:
 * var nombre = 'Juan';  --> Tipo string
 * var numero = 18; --> Tipo number
 * var esCasado = false; --> Tipo boolean
 * var esMayorDeEdad = true; --> Tipo boolean
 */

// 2 == '2' true
// 2 === '2' false

var a = 5;
var b = 5;
var c = 3;
var sum = a + b + c;
var product = a * b;
const division = c / b;
console.log(sum);
console.log(product);
console.log(division);

//Notación camelCase (Notación joroba de camello)
var firstName = "Luis";
var lastName = "Ramírez";
var fullName = firstName + " " + lastName;
console.log(fullName);

firstName = "Pepe";
lastName = "Grillo";
fullName = firstName + " " + lastName;
console.log(fullName);

firstName = "Laura";
lastName = " Martínez";
fullName = firstName + " " + lastName;
console.log(fullName);

var wordOne = "oso";
var wordTwo = "pez";
var wordThree = "gato";
var wordFour = "carro";
var wordFive = "vela";
var wordSix = "ancho";

var resultOne = wordOne + " " + wordTwo + " " + wordThree;
console.log(resultOne);

var resultTwo = wordFour + " " + wordOne + " " + wordSix;
console.log(resultTwo);

// fullname tiene una mascota que es el animal wordOne

var sentenceOne = fullName + " tiene una mascota que es el animal " + wordTwo;
console.log(sentenceOne);

var sentenceTwo = firstName + " tiene una mascota que es el animal " + wordTwo;
console.log(sentenceTwo);

var nombre = "Alfonso";
var apellido = "Pepe";
var edad = 21;

var frase = nombre + " " + apellido + " tiene " + edad + " años";
console.log(frase);

/**
 * nacionalidad
 * pais
 * tiempo
 */

// Yo soy colombiana y llevo viviendo 20 años en Colombia

var nacionalidad = "colombiana";
var pais = "Colombia";
var tiempo = 20;
var fraseDos =
  "Yo soy " + nacionalidad + " y llevo viviendo " + tiempo + " años en " + pais;
console.log(fraseDos);
