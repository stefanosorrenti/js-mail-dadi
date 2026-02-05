//TRACCIA



/*


Mail
Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.

Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
Si può fare? Certo che si basta ragionare un po’.

Nota: 
Non è necessario provvedere alla validazione delle email


Consigli del giorno:
scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
si ma noi cosa vogliamo fare?
torniamo a scrivere in italiano
proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"


*/



//HUMAN CODE

//COSA DEVE FARE IL SOFTWARE:


/*
-creare una whitelist di email
-domandare all'utente la sua email
-controlo ad uno a uno l'email nella whitelist
-SE l'email è nella lista
    -notifico l'utente
*/

//SEMI-CODE

/*

-creo un array di stringhe
-creo un prompt
    IF il prompt == array
        -loggo/let messaggio che può accedere

    ELSE 
        --loggo/let messaggio che non può accedere


*/

//DATA

//creare una whitelist di email
const emailList = ['tiziocaio@gmail.com', 'vincenzochieti@hotmail.it', 'matteotaddone02@libero.com', 'leonoardocirulli99@alice.it', 'lueguniondXD@outlook.it']

//domandare all'utente la sua email
const userMail = prompt('Scrivi la tua email per verificare se sei stato invitato.')



let invite = 'Non sei invitato.'


//controlo ad uno a uno l'email nella whitelist
for (i = 0; i < emailList.length; i++) {
    /* console.log('print', emailList[i]); */

    //SE l'email è nella lista
    if (userMail === emailList[i]) {
        /* console.log('ci sei', emailList[i]); */
        invite = `Sei invitato ${emailList[i]}` //notifico l'utente

    }


}

console.log(invite);

/*la variabile va dichiarata come 'non sei inviato' fuori dai blocchi di codice,  
quando si verificherà la nostra condizione non faremo altro che sovrascriverla, perch+ è una variabile
con scope globale quindi so farà sovrascrivere da un element odentro un block*/