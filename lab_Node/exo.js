"use strict";

let obj = {};

// Définition de la propriété avec writable: false
Object.defineProperty(obj, "fixedValue", {
  value: 30,
  writable: false, // empêche la modification de la valeur de la propriété
  configurable: true // permet la reconfiguration de la propriété
});

console.log(obj.fixedValue); // Affiche 30

// Tentative de modification de la valeur de la propriété
//obj.fixedValue = 100;
//console.log(obj.fixedValue); // Toujours 30, car la modification est interdite

// Reconfiguration de la propriété pour permettre l'écriture
Object.defineProperty(obj, "fixedValue", {
  writable: true
});

// Modification de la valeur après reconfiguration
obj.fixedValue = 100;
console.log(obj.fixedValue);