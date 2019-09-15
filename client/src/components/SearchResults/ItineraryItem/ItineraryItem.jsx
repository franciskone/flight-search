import React from 'react';
import PropTypes from 'prop-types';
import BpkCard from 'bpk-component-card';
import BpkText from 'bpk-component-text';
import BpkButton from 'bpk-component-button';
import BpkLongArrowRight from 'bpk-component-icon/lg/long-arrow-right';

import { fakeOnClick, styleGetter } from '../../../util';
import STYLE from './ItineraryItem.scss';

const c = styleGetter(STYLE);

const getTimeFromDate = date => {
  const dateObj = new Date(date);
  const hours = (`0${dateObj.getHours()}`).slice(-2);
  const minutes = (`0${dateObj.getMinutes()}`).slice(-2);
  
  return `${hours}:${minutes}`;
}; // TODO Franciskone: add test

const AirportInfo = ({ date, airport, isDestination }) => (
  <div className={c('airport', { 'airport--destination': isDestination })}>
    <BpkText textStyle="lg" className={c('airport__time')}>{getTimeFromDate(date)}</BpkText>
    <BpkText textStyle="lg" className={c('airport__name')}>{airport}</BpkText>
  </div>
);


const AirportInfoType = {
  date: PropTypes.string.isRequired,
  airport: PropTypes.string.isRequired,
};
AirportInfo.proptypes = {
  ...AirportInfoType,
  isDestination: PropTypes.bool,
};
AirportInfo.defaultProps = {
  isDestination: false,
};


const FlightSummary = ({
  carrier, origin, destination, duration, stops,
}) => {
  let stopsInfo = 'Direct';
  if (stops > 0) {
    stopsInfo = stops > 1 ? `${stops} stops` : `${stops} stop`;
  }
  
  const stopsClassName = stops > 0
    ? 'details__stops--multiple'
    : 'details__stops--single';
  
  return (
    <div className={c('flight')}>
      <div className={c('route')}>
        
        <img
          className={c('carrier-logo')}
          src="https://logos.skyscnr.com/images/airlines/favicon/EK.png"
          alt="carrier logo"
          aria-hidden
        />
        
        <AirportInfo
          date={origin.date}
          airport={origin.airport}
        />
  
        <BpkLongArrowRight className={c('arrow')} />
  
        <AirportInfo
          date={destination.date}
          airport={destination.airport}
          isDestination
        />
      </div>
      
      <div className={c('details')}>
        <BpkText textStyle="md" className={c('details__duration')}>{duration}</BpkText> {/* TODO Franciskone: add formatting for timing */}
        <BpkText textStyle="md" className={c('details__stops', stopsClassName)}>{stopsInfo}</BpkText>
      </div>
    </div>
  );
};

const FlightType = {
  carrier: PropTypes.string.isRequired,
  origin: PropTypes.shape(AirportInfoType).isRequired,
  destination: PropTypes.shape(AirportInfoType).isRequired,
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
      }, key) => (
        <FlightSummary
          key={key /* TOO franciskone: ise the actual flight key  */}
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

