function getWeekOfMonth(date) {
  const monthStart = new Date(date.getFullYear(), date.getMonth(), 1);
  const firstWeekDay = monthStart.getDay();
  const monthDay = date.getDate();
  return Math.ceil((firstWeekDay + monthDay) / 7);
}

console.log(getWeekOfMonth(new Date(2017, 10, 9)));
console.log(getWeekOfMonth(new Date(2023, 0, 24)));
console.log(getWeekOfMonth(new Date()));