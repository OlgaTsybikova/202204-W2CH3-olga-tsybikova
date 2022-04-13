//Greeting /Ask for Name
let userName = prompt('Please enter your name: ')
prompt(`Hello,${userName}! Welcome to our Bingo game!`);
prompt('You will start off with 1000 points. Every turn you take will cost you 10 points off. Try to win with least number of turns.')

//Card with 15 random Numbers
let randomNumber=[];
let bingoCard = [];
let rounds = 0;
let lineCompleted = false;
let randoms= [];

function generateCardNumbers() {

    randomNumber = Math.floor(Math.random() * 90 + 1);
    let check = randoms.some(number => number === randomNumber);
        
        if (!check) {
            randoms.push(randomNumber);
            return randomNumber;
        } else {return generateCardNumbers()};

}
   
function bingoCardFunction () {
        this.number = generateCardNumbers(); 
        this.matched = false;
    };

const generateCard = () => {
  bingoCard = []; 
        for (let i = 0; i < 15; i++) {
            bingoCard.push(new bingoCardFunction());
        };
        console.table(bingoCard);
        return bingoCard; 

    }; 
    
//Confirm the card or generate new one
function confirmationOfTheCard() {
    let confirmCard;
    cardChoice = generateCard();
    do {
        confirmCard = prompt('Would you like to continue with this card? Write Yes to confirm, otherwise press ACCEPT to generate a new card.');

        if (confirmCard === 'Yes') {
            drawingNumbers();
        } else if (confirmCard === '') {
            confirmationOfTheCard();
        } else {
            prompt('bye!');
        }
    } while (confirmCard !== null && confirmCard !== '' && confirmCard !== 'Yes');
}
confirmationOfTheCard();
//Game itself


function drawingNumbers(){
    const initialNumber = 1, finalNumber = 90;
    let countMatchedNumbers = 0;
    let continueGame;
    do { 
        randomNumber = Math.round(Math.random()*(initialNumber - finalNumber)+ finalNumber);
        rounds = rounds + 1;
        countRoundsAndPoints();
        prompt('The drawn number is ' + randomNumber);
        for (let i = 0; i < bingoCard.length; i++) {
            if (bingoCard[i].number == randomNumber) {
                bingoCard[i].matched = true;
                bingoCard[i].number = 'X';
                countMatchedNumbers = countMatchedNumbers + 1;
            };
        };
        checkLines();
        prompt('This is your card now:');
        console.table(bingoCard);
        continueGame = confirm('Would you like to continue?');
        if (countMatchedNumbers === 15){
            alert('¡¡¡B.I.N.G.O!!!')
        }
    } while(continueGame === true && countMatchedNumbers < 15);
    
};
// Points and Rounds


function countRoundsAndPoints() {
    let initialPoints = 1000;
    let currentPoints = initialPoints - (rounds * 10);
    prompt(`This is a round number ${rounds}`);
    prompt(`Your current points are ${currentPoints}`);
}


function checkLines() {
    let lineOne = 0;
    let lineTwo = 0;
    let lineThree = 0;

    for (let i=0; i<5; i++){
        if(bingoCard[i].matched === true){
            lineOne = lineOne + 1
        }
    }

    for (let j=5; j<10; j++){
        if(bingoCard[j].matched === true){
            lineTwo = lineTwo + 1
        }
    }

    for (let k=10; k<15; k++){
        if(bingoCard[k].matched === true){
            lineThree = lineThree + 1
        }
    }

    if(lineCompleted === false){
        if(lineOne === 5 || lineTwo === 5 || lineThree === 5){
            alert("You have got a LINE!")
            prompt("Congrats! You have got a LINE!")
            lineCompleted = true;
        }
    }
}

if (confirm("Would you like to play again?") == true) {
    confirmationOfTheCard();
    drawingNumbers();
  } else {
    prompt("Bye!")
  }

  