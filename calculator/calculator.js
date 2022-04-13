const a = Number( prompt('Enter first number: '));
const b = Number( prompt('Enter second number: '));
const sign = prompt('Enter operaration sign:(-, +, *, /)');
let result = 0; 

if(isNaN(a) || isNaN(b)) {
    alert('Error! Please, try again.');  
    } else {
    if (sign == '-'){
        result = a - b; 
    } else if (sign == '+') {
        result = a + b; 
    } else if (sign == '*') {
        result = a * b; 
    } else if (sign == '/') {
       result = a / b;
    } else if ( a == '' && sign == ''){
        result = Math.sqrt(b) 
        
    } else if ( b == '' && sign == '') {
        result = Math.sqrt(a);
    }
    prompt('Your result is  ' + result.toFixed(2));
} 

