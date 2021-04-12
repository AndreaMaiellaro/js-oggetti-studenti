var studente = {
    'nome': 'Andrea',
    'cognome': 'Maiellaro',
    'eta': 22
};

for ( var chiave in studente ) {
    if (chiave == 'nome') {
        console.log('chiave :', chiave)
        console.log('nome :', studente[chiave]);   
    }
    if (chiave == 'cognome') {
        console.log('chiave :', chiave)
        console.log('cognome :', studente[chiave]);   
    }
    if (chiave == 'eta') {
        console.log('chiave :', chiave)
        console.log('eta :', studente[chiave]);   
    }
}