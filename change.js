/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
const utility = require('./utility');

function checkAmount(amount) {
  if ((!amount && amount !== 0) || amount < 0 || Number.isNaN(amount)) {
    throw Error(`amount ${amount} is invalid`);
  }
}

const arrayToObject = (array) => array.reduce((obj, item) => {
  obj[item] = 0;
  return obj;
}, {});

module.exports.greedyChange = async function greedyChange(amount, coins) {
  checkAmount(amount);
  const toGiveBack = arrayToObject(coins);
  // sort coin array, start from largest coin
  coins.sort((a, b) => b - a);
  await coins.forEach((coin) => {
    while (coin <= amount) {
      amount -= coin;
      toGiveBack[coin] += 1;
    }
  });

  return toGiveBack;
};

module.exports.waysToMakeChange = async function waysToMakeChange(amount, coins, printLines) {
  checkAmount(amount);
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
  });
  return combinations[amount];
};

module.exports.waysToMakeChangeMin = async function waysToMakeChangeMin(amount, coins, printLines) {
  checkAmount(amount);
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
  });
  return combinations[amount];
};
