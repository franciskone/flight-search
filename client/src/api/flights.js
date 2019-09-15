const API_ROOT = 'http://localhost:4000/api';

export const flightSearch = ({
  originPlace,
  destinationPlace,
  outboundDate,
  inboundDate,
  adults,
}) => {
  const query = `originPlace=${originPlace}`
  + `&destinationPlace=${destinationPlace}`
  + `&outboundDate=${outboundDate}`
  + `&inboundDate=${inboundDate}`
  + `&adults=${adults}`;
  
  return fetch(`${API_ROOT}/search?${query}`)
    .then(response => response.json());
};
