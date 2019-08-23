const readline = require('readline');


module.exports.question = function question(q) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });


  let response;

  rl.setPrompt(q);
  rl.prompt();

  // eslint-disable-next-line no-unused-vars
  return new Promise((resolve, reject) => {
    rl.on('line', (userInput) => {
      response = userInput;
      rl.close();
    });

    rl.on('close', () => {
      resolve(response);
    });
  });
};
