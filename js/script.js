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

//es 3
var nuovoNome = prompt('Inserisci il nome : ');
var nuovoCognome = prompt('Inserisci il cognome : ');
var nuovaEta = parseInt(prompt('Inserisci l eta : '));
nuovaPersona(nuovoNome, nuovoCognome, nuovaEta);

function nuovaPersona(nuovoNome, nuovoCognome, nuovaEta) {
    var something = [];
    something.push({
    "nome": nuovoNome,
    "cognome": nuovoCognome,
    "eta": nuovaEta,
  });
  console.log(something);
  something.push(studenti);
}
