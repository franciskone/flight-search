import { createLogic } from 'redux-logic';
import moment from 'moment';

import { appInitActionType } from './appInitActions';
import { flightSearchActions } from '../flightSearch';

const initLogic = createLogic({
  type: appInitActionType.INIT,
  
  process({ getState, action }, dispatch, done) {
    const searchParams = {
      originPlace: 'EDI-sky',
      destinationPlace: 'LOND-sky',
      outboundDate: moment().day(8).format('YYYY-MM-DD'),
      inboundDate: moment().day(9).format('YYYY-MM-DD'),
      adults: 1,
    };

    dispatch(flightSearchActions.search(searchParams));
    
    done();
  },
});
export const appInitLogic = [initLogic];
