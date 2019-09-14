import React from 'react';
import TestRenderer from 'react-test-renderer';

import SearchResultsHeader, { formatPassengers } from './SearchResultsHeader';

describe('SearchResultsHeader', () => {
  describe('component render', () => {
    it('should render correctly with cabin class', () => {
      const tree = TestRenderer.create(
        <SearchResultsHeader
          origin="ori"
          destination="des"
          passengers={1}
          cabinClass="cabinclass"
        />,
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });
    it('should render correctly with cabin class and multiple travellers', () => {
      const tree = TestRenderer.create(
        <SearchResultsHeader
          origin="ori"
          destination="des"
          passengers={2}
          cabinClass="cabinclass"
        />,
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('should render correctly without cabin class', () => {
      const tree = TestRenderer.create(
        <SearchResultsHeader
          origin="ori"
          destination="des"
          passengers={1}
        />,
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  describe('formatPassengers', () => {
    const TRAVELLER = 'traveller';
    const CABIN_CLASS = 'test';

    it('single passengers no cabin class', () => {
      expect(formatPassengers(1)).toBe(`1 ${TRAVELLER}`);
    });
    it('multiple passengers no cabin class', () => {
      expect(formatPassengers(2)).toBe(`2 ${TRAVELLER}s`);
    });
    it('single passengers with cabin class', () => {
      expect(formatPassengers(1, CABIN_CLASS)).toBe(`1 ${TRAVELLER}, ${CABIN_CLASS}`);
    });
    it('multiple passengers with cabin class', () => {
      expect(formatPassengers(2, CABIN_CLASS)).toBe(`2 ${TRAVELLER}s, ${CABIN_CLASS}`);
    });
  });
});

