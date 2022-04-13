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
   

function adminOrUser(){
 let whoIsLogged = prompt('Are you an ADMIN or a USER?');
 if (whoIsLogged.toUpperCase() == 'ADMIN'){
     console.log(whoIsLogged.toUpperCase());
     actionsAdminCanDo();
  } else if (whoIsLogged.toUpperCase() == 'USER'){
     console.log(whoIsLogged.toUpperCase());
     alert('Here you have available flights');
     flightList();
     userBuysFlights(); 
    }else{
      adminOrUser();
    }
} 
adminOrUser();

function addNewFlights() {
let newFlights = {
  id : '',
  to : '',
  from : '',
  cost : '',
  scale : '', 
};
let checkId = false;

      newFlights.id = Number(prompt ('Please enter the id: '));
      checkId =  flights.find(({id}) => id == newFlights.id);
     if (checkId) {
     alert('A flight with the same ID already exists, please start again and enter another ID.'); 
     addNewFlights();
     }else{
       newFlights.to = prompt('Please enter the destination:');
       newFlights.to = newFlights.to.charAt(0).toUpperCase() + newFlights.to.slice(1)
       newFlights.from = prompt('Please enter the origin of the flight ');
       newFlights.from = newFlights.from.charAt(0).toUpperCase() + newFlights.from.slice(1)
       newFlights.cost = Number(prompt('Please enter the price'));
       newFlights.scale = Boolean(confirm('Please press “OK” if there are scales or “Cancel” if there are no scales.'));
       flights.push(newFlights);
       console.log(flights);
}
}

function deleteFlightsById(){
  const deleteFlight = prompt ('Please enter ID of the flight you want to delete:' );
  flights.splice(deleteFlight, 1);
  console.log(flights);
  if (confirm('Would you like to delete another flight?') == true){
    deleteFlightsById();
  }else{
    console.log('Bye!')
  }
} 


function actionsAdminCanDo(){
 for (let i = 0; i < flights.length; i ++){
    console.log(flights[i])}
       if (confirm("Would you like to add another flight?") == true && flights.length < 15) {
     addNewFlights();
     actionsAdminCanDo();
     } else if (confirm('Would you like to delete a flight?') == true){
     deleteFlightsById();
    }else if(flights.length > 15) {
    alert('No more entries possible!')      
  } else {
    console.log("Bye!")
  }
}


function userBuysFlights(){
 let idOfFlightToBePurchased;
 let priceRange = +prompt('Please put your maximum price: ')
    for(let i=0; i<flights.length; i++){
        if(priceRange >= flights[i].cost){
            console.log(flights[i])
        }
    }
    idOfFlightToBePurchased = +prompt('Please enter the ID of the flight you would like to purchase:')
    for(let i=0; i<flights.length; i++){
        if(idOfFlightToBePurchased == flights[i].id){
            console.log('Your flight confirmation as follows:  from: ' +flights[i].from+', to: '+flights[i].to+ ', price: ' +flights[i].cost+' € ')
            }
        }
    if(confirm('Would you like to buy another flight?')){
         userBuysFlights();
    }else {
        console.log('Thanks for your purchase, have an wonderful flight!')    }
}
