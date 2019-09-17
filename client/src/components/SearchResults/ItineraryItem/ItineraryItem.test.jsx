import React from 'react';
import TestRenderer from 'react-test-renderer';

import ItineraryItem from './ItineraryItem';

describe('ItineraryItem', () => {
  it('should render correctly', () => {
    const legs = [
      {
        id: '11235-1909211935--32480-0-13554-1909212100',
        carrier: 'BA',
        duration: 85,
        stops: 0,
        origin: {
          date: '2019-09-21T19:35:00',
          airport: 'EDI',
        },
        destination: {
          date: '2019-09-21T21:00:00',
          airport: 'LHR',
        },
      },
      {
        id: '13771-1909280705--32356-0-11235-1909280825',
        carrier: 'U2',
        duration: 80,
        stops: 0,
        origin: {
          date: '2019-09-28T07:05:00',
          airport: 'LTN',
        },
        destination: {
          date: '2019-09-28T08:25:00',
          airport: 'EDI',
        },
      },
    ];
    const price = 321.29;
    const agent = 'ebookers';
    
    const tree = TestRenderer.create(
      <ItineraryItem
        legs={legs}
        price={price}
        agent={agent}
      />,
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
  });
});
