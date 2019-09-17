import { flightSearchItinerariesForResultsSelector } from './flightSearchSelectors';
import { FLIGHT_SEARCH_REDUCER_NAME } from './index';

const testState = {
  [FLIGHT_SEARCH_REDUCER_NAME]: {
    itineraries: [
      {
        OutboundLegId: '11235-1909211935--32480-0-13554-1909212100',
        InboundLegId: '13771-1909280705--32356-0-11235-1909280825',
        PricingOptions: [
          {
            Agents: [
              2365707,
            ],
            QuoteAgeInMinutes: 18,
            Price: 321.29,
            DeeplinkUrl: 'http://partners.api.skyscanner.net/apiservices/deeplink/v2?_cje=zOm%2f6FCg6gDOE4rdoXmlE7hM3pD0U74mG5ftPhdP2gYHYNfl2GcrqQa0epbDDGLd&url=https%3a%2f%2fwww.skyscanner.net%2ftransport_deeplink%2f4.0%2fUK%2fen-GB%2fGBP%2febuk%2f2%2f11235.4698.2019-09-21%2c4698.11235.2019-09-28%2fair%2ftrava%2fflights%3fitinerary%3dflight%7c-32480%7c1463%7c11235%7c2019-09-21T19%3a35%7c13554%7c2019-09-21T21%3a00%7c85%7cHTZ0RO%7cH%7c-%2cflight%7c-32356%7c11%7c13771%7c2019-09-28T07%3a05%7c11235%7c2019-09-28T08%3a25%7c80%7cEconomy+Promo%7cY%7c-%26carriers%3d-32480%2c-32356%26operators%3d-32480%2c-32356%26passengers%3d1%26channel%3ddataapi%26cabin_class%3deconomy%26facilitated%3dfalse%26ticket_price%3d321.29%26is_npt%3dfalse%26is_multipart%3dfalse%26client_id%3dskyscanner_b2b%26q_ids%3debuk.11235.4698.190921.190928.1..E%7c9179587916148995377%26q_sources%3dJACQUARD%26commercial_filters%3dfalse%26q_datetime_utc%3d2019-09-14T11%3a13%3a00%26pqid%3dfalse',
          },
          {
            Agents: [
              3165195,
            ],
            QuoteAgeInMinutes: 18,
            Price: 358.14,
            DeeplinkUrl: 'http://partners.api.skyscanner.net/apiservices/deeplink/v2?_cje=zOm%2f6FCg6gDOE4rdoXmlE7hM3pD0U74mG5ftPhdP2gYHYNfl2GcrqQa0epbDDGLd&url=https%3a%2f%2fwww.skyscanner.net%2ftransport_deeplink%2f4.0%2fUK%2fen-GB%2fGBP%2flmuk%2f2%2f11235.4698.2019-09-21%2c4698.11235.2019-09-28%2fair%2ftrava%2fflights%3fitinerary%3dflight%7c-32480%7c1463%7c11235%7c2019-09-21T19%3a35%7c13554%7c2019-09-21T21%3a00%7c85%7cHZ0RO%7cH%7c-%2cflight%7c-32356%7c11%7c13771%7c2019-09-28T07%3a05%7c11235%7c2019-09-28T08%3a25%7c80%7c-%7cY%7c-%26carriers%3d-32480%2c-32356%26operators%3d-32480%2c-32356%26passengers%3d1%26channel%3ddataapi%26cabin_class%3deconomy%26facilitated%3dfalse%26ticket_price%3d358.14%26is_npt%3dfalse%26is_multipart%3dfalse%26client_id%3dskyscanner_b2b%26q_ids%3dlmuk.11235.4698.190921.190928.1..E%7c7278028634101517807%26q_sources%3dJACQUARD%26commercial_filters%3dfalse%26q_datetime_utc%3d2019-09-14T11%3a13%3a00%26pqid%3dfalse',
          },
          {
            Agents: [
              3503883,
            ],
            QuoteAgeInMinutes: 18,
            Price: 358.92,
            DeeplinkUrl: 'http://partners.api.skyscanner.net/apiservices/deeplink/v2?_cje=zOm%2f6FCg6gDOE4rdoXmlE7hM3pD0U74mG5ftPhdP2gYHYNfl2GcrqQa0epbDDGLd&url=https%3a%2f%2fwww.skyscanner.net%2ftransport_deeplink%2f4.0%2fUK%2fen-GB%2fGBP%2fopuk%2f2%2f11235.4698.2019-09-21%2c4698.11235.2019-09-28%2fair%2ftrava%2fflights%3fitinerary%3dflight%7c-32480%7c1463%7c11235%7c2019-09-21T19%3a35%7c13554%7c2019-09-21T21%3a00%7c85%7c-%7c-%7c-%2cflight%7c-32356%7c11%7c13771%7c2019-09-28T07%3a05%7c11235%7c2019-09-28T08%3a25%7c80%7c-%7c-%7c-%26carriers%3d-32480%2c-32356%26operators%3d-32480%2c-32356%26passengers%3d1%26channel%3ddataapi%26cabin_class%3deconomy%26facilitated%3dfalse%26ticket_price%3d358.92%26is_npt%3dfalse%26is_multipart%3dfalse%26client_id%3dskyscanner_b2b%26q_ids%3dopuk.11235.4698.190921.190928.1..E%7c8681675452232332516%26q_sources%3dJACQUARD%26commercial_filters%3dfalse%26q_datetime_utc%3d2019-09-14T11%3a13%3a00%26pqid%3dfalse',
          },
          {
            Agents: [
              2370315,
            ],
            QuoteAgeInMinutes: 18,
            Price: 360.1,
            DeeplinkUrl: 'http://partners.api.skyscanner.net/apiservices/deeplink/v2?_cje=zOm%2f6FCg6gDOE4rdoXmlE7hM3pD0U74mG5ftPhdP2gYHYNfl2GcrqQa0epbDDGLd&url=https%3a%2f%2fwww.skyscanner.net%2ftransport_deeplink%2f4.0%2fUK%2fen-GB%2fGBP%2feduk%2f2%2f11235.4698.2019-09-21%2c4698.11235.2019-09-28%2fair%2ftrava%2fflights%3fitinerary%3dflight%7c-32480%7c1463%7c11235%7c2019-09-21T19%3a35%7c13554%7c2019-09-21T21%3a00%7c85%7c-%7c-%7c-%2cflight%7c-32356%7c11%7c13771%7c2019-09-28T07%3a05%7c11235%7c2019-09-28T08%3a25%7c80%7c-%7c-%7c-%26carriers%3d-32480%2c-32356%26operators%3d-32480%2c-32356%26passengers%3d1%26channel%3ddataapi%26cabin_class%3deconomy%26facilitated%3dfalse%26ticket_price%3d360.10%26is_npt%3dfalse%26is_multipart%3dfalse%26client_id%3dskyscanner_b2b%26q_ids%3deduk.11235.4698.190921.190928.1..E%7c8681675452232332516%26q_sources%3dJACQUARD%26commercial_filters%3dfalse%26q_datetime_utc%3d2019-09-14T11%3a13%3a00%26pqid%3dfalse',
          },
        ],
      },
    ],
    legsById: {
      '11235-1909211935--32480-0-13554-1909212100': {
        Id: '11235-1909211935--32480-0-13554-1909212100',
        SegmentIds: [
          0,
        ],
        OriginStation: 11235,
        DestinationStation: 13554,
        Departure: '2019-09-21T19:35:00',
        Arrival: '2019-09-21T21:00:00',
        Duration: 85,
        JourneyMode: 'Flight',
        Stops: [],
        Carriers: [
          881,
        ],
        OperatingCarriers: [
          881,
        ],
        Directionality: 'Outbound',
        FlightNumbers: [
          {
            FlightNumber: '1463',
            CarrierId: 881,
          },
        ],
      },
      '13771-1909280705--32356-0-11235-1909280825': {
        Id: '13771-1909280705--32356-0-11235-1909280825',
        SegmentIds: [
          1,
        ],
        OriginStation: 13771,
        DestinationStation: 11235,
        Departure: '2019-09-28T07:05:00',
        Arrival: '2019-09-28T08:25:00',
        Duration: 80,
        JourneyMode: 'Flight',
        Stops: [],
        Carriers: [
          1050,
        ],
        OperatingCarriers: [
          1050,
        ],
        Directionality: 'Inbound',
        FlightNumbers: [
          {
            FlightNumber: '11',
            CarrierId: 1050,
          },
        ],
      },
    },
    agentsById: {
      2365707: {
        Id: 2365707,
        Name: 'ebookers',
        ImageUrl: 'https://s1.apideeplink.com/images/websites/ebuk.png',
        Status: 'UpdatesComplete',
        OptimisedForMobile: true,
        Type: 'TravelAgent',
      },
      2370315: {
        Id: 2370315,
        Name: 'eDreams',
        ImageUrl: 'https://s1.apideeplink.com/images/websites/eduk.png',
        Status: 'UpdatesComplete',
        OptimisedForMobile: true,
        Type: 'TravelAgent',
      },
      3165195: {
        Id: 3165195,
        Name: 'lastminute.com',
        ImageUrl: 'https://s1.apideeplink.com/images/websites/lmuk.png',
        Status: 'UpdatesComplete',
        OptimisedForMobile: true,
        Type: 'TravelAgent',
      },
      3503883: {
        Id: 3503883,
        Name: 'Opodo',
        ImageUrl: 'https://s1.apideeplink.com/images/websites/opuk.png',
        Status: 'UpdatesComplete',
        OptimisedForMobile: true,
        Type: 'TravelAgent',
      },
    },
    segmentsById: {
      0: {
        Id: 0,
        OriginStation: 11235,
        DestinationStation: 13554,
        DepartureDateTime: '2019-09-21T19:35:00',
        ArrivalDateTime: '2019-09-21T21:00:00',
        Carrier: 881,
        OperatingCarrier: 881,
        Duration: 85,
        FlightNumber: '1463',
        JourneyMode: 'Flight',
        Directionality: 'Outbound',
      },
      1: {
        Id: 1,
        OriginStation: 13771,
        DestinationStation: 11235,
        DepartureDateTime: '2019-09-28T07:05:00',
        ArrivalDateTime: '2019-09-28T08:25:00',
        Carrier: 1050,
        OperatingCarrier: 1050,
        Duration: 80,
        FlightNumber: '11',
        JourneyMode: 'Flight',
        Directionality: 'Inbound',
      },
    },
    placesById: {
      11235: {
        Id: 11235,
        ParentId: 2343,
        Code: 'EDI',
        Type: 'Airport',
        Name: 'Edinburgh',
      },
      13554: {
        Id: 13554,
        ParentId: 4698,
        Code: 'LHR',
        Type: 'Airport',
        Name: 'London Heathrow',
      },
      13771: {
        Id: 13771,
        ParentId: 4698,
        Code: 'LTN',
        Type: 'Airport',
        Name: 'London Luton',
      },
    },
    carriersById: {
      881: {
        Id: 881,
        Code: 'BA',
        Name: 'British Airways',
        ImageUrl: 'https://s1.apideeplink.com/images/airlines/BA.png',
        DisplayCode: 'BA',
      },
      1050: {
        Id: 1050,
        Code: 'U2',
        Name: 'easyJet',
        ImageUrl: 'https://s1.apideeplink.com/images/airlines/EZ.png',
        DisplayCode: 'EZY',
      },
    },
    currenciesById: {
      GBP: {
        Code: 'GBP',
        Symbol: '£',
        ThousandsSeparator: ',',
        DecimalSeparator: '.',
        SymbolOnLeft: true,
        SpaceBetweenAmountAndSymbol: false,
        RoundingCoefficient: 0,
        DecimalDigits: 2,
      },
    },
  },
};

const flightSearchItinerariesSelectorOutput = [
  {
    id: '11235-1909211935--32480-0-13554-1909212100_13771-1909280705--32356-0-11235-1909280825',
    legs: [
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
    ],
    price: 321.29,
    agent: 'ebookers',
  },
];

describe('flight search selectors', () => {
  it('flightSearchLegByIdForResultsSelector', () => {
    expect(flightSearchItinerariesForResultsSelector(testState))
      .toEqual(flightSearchItinerariesSelectorOutput);
  });
});
