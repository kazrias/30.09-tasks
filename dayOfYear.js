function isLeapYear(year) {
  return ((year % 4 === 0 && year % 100 > 0) || year % 400 == 0);
}

function dayOfYear(date) {
  let daysAmount = {
    1: 31,
    2: 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
  }
  let [day, month, year] = date.split('/').map(Number);
  if (isLeapYear(year))
    daysAmount[2] += 1;
  let mnth = 1;
  let res = 0;
  while (mnth < month) {
    res += daysAmount[mnth];
    mnth++
  }
  return res + day
}
