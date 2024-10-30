/* 
 variables scope context
 O escopo refere-se ao lugar onde possamos acesar a variável no nosso algoritmo;
 as variáveis podem ser locais ou globais
*/

/*
  examples of  variables scope context
*/

var myVariable = "global"; // variable -> global
myOtherVariable = "global"; // variable -> global;

function myFunction() {
  var myVariable = "local"; // variable -> local;
  return myVariable; // -> return of value of myVariable;
}

function myOtherFunction() {
  myOtherVariable = "local"; //variable assignment value myOtherVariable;
  return myOtherVariable; // return of value of myOtherVariable;
}

console.log(myVariable); // output of myVariable;
console.log(myFunction()); //output of myFunction;
console.log(myOtherVariable); //output of myOtherVariable;
console.log(myOtherFunction()); //output of myOtherFunction;
console.log(myOtherVariable); //output of myOtherVariable;
