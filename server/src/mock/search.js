// TODO Franciskone: DELETE the whole file
var fs = require('fs');
const path = require("path");

const search = () => {
  console.log('search: FAKE RESPONSE');
  const data = fs.readFileSync(path.resolve(__dirname, "./searchResponse.json"));

  return new Promise((resolve, reject) => {
    resolve(JSON.parse(data)); // fulfilled
  });
}

module.exports = {
  search,
}