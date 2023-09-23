function monthsInterval(fromMonth, toMonth) {
  let months = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December'
  }
  let res = [];
  let from = fromMonth.getMonth();
  let to = toMonth.getMonth();
  if (from < to)
    for (let i = from; i <= to; i++)
      res.push(months[i])
  else if (from === to) {
    return Object.values(months)
  }
  else {
    for (let i = 0; i <= to; i++)
      res.push(months[i])
    for (let i = from; i <= 11; i++)
      res.push(months[i])
  }
  return res
}

//1
let january = new Date(2017, 0, 1);
let march = new Date(2017, 2, 1);
console.log(monthsInterval(january, march));
//2
let sept = new Date(2017, 8, 1);
let april = new Date(2018, 3, 1)
console.log(monthsInterval(sept, april));
//3
let march1 = new Date(2018, 2, 1);
let march2 = new Date(2018, 2, 1);
console.log(monthsInterval(march1, march2));