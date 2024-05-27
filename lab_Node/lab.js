/*function display(){
    for(let i=0; i<10; i++)
        {
            console.log("i = "+i);
        }

    console.log("i = "+i);
}

display();*/
/*
class Produit{

    //private libelle:string ;
    //private prix : number;

    public constructor(private libelle?:string, private prix?:number){
        this.libelle = libelle;
        this.prix = prix;
    }

    public info(){
        console.log("Libelle : "+this.libelle +" Prix : "+this.prix);
    }
}

let produit : Produit = new Produit("Phone",1200);
produit.info();

let produit2 : Produit = new Produit();
produit2.info();

interface Product{
    title:string,
    body:string
}

let p : Product = {title:"t1", body:"b1"};
console.log(p.title);
console.log(p.body);*/
/*
let info = (nom:string, prenom : string)=>{console.log(`Nom : ${nom}, Prénom : ${prenom}`)};

info("Mohamed Amine","Mezghich");

let tab = [10,4,6,1,5];

tab.sort((a,b)=>b-a)

console.log(tab);*/
/*
const object1 = {
    a: 'somestring',
    b: 42,
    c: false,
  };
  console.log(Object.values(object1));*/
"use strict";
const obj = {
    property1: 42,
};
// Définition du descripteur de propriété pour property1 avec configurable: false
Object.defineProperty(obj, 'property1', {
    configurable: false,
});
console.log(Object.getOwnPropertyDescriptors(obj));
// Tentative de redéfinition de la propriété property1
Object.defineProperty(obj, 'property1', {
    value: 100,
});
console.log(obj.property1); // Output: 42
