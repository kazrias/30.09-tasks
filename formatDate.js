function formatDate(date) {
  const [, month, day, year] = (date + '').split(' ');
  return `${day} ${month} ${year}`
}
