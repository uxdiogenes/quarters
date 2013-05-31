# quarters

A simple npm module for dealing with the (fiscal) quarters of the year.

## Usage
Install like so:

```
npm install quarters
```

Then use in your JavaScript files for NodeJS like so:

```js
var quarters = require('quarters');
var thisQuarter = quarters.getQuarter(new Date());
```

## API


### ```quarters.getStartMonth(quarter)```

Given a quarter, returns the month when the quarter begins (0 indexed).


### ```quarters.getEndMonth(quarter)```

Given a quarter (1 indexed), returns the month when the quarter ends (0 indexed).


### quarters.getQuarterStart(quarter, year)
Given a quarter (1 indexed) and a year, returns a date object representing the beginning of
the quarter.


### quarters.getQuarterEnd(quarter, year)
Given a quarter (1 indexed )and year, returns a date object representing the ned
of the quarter.


### quarters.getQuarter(date)
Given a date object, this returns the (1 indexed) quarter of the year that contains
the date.