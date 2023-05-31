"use strict";

// number
let num1 = 10;
let num2 = 2;
console.log(num1 + num2); // suma
console.log(num1 - num2); // resta
console.log(num1 * num2); // multi
console.log(num1 / num2); // div
console.log(num1 ** num2); // potencia
console.log(num1 % num2); // modulo
console.log(Math.sqrt(9));
console.log(Math.floor(Math.random() * 10));

// strings
console.log("hola ".repeat(3));
let miNombre = "Jorgee";
console.log(miNombre[0]);
console.log(miNombre[1]);
console.log(miNombre[2]);
console.log(miNombre[3]);
console.log(miNombre[4]);
console.log(miNombre.toUpperCase());
console.log(miNombre.toLowerCase());
console.log(miNombre.replace("e", "E"));
console.log(miNombre.replaceAll("e", "E"));
console.log("*".repeat(5).padEnd(5, "0"));
console.log("*".repeat(4).padEnd(5, "0"));
console.log("*".repeat(3).padEnd(5, "0"));
console.log("*".repeat(2).padEnd(5, "0"));
console.log("*".repeat(1).padEnd(5, "0"));
let nombreLargo = "Jorge;Osvaldo;Dri";
console.log(nombreLargo.split(";").join(" "));

// boolean
console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean());

// null

// undefined
let named;
console.log(named);
