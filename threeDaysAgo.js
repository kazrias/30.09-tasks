function threeDaysAgo(date) {
  let dateCopy = new Date(date);
  dateCopy.setDate(date.getDate() - 3);
  return dateCopy.getDate();
}

