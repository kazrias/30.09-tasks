function myTimeOut(f, ms, ...args) {
  const finishAt = Date.now() + ms;
  while (Date.now() < finishAt) { }
  return f(...args)
}


function sumArgs(...args) {
  return args.reduce((curr, next) => curr + next)
}
