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
    // Array di numeri in base al livello
    let numberOfSquares;
    if (document.getElementById('dropdown').value == 'easy') {
        numberOfSquares = 100;
    } else if (document.getElementById('dropdown').value == 'medium') {
        numberOfSquares = 81; 
    } else if (document.getElementById('dropdown').value == 'hard') {
        numberOfSquares = 49;
    }
    
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

    for ( let i= 1; i <= quantityOfNumbers; i++) {
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

    // If per squares in base ai livelli
    if (document.getElementById('dropdown').value == 'easy') {
        newSquare.style.width = 'calc(100% / 10)';
        newSquare.style.height = 'calc(100% / 10)';
    } else if (document.getElementById('dropdown').value == 'medium') {
        newSquare.style.width = 'calc(100% / 9)';
        newSquare.style.height = 'calc(100% / 9)';
    } else if (document.getElementById('dropdown').value == 'hard') {
        newSquare.style.width = 'calc(100% / 7)';
        newSquare.style.height = 'calc(100% / 7)';
    }

    return newSquare;
}

