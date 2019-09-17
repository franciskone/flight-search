import { createMockStore } from 'redux-logic-test';
import { appInitLogic } from './appInitLogic';
import appInitAction from './appInitActions';
import flightSearchActions from '../flightSearch/flightSearchActions';

describe('app init logic', () => {
  it('appInitLogic', () => {
    const store = createMockStore({
      logic: appInitLogic,
      injectedDeps: {
        API: {
          flightSearch: () => null,
        },
        UTIL: {
          getNextDayMondayAndTuesday: () => ({
            nextMonday: '2019-01-02',
            nextTuesday: '2019-01-03',
          }),
        },
      },
    });
  
    const firstAction = appInitAction.init();
    store.dispatch(firstAction);
  
    store.whenComplete(() => {
      expect(store.actions[0]).toEqual(firstAction);
      expect(store.actions[1])
        .toEqual(flightSearchActions.search({
          originPlace: 'EDI-sky',
          destinationPlace: 'LOND-sky',
          outboundDate: '2019-01-02',
          inboundDate: '2019-01-03',
          adults: 1,
        }));
    });
  });
});

