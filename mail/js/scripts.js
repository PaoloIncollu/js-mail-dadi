
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

console.log(userNames); 

const userName = prompt('Inserisci nome utente'); // inserimento nome utente da parte dell'utente

if (userNames.includes(userName)){ //verifica se il nome utente è presente
            
    console.log('autorizzazione concessa');

}

else {

    console.log('autorizzazione negata');
    
}


    




