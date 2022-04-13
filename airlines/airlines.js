let userName = prompt('Please enter your name: ')
userName ? alert(`Hello,${userName}! Welcome to our airlines!`): prompt('Hello! Welcome to our airlines!');


let flights = [

    { id: 00, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },

    { id: 01, to: 'New York', from: 'Barcelona', cost: 700, scale: false },

    { id: 02, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },

    { id: 03, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },

    { id: 04, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },

    { id: 05, to: 'London', from: 'Madrid', cost: 200, scale: false },

    { id: 06, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },

    { id: 07, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },

    { id: 08, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },

    { id: 09, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },

    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false }
    
];

  function flightList(){ 
    for (let i = 0; i< flights.length; i ++){
        if (flights[i].scale) {
            console.log(`The flight from: ${flights[i].from} with a destination to: ${flights[i].to} costs ${flights[i].cost}€ and has one or more scales.`)
        } else {
            console.log(`The flight from: ${flights[i].from} with a destination to: ${flights[i].to} costs ${flights[i].cost}€ and has no scales.`)
        }
    }
  }
flightList()

function averageCost(){
 let totalSum = 0;
   for (let i = 0; i < flights.length; i ++){
       if (flights[i].cost) {
           totalSum += flights[i].cost++;
       }
        }
        console.log('The average price is ' + Math.round(totalSum / flights.length)+ '€.');
    }
 
averageCost();


function flightsScale() {
 let sumScale = 0;
    for (let i = 0; i< flights.length; i ++){
        if (flights[i].scale) {
           sumScale++
    }
}
console.log('There are ' + sumScale + ' flights with at least one scale.')
}
flightsScale();


function lastFlights(){
    for (let i = flights.length-5; i< flights.length; i ++){

     console.log( `The destinations of the last flights are: ${flights[i].to} `)  
    
 }
}
lastFlights();
   