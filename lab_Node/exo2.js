"use strict";

let obj = {};

// Définition de la propriété avec configurable: false
Object.defineProperty(obj, "readOnly", {
  value: 42,
  writable: true, // permet de modifier la valeur de la propriété
  configurable: false // empêche la modification de la configuration et la suppression de la propriété
});

console.log(obj.readOnly); // Affiche 42

// Modification de la valeur de la propriété
obj.readOnly = 100;
console.log(obj.readOnly); // Affiche 100

// Tentative de reconfiguration de la propriété
try {
  Object.defineProperty(obj, "readOnly", {
    writable: false
  });
} catch (error) {
  console.log(error.message); // Affichera une erreur car la propriété n'est pas configurable
}

// Tentative de suppression de la propriété
delete obj.readOnly;
console.log(obj.readOnly); // Affiche toujours 100 car la suppression a échoué