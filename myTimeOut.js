function myTimeOut(f, ms, ...args) {
  const finishAt = Date.now() + ms;
  while (Date.now() < finishAt) { }
  return f(...args)
}

