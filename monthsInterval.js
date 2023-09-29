function monthsInterval(date1, date2) {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let dt1 = new Date(date1)
  let dt2 = new Date(date2)
  const res = {};
  if (dt1 > dt2) {
    [dt1, dt2] = [dt2, dt1]
  }
  while (dt1 <= dt2) {
    const currMonth = dt1.getMonth();
    const monthToPush = months[currMonth];
    if (!res.hasOwnProperty(monthToPush))
      res[monthToPush] = true;
    dt1.setMonth(currMonth + 1)
  }
  return Object.keys(res)
}