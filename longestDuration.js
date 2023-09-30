function getLongestDuration(h, m, s) {
  const vals = {}
  const hs = h * 60;
  const ms = m;
  const ss = s / 60;
  vals[hs] = h;
  vals[ms] = m;
  vals[ss] = s;
  return vals[Math.max(h * 60, m, s / 60)];
}

