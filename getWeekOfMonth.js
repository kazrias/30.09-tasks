function getWeekOfMonth(date) {
  const monthStart = new Date(date.getFullYear(), date.getMonth(), 1);
  const firstWeekDay = monthStart.getDay();
  const monthDay = date.getDate();
  return Math.ceil((firstWeekDay + monthDay) / 7);
}
