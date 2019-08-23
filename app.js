/* eslint-disable no-console */
const questions = require('./questions');

// case 1
// there is no change needed
// solution: return nothing

// case 2
// there are no coins left to give change
// solution: return nothing (error message)

// case 3
// there is a negative amount to return
// solution: return nothing (error message)

// case 4
// the value to return is valid and there are infinite amount of coins
// solution: give the amount of combinations possible to return change

// case 5
// the value to return is valid and there are infinite amount of coins
// solution: return the change using the greedy method

// case 6
// the value to return is valid and there are infinite amount of coins
// solution: return the change with the least amount of coins

(async () => {
  try {
    const parkingFee = 17.50;
    const name = await questions.question('What\'s your name? ');
    console.log(`Hello ${name}`);
    console.log(`Your parking fee is ${parkingFee}`);
    const customerPayment = await questions.question('How much money are you inserting? ');
    console.log(`You've inserted ${customerPayment}`);
    console.log('Calculating change...');
  } catch (error) {
    console.error(error);
  }
})();
