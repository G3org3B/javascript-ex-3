

// CHIEDERE A UN UTENTE IL SUO COGNOME,INSERISCILO IN UN ARRAY CON ALTRI COGNOMI E STAMPA LA LISTA ORDINATA ALFABETICAMENTE
// SCRIVI A CHE POSIZIONE DELLA LISTA IL NUOVO UTENTE SI TROVA.


//CREARE VAR ARRAY CON DENTRO COGNOMI

var lista_cognomi = ["Bianchi", "Rossi", "Pippo", "Neri"];
console.log([lista_cognomi]);
// PROMPT PER CHIEDERE COGNOME ALL'UTENTE

var cognome_utente = prompt("Inserire il Cognome:")
console.log(cognome_utente);
// INSERIRE IL COGNOME UTENTE RICEVUTO NELL'ARRAY CON PUSH

lista_cognomi.push(cognome_utente);
console.log([lista_cognomi]);

// CICLO DI CONTROLLO INSERIMENTO
 //for (var conteggio = 0; conteggio < lista_cognomi.length; conteggio++) {
  //console.log(lista_cognomi[conteggio]);
// }

//METTERE IN ORDINE ALFABETICA GLI ARRAY

lista_cognomi.sort()
console.log(lista_cognomi.sort());

// INDIVIDUARE E STAMPARE LA POSIZIONE DEL UTENTE NELLA LISTA

var utente_trovato = false;

var conteggio = 0;


while (!utente_trovato && conteggio < lista_cognomi.length) {
  console.log((!utente_trovato && conteggio < lista_cognomi.length));
  if (cognome_utente == lista_cognomi[conteggio]){
    console.log(cognome_utente == lista_cognomi[conteggio]);
    utente_trovato = true;
    console.log(utente_trovato = true);
  }

    conteggio++;
    console.log(conteggio++);

}
// STAMPARE LA LISTA UTENTI

document.getElementById("Lista_cognomi").innerHTML = [lista_cognomi];


// STAMPARE POSIZIONE UTENTE
var position = lista_cognomi.indexOf(cognome_utente)
document.getElementById('position').innerHTML = position;
