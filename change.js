/* eslint-disable no-console */
const utility = require('./utility');

module.exports.waysToMakeChange = async function waysToMakeChange(amount, coins, printLines) {
  const combinations = new Array(amount + 1);
  combinations.fill(0);
  combinations[0] = 1;
  await coins.forEach((coin) => {
    for (let coinIndex = 1; coinIndex < combinations.length; coinIndex += 1) {
      if (coinIndex >= coin) {
        combinations[coinIndex] += combinations[coinIndex - coin];
        if (printLines) {
          utility.printArrayLine(combinations);
        }
      }
    }
    console.log('\n');
  });
  return combinations[amount];
};

module.exports.waysToMakeChangeMin = async function waysToMakeChangeMin(amount, coins, printLines) {
  const combinations = new Array(amount + 1);
  combinations.fill(combinations.length);
  combinations[0] = 0;
  await coins.forEach((coin) => {
    for (let coinIndex = 1; coinIndex < combinations.length; coinIndex += 1) {
      if (coinIndex >= coin) {
        // yes use one coin
        const coinCount = 1;
        // check sub problem value
        const previousCoinCount = combinations[coinIndex - coin];
        // check if the min value
        const neededCoins = Math.min((coinCount + previousCoinCount), combinations[coinIndex]);
        combinations[coinIndex] = neededCoins;
        if (printLines) {
          utility.printArrayLine(combinations);
        }
      }
    }
    console.log('\n');
  });
  return combinations[amount];
};
