// Generare un array di 4 numeri univoci da 1 a 9


function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function generateUniqueNumbers(min, max, count) {
    let numbers = [] // array

    do {
        //invoco una funzione che mi crea un numero random da un min a un max
        const  number=  getRandomArbitrary(min, max); //number

        //dichiaro una variabile di controllo per vedere se il numero è un duplicato
        let isDuplicate = false; //boolean

        if (numbers.includes(number) === false){
            numbers.push(number); 
        }

        /*
        for (let i = 0; i < numbers.length; i++){
            //controllo se il numero generato è già presente in tutto l'array
            if (number === numbers[i]){
                isDuplicate = true;
            }          
        }
        // se non è presente lo aggiungo all'array
        if(isDuplicate === false){
            numbers.push(number); 
        }
        */

    } while (numbers.length !== count)

    //restituisco l'array con la posizione delle bombe
    return numbers;
}

function convertStringToNumberArray(numberString){

    const arrayOfNumbers = [];

    for(let i = 0; i < numberString.length; i++){
        console.log(numberString[i]);
        const playerNumberReal = parseInt(numberString[i]);
        arrayOfNumbers.push(playerNumberReal);
    }

    return arrayOfNumbers;

}


const playBtn = document.querySelector('#play');
const playerNumber = document.querySelector('#number');

const checkNumberArray = generateUniqueNumbers(1,10,4);

playBtn.addEventListener('click', function() {

    const playerNumberValue = playerNumber.value;
    const playerNumerArray = convertStringToNumberArray(playerNumberValue);
    
});







