
/*step

    1. generare un numero a caso da 1 a 6 per l'utente
    2. generare un numero a caso da 1 a 6 per il computer
    3. controllare i numeri generati
        - se i numeri sono equivalenti visualizzare il messaggio pareggio
        - se il numero dell'utente è maggiore di quello del computer
          visualizzare il messaggio hai vinto
        - altrimenti il messaggio hai perso
*/

//genero un numero a caso per l'utente

let userNumber = (Math.floor(Math.random() * 6) + 1);
console.log ('il numero generato per l\'utente è:', userNumber);

// genero un numero a caso per il computer

let cpuNumber = (Math.floor(Math.random() * 6) + 1);
console.log ('il numero generato per la cpu è:', cpuNumber);

// controllo i numeri generati e visualizzo il messaggio

if (userNumber == cpuNumber){

    console.log('pareggio');

}

else if ( userNumber > cpuNumber){

    console.log('hai vinto');
}
else{

    console.log('hai perso');

}