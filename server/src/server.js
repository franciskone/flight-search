/* eslint-disable no-console */
// Disabling 'no-console' as it's reasonable for this file to do some logging.

const express = require('express');

const app = express();
const livePricing = require('./live-pricing');

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

/**
  Simple flight search api wrapper.

  TODO: client should provide params.

  API params and location values are here:
  http://business.skyscanner.net/portal/en-GB/Documentation/FlightsLivePricingQuickStart
*/
app.get('/api/search', async (req, res) => {
  const {
    originPlace,
    destinationPlace,
    outboundDate,
    inboundDate,
    adults,
  } = req.query;
  
  try {
    const reqParamsForSession = {
      originPlace,
      destinationPlace,
      outboundDate,
      inboundDate,
      adults,
    };

    const results = await livePricing.search(reqParamsForSession);
    // TODO - a better format for displaying results to the client
    console.log('TODO: transform results for consumption by client');
    res.json(results);
  } catch (err) {
    res.status(500).send(err);
    console.error(err);
  }
});

app.listen(4000, () => {
  console.log('Node server listening on http://localhost:4000');
});
