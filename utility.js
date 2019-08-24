/* eslint-disable no-console */

module.exports.printArrayLine = function printArrayLine(array) {
  let line = '';
  for (let i = 0; i < array.length; i += 1) {
    line += `${array[i]} `;
  }
  console.log(line);
};
