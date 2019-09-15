import React from 'react';
import PropTypes from 'prop-types';
import BpkCard from 'bpk-component-card';
import BpkText from 'bpk-component-text';
import BpkButton from 'bpk-component-button';

import { fakeOnClick, styleGetter } from '../../../util';
import STYLE from './ItineraryItem.scss';

const c = styleGetter(STYLE);

const FlightSummary = ({
  carrier, origin, destination, duration, stops,
}) => (
  <div className={c('flight')}>
    <div className={c('flght__routes')}>ROUTES</div>
    <div className={c('flght__details')}>DETAILS</div>
  </div>
);

const FlightType = {
  carrier: PropTypes.string.isRequired,
  origin: PropTypes.shape({
    date: PropTypes.string.isRequired,
    airport: PropTypes.string.isRequired,
  }).isRequired,
  destination: PropTypes.shape({
    date: PropTypes.string.isRequired,
    airport: PropTypes.string.isRequired,
  }).isRequired,
  duration: PropTypes.number.isRequired,
  stops: PropTypes.number.isRequired,
};
FlightSummary.propTypes = FlightType;

const onClickHandler = () => fakeOnClick('Select');
const ItineraryItem = ({
  flights, price, agent, id,
}) => ( // TODO Franciskone: add tests
  <BpkCard className={c('ItineraryItem')}>
    {
      flights.map(({
        carrier,
        origin,
        destination,
        duration,
        stops,
      }) => (
        <FlightSummary
          carrier={carrier}
          origin={origin}
          destination={destination}
          duration={duration}
          stops={stops}
        />
      ))
    }
    
    <div className={c('footer')}>
      <div className={c('footer__info')}>
        <BpkText textStyle="xl" className={c('footer__price')}>{price} £</BpkText>
        <BpkText textStyle="base" className={c('footer__agent')}>{agent}</BpkText>
      </div>
      <BpkButton
        className={c('footer__button')}
        onClick={onClickHandler}
      >
        Select
      </BpkButton>
    </div>
  </BpkCard>);


export const ItineraryType = {
  id: PropTypes.string.isRequired,
  flights: PropTypes.arrayOf(PropTypes.shape(FlightType)).isRequired,
  price: PropTypes.number.isRequired,
  agent: PropTypes.string.isRequired,
};
ItineraryItem.propTypes = ItineraryType;

export default ItineraryItem;

