const request = require('request');
const fs = require('fs');

let input = process.argv.slice(2);

const webFetch = function (callback) {

  request(`${input[0]}`, (error, response, body) => {

    callback(null, body);

  });
};

webFetch((error, body) => {

  if (error) {
    console.log('It didn\'t work!', error);
    return;

  }

  fs.appendFile(`${input[1]}`, body, error => {
    console.log(body.length);
    if (error) {
      console.log(`There was an error! `, error);
      return;
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${input[1]}`);
  });
});
