/*
 1 - operators context
 2 - Precisamos de operadores, quando necessitamos de fazer qualquer tipo de operação com a linguagem. 
     Portanto existem vários operadores para satisfazer nossas necessidades;
*/

/* 
  examples of operators context
*/
/* arithmetic operators */
var num = 0; // output -> 0;
console.log(num);
num = num + 2; // output -> 2;
console.log(num);
num = num * 3; // output -> 6;
console.log(num);
num = num / 2; // output -> 3;
console.log(num);
num++; // output -> 4;
console.log(num);
num--; // output -> 3;
console.log(num);
/*assignment operators*/
num += 1; //output -> 4;
console.log(num);
num -= 2; //output -> 2;
console.log(num);
num *= 3; //output -> 6
console.log(num);
num /= 2; //output -> 3
console.log(num);
num %= 3; //output -> 0;
console.log(num);
/*comparison operators {result aways boolean}*/
console.log("num == 1 : " + (num == 1)) // -> boolean output -> false;
console.log("num === 1 : " + (num === 1)) // -> boolean output -> false;
console.log("num != 1 : " + (num != 1)) // -> boolean output -> true;
console.log("num !== 1 : "  + (num !== 1)) // -> boolean output -> true;
console.log("num > 1 : " + (num > 1));// -> boolean output -> false;
console.log("num < 1 :" + (num < 1)); // -> boolean output -> true;
console.log("num >= :" + (num >= 1)) // -> boolean output -> false;
console.log("num <= :" + (num <= 1)) // -> boolean output -> true;
/*logics operators {result aways boolean}*/
console.log("true && false : " + (true && false)); // boolean output -> false;
console.log("true || false : " + (true || false)); // boolean output -> true;
console.log("!true : " + (!true)); // boolean output -> false;
/* operatores bit a bit (bitwise) */
//0001010 -> bin;
//0001101 -> bin;
console.log("5 & 1: " + (5 & 1)); // aonde eu tiver equivalencia de bit 1, ele retorna bit 1;
console.log("5 | 1 : " + (5 | 1)) // aonde eu tiver bit 1 independente se ele ta equivalente a 1 ou não sempre vai retornar 1;
console.log("~ 5: " , (~5)); // aonde eu tiver bit 1 ele transforma para bit 0, e a onde eu tiver bit 0, ele transforma para bit 1;
console.log("5 ^ 1 : ", (5 ^ 1)); // onde tiver equivalencia de bit 1, ele retorna 0;
console.log("5 << 1 : ", (5 << 1)); // removendo um bit da esquerda,e deslocando todos os outros bits;
console.log("5 >> 1 : ", (5 >> 1)) // removendo um bit da direita ,e deslocando todos os outros bits;
/*[Atention]*/
let x = 0;
x = 10 & 50; // -> ocupar um conjunto de bits na memória -> conjunto binário;
//byte do valor 10;
console.log(x)
x = 8 * 1; // -> mais performatica
x = 1 * 8 // -> quer dizer que eu estou fazendo 8x a multiplicação por 1;
/* typeof operator */
// -> operator to validate data type
console.log("typeof num : ", typeof 1) // value output -> number;
console.log("typeof Packt : ", typeof "Packt") // value output -> string;
console.log("typeof true : ", typeof true) // value output -> boolean;
console.log("typeof [1,2,3] : ", typeof [1,2,3]) // value output -> object;
console.log("typeof {name:John} : ", typeof {name: "John"}) // value output -> object;
/* [Atention] */
/* 
  Javascript has 2 types of data.
  1-primitive data types -> null, undefined, string, number, boolean and symbol.
  2-derived data types -> objects javascript, functions, arrays, and regular expressions.
*/

/* delete operator of objects*/
const myObj = {name: "John", age: 22}
console.log(myObj)
delete myObj.age;
console.log(myObj)
delete myObj.name;
console.log(myObj)