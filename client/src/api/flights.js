import { API_ROOT_URL } from '../constants';

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
  
  return fetch(`${API_ROOT_URL}/search?${query}`)
    .then((response) => {
      if (response.status !== 200) throw new Error('Error retrieving itinerary data');
      
      return response.json();
    });
};
