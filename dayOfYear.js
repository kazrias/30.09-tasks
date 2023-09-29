function dayOfYear(date) {
  let dt = new Date(date);
  let started = new Date(dt.getFullYear(), 0, 1)
  return (dt.getTime() - started.getTime()) / (1000 * 60 * 60 * 24) + 1
}
console.log(dayOfYear("3/1/2004"));
