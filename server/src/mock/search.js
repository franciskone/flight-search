/* eslint-disable no-console */
// Disabling 'no-console' as it's reasonable for this file to do some logging.

// TODO Franciskone: DELETE the whole file
const fs = require('fs');
const path = require('path');

const search = () => {
  console.log('search: FAKE RESPONSE');
  const data = fs.readFileSync(path.resolve(__dirname, './searchResponse.json'));

  return new Promise((resolve) => {
    resolve(JSON.parse(data));
  });
};

module.exports = {
  search,
};
