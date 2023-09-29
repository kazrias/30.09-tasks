function getDay(date) {
  const dates = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  return dates[new Date(date).getDay()]
}
