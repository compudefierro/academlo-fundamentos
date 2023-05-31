{
    // ! ejemplo 1
    // var cajita = "gato";
    // var otraVariable = cajita;
    // console.log(otraVariable); // gato
    // cajita = "perro";
    // console.log(cajita); // perro
}

{
    // ! ejemplo 2
    // var name = "brayan";
    // var age = 23;
    // console.log("hola mi nombre es " + name + "\ny mi edad son " + age);
    // console.log(`Hola mi nombre es ${name} y mi edad son ${age}`);
}

// let => se puede reasignar su valor pero no se puede redeclarar, tiene un alcance (scope) local - de bloque
// const => no se puede reasignar su valor y tampoco se puede redeclarar - tiene un alcance (scope) local - de bloque
// var => se puede reasignar y tambien redeclarar - tiene un alcance (scope) - global

// ! let
// let age = 23;
// age = 24;

// console.log(age);

// ! const
// const id = 1001;
// id = 1002;

// console.log(id);

// ! var
// var caja = "gato";
// var caja = "perro";

// console.log(caja);

// ! scope
// {
//     let age = 23;
//     const id = 1001;

//     console.log(age, id);
// }

var cajita = "perro";
let age = 24;
const id = 1002;

{
    age = 23;
    // id = 1001;
    cajita = "gato";
}

console.log(age, id);
