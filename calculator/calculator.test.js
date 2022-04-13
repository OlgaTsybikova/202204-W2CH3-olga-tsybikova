const a = Number;
const b = Number;
const sign = ['-','+', '+', '/']
let result = 0;

function calculator (a,b,sign) {
  if(isNaN(a) || isNaN(b)) {
    return 'Not a Number!';
  };
  if (sign === '-'){
        result = a - b; 
    } else if (sign === '+') {
        result = a + b; 
    } else if (sign === '*') {
        result = a * b; 
    } else if (sign === '/') {
       result = a / b;
    } else if ( a === '' && sign === ''){
        result = Math.sqrt(b) ;
    } else if ( b === '' && sign === '') {
        result = Math.sqrt(a);
    }
    return result;
  }

calculator();

describe('Given a calculator function', () => {
describe("When it is given two numbers and a sing '+'", () => {
  test('Then it has to give a result of sum', () => {
    const a = 5;
    const b = 4;
    const sign = '+';

    const expectedResult = 9;
    const comparedResult = calculator(a, b);
      expect(comparedResult).toBe(expectedResult);
    })
  })
})
