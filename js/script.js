//es 1
var studente = {
    'nome': 'Andrea',
    'cognome': 'Maiellaro',
    'eta': 22
};

for ( var chiave in studente ) {

    console.log('chiave :', chiave)
    console.log(chiave + ': ' + studente[chiave]);   

}

//es 2 
var studenti = [
    {
        'nome': 'Ciro',
        'cognome': 'Esposito',
        'eta': 16
    },
    {
        'nome': 'Alberto',
        'cognome': 'Bianchi',
        'eta': 36
    },
    {
        'nome': 'Mario',
        'cognome': 'Rossi',
        'eta': 25
    },
    {
        'nome': 'Silvio',
        'cognome': 'Berlusconi',
        'eta': 70
    },
];

for ( var i = 0; i < studenti.length; i++ ) {
    console.log(studenti[i].nome);   
    console.log(studenti[i].cognome);
}

