import { createLogic } from 'redux-logic';
import { appInitActionType } from './appInitActions';
import { flightSearchActions } from '../flightSearch';

const initLogic = createLogic({
  type: appInitActionType.INIT,
  
  process({ getState, action }, dispatch, done) {
    const searchParams = {
      originPlace: 'EDI-sky',
      destinationPlace: 'LOND-sky',
      outboundDate: '2019-09-21',
      inboundDate: '2019-09-28',
      adults: 1,
    };
    
    dispatch(flightSearchActions.search(searchParams));
    
    done();
  },
});
export const appInitLogic = [initLogic];
