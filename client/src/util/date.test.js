import { formatDateForApi, getNextDayMondayAndTuesday, getTimeFromDate, minutesToTimeFormat } from './dates';

describe('date util', () => {
  it('formatDateForApi works properly', () => {
    expect(formatDateForApi(new Date(2019, 0, 1))).toBe('2019-01-01');
    expect(formatDateForApi(new Date(2019, 9, 1))).toBe('2019-10-01');
    expect(formatDateForApi(new Date(2019, 10, 15))).toBe('2019-11-15');
  });
  
  describe('getNextDayMondayAndTuesday', () => {
    const getTestOutput = (nextMonday, nextTuesday) => ({ nextMonday, nextTuesday });
  
    it('works for Sundays', () => {
      expect(getNextDayMondayAndTuesday(new Date(2019, 8, 15)))
        .toEqual(getTestOutput('2019-09-16', '2019-09-17'));
    });
    
    it('works for Mondays', () => {
      expect(getNextDayMondayAndTuesday(new Date(2019, 8, 16)))
        .toEqual(getTestOutput('2019-09-16', '2019-09-17'));
    });
    
    it('works for Tuesdays', () => {
      expect(getNextDayMondayAndTuesday(new Date(2019, 8, 17)))
        .toEqual(getTestOutput('2019-09-23', '2019-09-24'));
    });
    
    it('works for Wednesdays', () => {
      expect(getNextDayMondayAndTuesday(new Date(2019, 8, 18)))
        .toEqual(getTestOutput('2019-09-23', '2019-09-24'));
    });
    
    it('works for Thursdays', () => {
      expect(getNextDayMondayAndTuesday(new Date(2019, 8, 19)))
        .toEqual(getTestOutput('2019-09-23', '2019-09-24'));
    });
    
    it('works for Fridays', () => {
      expect(getNextDayMondayAndTuesday(new Date(2019, 8, 20)))
        .toEqual(getTestOutput('2019-09-23', '2019-09-24'));
    });
    
    it('works for Saturdays', () => {
      expect(getNextDayMondayAndTuesday(new Date(2019, 8, 21)))
        .toEqual(getTestOutput('2019-09-23', '2019-09-24'));
    });
  });
  
  it('getTimeFromDate works properly', () => {
    expect(getTimeFromDate('2019-09-21T09:35:00')).toBe('09:35');
    expect(getTimeFromDate('2019-09-21T09:05:00')).toBe('09:05');
    expect(getTimeFromDate('2019-09-21T19:35:00')).toBe('19:35');
    expect(getTimeFromDate('2019-09-21T00:00:00')).toBe('00:00');
  });
  
  it('minutesToTimeFormat works properly', () => {
    expect(minutesToTimeFormat(-1)).toBe('-');
    expect(minutesToTimeFormat(5)).toBe('5m');
    expect(minutesToTimeFormat(10)).toBe('10m');
    expect(minutesToTimeFormat(60)).toBe('1h 00');
    expect(minutesToTimeFormat(65)).toBe('1h 05');
    expect(minutesToTimeFormat(75)).toBe('1h 15');
  });
});
