/* eslint-disable no-console */
// Disabling 'no-console' as it's reasonable for this file to do some logging.

// TODO Franciskone: DELETE the whole file
const fs = require('fs');
const path = require('path');

const FAKE_DELAY = 100;

const search = () => {
  console.log('\napi/search: MOCK RESPONSE');
  const data = fs.readFileSync(path.resolve(__dirname, './searchResponse.json'));

  return new Promise((resolve) => {
    setTimeout(() => resolve(JSON.parse(data)), FAKE_DELAY);
  });
};

module.exports = {
  search,
};
