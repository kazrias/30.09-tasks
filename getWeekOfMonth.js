function getWeekOfMonth(date) {
  const dateStart = new Date(date.getFullYear(), date.getMonth(), 1)
  return Math.ceil(date.getDate() / 7)
}

console.log(getWeekOfMonth(new Date(2023,0,24)));