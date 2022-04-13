const calculatorPro = () => {
    let newNumber; 
    let numberList = []; 
    
    do {
        
        newNumber = Number(prompt('Enter a number or press cancel to stop '));
        
        if((isNaN(newNumber))) {
        alert('Error! Please, try again.');  
        } else { 
            numberList.push(Number(newNumber)); 
        }
    } while(newNumber != '');
    
    const sign = prompt('Enter desired operaration sign:(-, +, *, /)')
    
    if (numberList.length == 1 && sign == '') {
            console.log('the square root of this number is ' + Math.sqrt(numberList[0]))
        }
    
    let resultSum = numberList[0];
    let resultRest = numberList[0];
    let resultMultiply = numberList[0];
    let resultDivide = numberList[0];
 for (let i = 1; i < numberList.length; i++) {

          if (sign == '+') {
            resultSum += numberList[i]; 
    console.log( 'The result of this sum is ' + resultSum.toFixed(2));
         } else if (sign == '-') {
            resultRest -= numberList[i];
    console.log('The result of this subtraction is ' + resultRest.toFixed(2));        
         } else if (sign == '*') { 
            resultMultiply *= numberList[i]; 
    console.log( 'The result of this multiplication is ' + resultMultiply.toFixed(2));         
         } else if (sign == '/') { 
            resultDivide /= numberList[i];
    console.log('The result of this division is  ' + resultDivide.toFixed(2)); 
         }
        
    }
    
    
    if (confirm("Would you like to do another operation?") == true) {
        calculatorPro();
      } else {
        console.log("Bye!")
      }
    }



    calculatorPro();
    










    
    
    