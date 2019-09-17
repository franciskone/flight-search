export const formatDateForApi = (date) => {
  const year = date.getFullYear();
  const month = (`0${date.getMonth() + 1}`).slice(-2);
  const day = (`0${date.getDate()}`).slice(-2);
  
  return `${year}-${month}-${day}`;
};

export const getNextDayMondayAndTuesday = (currentDate = new Date()) => {
  const mondayIndex = 1;
  const currentWeekDay = currentDate.getDay();
  
  const nextMondayDate = new Date(currentDate);
  const nextTuesdayDate = new Date(currentDate);
  
  if (currentWeekDay > mondayIndex) {
    const shift = (7 + mondayIndex) - currentWeekDay;
    nextMondayDate.setDate(currentDate.getDate() + shift);
  } else if (currentWeekDay < mondayIndex) {
    const shift = mondayIndex - currentWeekDay;
    nextMondayDate.setDate(currentDate.getDate() + shift);
  }
  
  nextTuesdayDate.setDate(nextMondayDate.getDate() + 1);
  
  return {
    nextMonday: formatDateForApi(nextMondayDate),
    nextTuesday: formatDateForApi(nextTuesdayDate),
  };
};

export const getTimeFromDate = (date) => {
  const dateObj = new Date(date);
  const hours = (`0${dateObj.getHours()}`).slice(-2);
  const minutes = (`0${dateObj.getMinutes()}`).slice(-2);
  
  return `${hours}:${minutes}`;
};

export const minutesToTimeFormat = (minutes) => {
  if (minutes > 0) {
    const MINUTES_IN_HOUR = 60;
    
    const hours = Math.floor(minutes / MINUTES_IN_HOUR);
    const minutesNum = minutes % MINUTES_IN_HOUR;
    
    const minutesStr = minutesNum < 10 && hours > 0
      ? `0${minutesNum}`
      : `${minutesNum}`;
    
    return hours > 0
      ? `${hours}h ${minutesStr}`
      : `${minutesStr}m`;
  }
  return '-';
};
