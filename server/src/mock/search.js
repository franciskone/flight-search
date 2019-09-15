/* eslint-disable no-console */
// Disabling 'no-console' as it's reasonable for this file to do some logging.

// TODO Franciskone: DELETE the whole file
const fs = require('fs');
const path = require('path');

const search = () => {
  console.log('search: FAKE RESPONSE');
  const data = fs.readFileSync(path.resolve(__dirname, './searchResponse.json'));

  return new Promise((resolve) => {
    setTimeout(() => resolve(JSON.parse(data)), 2000);
  });
};

module.exports = {
  search,
};
