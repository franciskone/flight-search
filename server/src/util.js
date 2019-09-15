function reduceById(list) {
  const listById = {};
  list.forEach((item) => { listById[item.Id] = item; });
  
  return listById;
}

const filterSearchResultsData = (rawData) => {
  const legsById = reduceById(rawData.Legs);
  const segmentsById = reduceById(rawData.Segments);
  const carriersById = reduceById(rawData.Carriers);
  const agentsById = reduceById(rawData.Agents);
  const placesById = reduceById(rawData.Places);
  const currenciesById = reduceById(rawData.Currencies);
  
  return {
    query: rawData.Query,
    itineraries: rawData.itineraries,
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
