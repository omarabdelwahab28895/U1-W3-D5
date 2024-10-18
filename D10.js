/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
let sum = 10 + 20

console.log(sum)
/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
let random = Math.floor(Math.random() * 21);
//MOLTIPLICO PER 21 IN QUNATO MATH.FLOOR ARROTONDA IL RISULTATOVPER DIFETTO SENZA DEIMALI E USO MATH.RANDOM CHE GENERA UN NUMERO TRA 0 E 1 CON UN ESCLUSO.//
console.log(random);
/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
let me = {
  name: "Omar",
  surname:"Abd El Wahab",
  age: 25
}
console.log(me)
/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
delete me.age

console.log(me)
/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
me.skills =[]
// creo un array vuoto dentro alla funzione me ed in seguito inserisco tramite il "push" i linguaggi che conosco//
me.skills.push("Javascript")
me.skills.push("Java")

console.log(me)
/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
me.skills.push("Python")
me.skills.push("PHP")

console.log(me)
/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
let removedskills = me.skills.pop() 
//uso la funzione pop che rimuove l'ultima elemento di un array//
console.log(me)

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
function dice() {
  return Math.floor(Math.random() * 6) + 1
}
//come nell'esercizio B uso Math.floor e Math.random per generare un numero tra 1 e 6 compresi//
let result = dice()
console.log("Il numero generato è", result)
/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
function whoIsBigger(n1, n2){
  if (n1 > n2){
    return n1
  } else {
    return n2
  }
}
// in questo caso dopo aver creato la funzione uso if per vedere le due situazioni che possono capitare avendo due numeri e li metto a confronto in modo tale da far tornare il numero più grande//

let biggerNum = whoIsBigger(5, 15)
console.log("Il numero maggiore è ", biggerNum)
/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
function splitMe(str) {
  return str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1))
}
//creo la funzione contenente la stringa uso il metodo split per dividere le parole della stringa in seguito uso map per creare un array//
//uso charAt per prendere la prima lettere di ogni parola ed usa toUpperCase per mettere la maiuscola alla prima lettere e uso world slice per prendere il resto della parola dalla seconda lettera usando l'inidce//
  let result1 = splitMe("I love coding")
  console.log(result1)

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
function deleteOne(str, shouldDeleteFirst) {
  if (shouldDeleteFirst) {
      return str.slice(1)
  } else {
      return str.slice(0, -1)
  }
}
//dopo che do i 2 parametri alla funzione studio con if i due casi del boleano in base al risultato che esce. se esce true leviamo la prima lettera con l'

console.log(deleteOne("Hello", true))
console.log(deleteOne("Hello", false)) 


/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
function onlyLetters(str) {
  return str.replace(/[0-9]/g, '');
}

let result2 = onlyLetters("I have 4 dogs");
console.log(result2);

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
function whatDayIsIt() {

  const today = new Date();
  
  const dayIndex = today.getDay();
  
  const daysOfWeek = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'];

  return daysOfWeek[dayIndex];
}
console.log(whatDayIsIt());

//dopo aver creato la funzione creo un ogetto per ottenere la data corrente con la funzione new date e grazie a dayindex ricavo gli indici che si riferiscono ai giorni della settimana che partono dalla Domenica//
// in seguito creo un array con le stringe contenenti i giorni della settimana partendo da domenica e in seguito faccio tornare il nome del giorno//


/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
//invoco la funzione che avevo usato in un precedente esercizio dopo di che creo la funzione che ristuisce somma e valori, in seguito l ciclo con for lancio il dado//
// e inserisco i risultati nell'array e sommo il risultato. in seguito mi torna un oggetto con la somma e i valori usciti.
dice()
function rollTheDices(num) {
    let sum = 0;
    let values = [];  

  for (let i = 0; i < num; i++) {
      let result = dice()
      values.push(result) 
      sum += result
  }

  return {
      sum: sum,
      values: values
  }
}

console.log(rollTheDices(8))

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

//creo una funzione dove all'interno inserisco due variabili dove stabili il giorno e il mese del mio compleanno, utilizzo in seguito la funzione newDate per avere la data aggiornata sempre.//
//uso in seguito le funzionigetdate e getmonth per ottere giorno e mese e aggiungo più 1 al mese perchè ha indice uguale a 0. in seguito per avere un valore boleano che mi verifichi la condizione richiesta lo studio con un if che risulta true solo nel giorno del mio compleanno//
function isTodayMyBirthday() {
  const myBirthdayDay = 28
  const myBirthdayMonth = 8

  const today = new Date()
  
  const todayDay = today.getDate()
  const todayMonth = today.getMonth() + 1

  if (todayDay === myBirthdayDay && todayMonth === myBirthdayMonth) {
      return true;
  } else {
      return false;
  }
}

console.log(isTodayMyBirthday())


// Arrays & Oggetti


// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/



//function deleteProp(ogetto, str) {
//delete oggetto[str]
//return oggetto  
//}
//const persona = {
  //cognome: Saldutii,
  //età: 25
//}
//console.log(deleteProp(amico, "età"))



/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/



//prima di tutto sposto l'array prima che scrivo la funzione cosi che mi funzioni tutto. Dopo aver scritto la funzione la imposto per cercare partendo dal primo film indice 0 e lo imposto come il più recente, dopo di che cercando di fare un ciclo e passando per ogni film elemento dell'oggetto impostera man mano come film più recente quello appunto uscito per ultimo.

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

function newestMovie(movies) {
  let newest = movies[0];


  for (let i = 0; i < movies.length; i++) {
    if (parseInt(movies[i].Year) > parseInt(newest.Year)) {
      newest = movies[i]
    }
  }

  return newest;
}

console.log(newestMovie(movies))


/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

//dopo aver creato la funzione uso la proprietà length che indica il numero degli elementi nell'array e faccio tornare il risultato in base al numero uscito da questa proprietà//

function countMovies(movies) {
  return movies.length
}
console.log(countMovies(movies))

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
//scrivo la funzione, in seguito creo un array vuoto, dopo di che ciclo l'array di movies e attraverso il push inserisco gli anni nell'array vuoto che ho creato.

function onlyTheYears(movies) {
  const years =[]
  for(let i = 0; i < movies.length; i++){
    years.push(movies[i].Year)
  }
  return years
}

console.log(onlyTheYears(movies))


/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

//dopo aver creato la funzione e creato un array vuoto ciclo l'array per ogni suo elemento dentro l'array e lo inserisco solo nel caso il suo anno è dal 1001 al 2000 nell'array vuoto creato da me uso parseInt per modificare la stinga di year in numeri//
function onlyInLastMillennium(movies) {
  const filmsInLastMillennium = [];

  for (let i = 0; i < movies.length; i++) {
    const year = parseInt(movies[i].Year)
    
    if (year >= 1001 && year <= 2000) {
      filmsInLastMillennium.push(movies[i])
    }
  }

  return filmsInLastMillennium;
}

console.log(onlyInLastMillennium(movies))


/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

// si poteva usare o il metodo for o il metodo reduce ho preferito usare il metodo for in quanto già utilizzato nei precedenti esercizi 
function sumAllTheYears(movies) {
  let totalYears = 0

  for (let i = 0; i < movies.length; i++) {
    totalYears += parseInt(movies[i].Year)
  }

  return totalYears
}

console.log(sumAllTheYears(movies))


/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

//dopo aver creato la funzione uso il metodo filter per cercare una stringa nel titolo che mi servirà e inoltre uso tolowecase per evitare problemi con maiuscole e minuscole

function searchByTitle(title) {

  return movies.filter(movie => {
    return movie.Title.toLowerCase().includes(title.toLowerCase());
  });
}

const results = searchByTitle("Avengers");
console.log(results);


/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

//dopo aver scritto la funzione e in seguito uso getElementById per prendere l'elemento in base all'ID dato ad esso nell'array
function selectContainer() {
  const container = document.getElementById("container")
  
  return container
}

const myContainer = selectContainer()
console.log(myContainer)



/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
//dopo aver scritto la funzione uso il docomunt.querySelectorAll tutti i tag td che indicano le celle.
function selectAllTableCells() {
  const tableCells = document.querySelectorAll("td");
  
  return tableCells;
}

const allCells = selectAllTableCells()
console.log(allCells)


/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
//dopo aver creato la funzione uso il ciclo forEach per ciclare l'array. Utilizzando queryselctorall prendo tutte le "a" che indicano i link ed uso la proprieta di style.background per inserire il colore rosso richiesto dall'esercizio//
function addRedBackground() {
  const links = document.querySelectorAll("a")
  links.forEach(link => {
    link.style.backgroundColor = "red"
  });
}
addRedBackground()


/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

/* Questo array viene usato per gli esercizi. Non modificarlo. */