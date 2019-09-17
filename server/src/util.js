function reduceByKey(list, key = 'Id') {
  const listById = {};
  list.forEach((item) => { listById[item[key]] = item; });
  
  return listById;
}

const mapItineraries = itineraries => itineraries.map(
  ({ OutboundLegId, InboundLegId, PricingOptions }) => ({
    OutboundLegId, InboundLegId, PricingOptions,
  }),
);

const filterSearchResultsData = (rawData) => {
  const legsById = reduceByKey(rawData.Legs, 'Id');
  const segmentsById = reduceByKey(rawData.Segments, 'Id');
  const carriersById = reduceByKey(rawData.Carriers, 'Id');
  const agentsById = reduceByKey(rawData.Agents, 'Id');
  const placesById = reduceByKey(rawData.Places, 'Id');
  const currenciesById = reduceByKey(rawData.Currencies, 'Code');
  
  return {
    query: {
      ...rawData.Query,
      SessionKey: rawData.SessionKey,
    },
    itineraries: mapItineraries(rawData.Itineraries),
    legsById,
    segmentsById,
    carriersById,
    agentsById,
    placesById,
    currenciesById,
  };
};

module.exports = {
  filterSearchResultsData,
};
