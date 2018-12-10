

export function random(low, high) {

  if (!low && !high) return Math.random();
  if (low && !high) return low * Math.random();
  if (!low && high) return Math.random();

  // Include boths edges as possible numbers
  const length = high - low + 1;
  return low + Math.floor(length * Math.random());

}
