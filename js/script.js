// L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, 
// in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.


// CREO LA GRIGLIA CON GLI SQUARE
// Array di numeri da 1 a 100
const numberOfSquares = 100;

// Richiamo funzione Genera Numeri nell Griglia
let generatedNumbers = generateGridNumbers(numberOfSquares);
// Ordino i numeri in modo ascendente
generatedNumbers.sort(function(a, b){return a-b});

// Per ogni numero nell'array creo una cella e la appendo al grid
const myGrid = document.getElementById('grid');
myGrid.innerHTML = '';

for(let i = 0; i < generatedNumbers.length; i++) {
    
    const thisNumber = generatedNumbers[i];
    const newSquare = generateGridItem(thisNumber);

    // Evento CLICK
    newSquare.addEventListener('click', squareClick);
     
    // Aggiungo l'elemento alla griglia
    myGrid.appendChild(newSquare);
}

// AL CLICK SU OGNI SQUARE AGGIUNGO LA CLASSE "ACTIVE" ALLO SQUARE
function squareClick() {
    this.classList.add('active');
}

// _____________
// | FUNCTIONS |

// Funzione genera array con X numeri

// quantityOfNumbers: quanti numeri dovrà generare
// return: array di numeri
function generateGridNumbers (quantityOfNumbers) {
    const numbersArray = [];

    while(numbersArray.length < quantityOfNumbers) {

        const randomNumber = getRndInteger(1, quantityOfNumbers);
        // If per non ripetizione di numeri e pusho nell'Array
        if( !numbersArray.includes(randomNumber) ) {
            numbersArray.push(randomNumber);
        }
    }
    return numbersArray;
}

// Funzione crea un elemento della griglia

// number: numero da inserire nello square
// return: Torna l'elemento html creato
function generateGridItem(number) {
    const newSquare = document.createElement('div');
    newSquare.classList.add('square');
    newSquare.innerHTML = `<span>${number}</span>`; 

    return newSquare;
}

// Funzione genera numeri random
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

