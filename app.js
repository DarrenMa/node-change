/* eslint-disable no-console */
const change = require('./change');

const amount = 6;
const coins = [1, 2, 5];
const printArrayLines = true;

(async () => {
  // show how many combinations of change we can have
  try {
    const changeCombos = await change.waysToMakeChange(amount, coins, printArrayLines);
    console.log(changeCombos);
  } catch (error) {
    console.error(`error on changeCombos: ${error}`);
  }

  // show combination of change with least amount of coins
  const changeComboMin = await change.waysToMakeChangeMin(amount, coins, printArrayLines);
  console.log(changeComboMin);
})();


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

// (async () => {
//   try {
//     // const parkingFee = 18;
//     // const name = 'Darren'; // await questions.question('What\'s your name? ');
//     // console.log(`Hello ${name}`);
//     // console.log(`Your parking fee is ${parkingFee}`);
//     // let customerPayment = await questions.question('How much money are you inserting? ');
//     // // cast for comparisons later
//     // customerPayment = Number(customerPayment);
//     // console.log(`You've inserted ${customerPayment}`);
//     // // todo add checks on the user input
//     // // case 0
//     // if (customerPayment < parkingFee) {
//     //   console.log('The amount paid is too little');
//     //   // todo add ability to add more money and continue
//     //   return;
//     // }
//     // // case 1
//     // if (customerPayment === parkingFee) {
//     //   console.log('Paid, no change required, have a nice day');
//     //   return;
//     // }

//     // console.log('Calculating change...');
//     // if (customerPayment > parkingFee) {
//     const denominations = [1, 2, 3];
//     const amount = 20;
//     change.waysToReturnChange(denominations, 3, amount);
//     // console.log(await change.waysToReturnMemoize(amount, denominations));
//     // return;
//     // }
//   } catch (error) {
//     console.error(error);
//   }
// })();
