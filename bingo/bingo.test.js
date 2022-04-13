let randomNumber=[];
let bingoCard = [];
let rounds = 0;
let lineCompleted = false;
const randoms= [];

function generateCardNumbers() {
  randomNumber = Math.floor(Math.random() * 90 + 1);
    const check = randoms.some(number => number === randomNumber);
      if (!check) {
        randoms.push(randomNumber);
        return randomNumber;
      } 
      return generateCardNumbers()
};
   
function BingoCardFunction () {
  this.number = generateCardNumbers();
  this.matched = false;
};

const generateCard = () => {
  bingoCard = [];
  for (let i = 0; i < 15; i++) {
    bingoCard.push(new BingoCardFunction());
  };
  return bingoCard;
}; 

function checkLines() {
  let lineOne = 0;
  let lineTwo = 0;
  let lineThree = 0;
  for (let i=0; i<5; i++){
    if(bingoCard[i].matched === true){
      lineOne += 1;
    }
  }

  for (let j=5; j<10; j++){
    if(bingoCard[j].matched === true){
      lineTwo += 1;
    }
  }

  for (let k=10; k<15; k++){
    if(bingoCard[k].matched === true){
      lineThree += 1;
    }
  }

  if(lineCompleted === false){
    if(lineOne === 5 || lineTwo === 5 || lineThree === 5){
      lineCompleted = true;
    }
  }
}
function countRoundsAndPoints() {
  const initialPoints = 1000;
  const currentPoints = initialPoints - (rounds * 10);
  return currentPoints;
  }
  function drawingNumbers() {
      const initialNumber = 1;
      const finalNumber = 90;
      let countMatchedNumbers = 0;
      let continueGame;
      do {
        randomNumber = Math.round(Math.random()*(initialNumber - finalNumber)+ finalNumber);
        rounds += 1;
        countRoundsAndPoints();
        for (let i = 0; i < bingoCard.length; i++) {
          if (bingoCard[i].number === randomNumber) {
            bingoCard[i].matched = true;
            bingoCard[i].number = 'X';
            countMatchedNumbers += 1;
          };
        };
        checkLines();
          continueGame = undefined;
          if (countMatchedNumbers === 15){
            return
          }
      } while(continueGame === true && countMatchedNumbers < 15);
      
  };
function confirmationOfTheCard() {
  let confirmCard;
  generateCard();
    do {
        confirmCard = undefined;
        if (confirmCard === 'Yes') {
            drawingNumbers();
        } else if (confirmCard === '') {
            confirmationOfTheCard();
        }
    } while (confirmCard !== null && confirmCard !== '' && confirmCard !== 'Yes');
}
confirmationOfTheCard();

if (confirmationOfTheCard(undefined) === true) {
    confirmationOfTheCard();
    drawingNumbers();
  }

  