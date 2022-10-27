"use strict";

//Creo una lista della spesa

const viveri = [
    'pane',
    'pasta',
    'frutta',
    'acqua',
    'patate',  
];
//Assegno l'index ad una variabile
let i = 0;
//Replico con un ciclo while
while (i < viveri.length) {    
    const listItem = document.createElement("li");
    listItem.innerHTML = viveri[i];
    document.getElementById("list").append(listItem);
    console.log(viveri[i]);
    i++; //Rendo false la condizione altrimenti diveterebbe un ciclo infinito
}

