var quarters = {};

/**
  Given a quarter, returns the month when the quarter begins.
  @method getStartMonth
  @param quarter {Number} An integer 1-4, inclusive
  @return {Number} A 0-indexed representation of the start month
**/
quarters.getStartMonth = function (quarter) {
  var startMonth;
  switch (quarter) {
    case 1:
      startMonth = 0;
      break;
    case 2:
      startMonth = 3;
      break;
    case 3:
      startMonth = 6;
      break;
    case 4:
      startMonth = 9;
      break;
    default:
      throw 'Invalid Quarter: Quarter must be an integer 1-4';
  }
  return startMonth;
};

/**
  Given a quarter, returns the month when the quarter ends.
  @method getEndMonth
  @param quarter {Number} An integer 1-4, inclusive
  @return {Number} A 0-indexed representation of the start month
**/
quarters.getEndMonth = function (quarter) {
  return quarters.getStartMonth(quarter) + 2;
};

/**
  Given a quarter and year, returns the date the quarter begins
  @method getQuarterStart
  @param quarter {Number} An integer 1-4, inclusive
  @param year {Number} A year
  @return {Date} A date representing the begining of the quarter
**/
quarters.getQuarterStart = function (quarter, year) {
  return new Date(year, quarters.getStartMonth(quarter));
};

/**
  Given a quarter and year, returns the date the quarter ends
  @method getQuarterEnd
  @param quarter {Number} An integer 1-4, inclusive
  @param year {Number} A year
  @return {Date} A date representing the end of the quarter
**/
quarters.getQuarterEnd = function (quarter, year) {
  var endMonth = quarters.getEndMonth(quarter);
  var lastDayInEndMonth = new Date(year, endMonth + 1, 0).getDate();
  var endDate = new Date(year, endMonth, lastDayInEndMonth);
  // set hours makes sets the proper time in this last day
  endDate.setHours(23, 59, 59, 999);
  return endDate;
};

/**
  Gets the quarter that contains a date
  @method getQuarter
  @param date {Date} A date object. Defaults to now if none is passed in.
  @return {Date} A 1 indexed quarter (int 1-4)
**/
quarters.getQuarter = function (date) {
  date = date || new Date(); // If no date supplied, use today
  var quarters = [4, 1, 2, 3];
  return quarters[Math.floor(date.getMonth() / 3)];
};

module.exports = exports = quarters;