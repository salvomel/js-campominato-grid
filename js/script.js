// L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, 
// in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.

// Funzione CLICK to PLAY
document.getElementById('play').addEventListener('click', startGame);
function startGame() {

    // CREO LA GRIGLIA CON GLI SQUARE
    // Array di numeri da 1 a 100
    const numberOfSquares = 100;
    
    // Richiamo funzione Genera Numeri nell Griglia
    let generatedNumbers = generateGridNumbers(numberOfSquares);
    
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
}

// _____________
// | FUNCTIONS |

// Funzione genera array con X numeri

// quantityOfNumbers: quanti numeri dovrà generare
// return: array di numeri
function generateGridNumbers (quantityOfNumbers) {
    const numbersArray = [];

    for ( let i= 1; i < quantityOfNumbers + 1; i++) {
         numbersArray.push(i);
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

