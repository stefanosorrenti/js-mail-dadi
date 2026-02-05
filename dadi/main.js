//TRACCIA


/*

Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?

Consigli del giorno:
scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
si ma noi cosa vogliamo fare?
torniamo a scrivere in italiano
proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

Buon  divertimento! e confermate lettura :babyyoda: 


*/

//HUMAN CODE


/*Cosa deve fare il software:

-deve generare un numero per il  giocatore 
    -usiamo mathrandom
-deve generare un numero per il computer
    -usiamo mathrandom
SE il numero del giocatore è piu alto
    -valutiamo tramite l'operatore relazionale
    -stampa 'ha vinto il giocatore
ALTRIMENTI SE il numero  del computer è più alto
    -valutiamo tramite l'operatore relazionale
    -stampa 'ha vinto il computer'

ALTRIMENTI 
    -Stampa 'non ha vinto nessuno, ricaricare la pagina'


*/


//DATA
const userNumber = Math.floor(Math.random() * (6 - 1 + 1)) + 1 //deve generare un numero per il  giocatore
const pcNumber = Math.floor(Math.random() * (6 - 1 + 1)) + 1 //deve generare un numero per il computer



