import { createLogic } from 'redux-logic';

import { appInitActionType } from './appInitActions';
import { flightSearchActions } from '../flightSearch';

const initLogic = createLogic({
  type: appInitActionType.INIT,
  
  process({ UTIL }, dispatch, done) {
    const { nextMonday, nextTuesday } = UTIL.getNextDayMondayAndTuesday();
    
    const searchParams = {
      originPlace: 'EDI-sky',
      destinationPlace: 'LOND-sky',
      outboundDate: nextMonday,
      inboundDate: nextTuesday,
      adults: 1,
    };

    dispatch(flightSearchActions.search(searchParams));
    
    done();
  },
});
export const appInitLogic = [initLogic];
