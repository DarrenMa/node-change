/* eslint-disable no-console */
const change = require('./change');

const amount = 28;
const coins = [25, 10, 5, 1];
const printArrayLines = false;

(async () => {
  // return change using greedy method
  try {
    console.log('=== Greedy ===');
    const greedyCombo = await change.greedyChange(amount, coins);
    console.log(`Coins returned for change of ${amount}: `);
    const x = Object.entries(greedyCombo);
    x.forEach((arr) => {
      if (arr[1] > 0) {
        console.log(`${arr[1]} coin of ${arr[0]}`);
      }
    });
  } catch (error) {
    console.error(`error on greedyChange: ${error}`);
  }

  // show how many combinations of change we can have
  try {
    console.log('=== Change combinations ===');
    const changeCombos = await change.waysToMakeChange(amount, coins, printArrayLines);
    console.log(`${changeCombos} combinations of change for ${amount} with coins ${coins}`);
  } catch (error) {
    console.error(`error on waysToMakeChange: ${error}`);
  }

  // show combination of change with least amount of coins
  try {
    console.log('=== Change combinations fewest coins ===');
    const changeComboMin = await change.waysToMakeChangeMin(amount, coins, printArrayLines);
    console.log(`${changeComboMin} is the change combination utilising the fewest coins for ${amount} with coins ${coins}`);
  } catch (error) {
    console.error(`error on waysToMakeChangeMin: ${error}`);
  }
})();
