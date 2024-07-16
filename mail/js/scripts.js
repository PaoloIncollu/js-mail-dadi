
/*step

    1. Creo un array che contenga i nomi utente autorizzati
    2. Chiedo all'utente il suo nome utente
    3. Controllo il nome utente inserito
        - se è presente nell'array, stampo un messaggio all'utente
          con scritto 'autorizzazione concessa'
        - altrimenti, stampo un messaggio all'utente
          con scritto 'autorizzazione negata'

*/

const userNames = [
    
    'paolo',         //creato l'array contenente i nomi utente
    'luca',
    'marco'
];

console.log(userNames); // visualizzazione in console

const userName = prompt('Inserisci nome utente'); // inserimento nome utente da parte dell'utente

console.log(userName);


for(let i = 0; i < userNames.length; i ++){

    if(userName == userNames[i]  ){
        
        console.log('Acesso autorizzato');

    } 
    else {

        console.log('Acesso negato');
    }
}



