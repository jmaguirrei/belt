

export function range(low = 0, high = 0) {

  if (!high && low > 0) return [ ...Array(low).keys() ];

  if (high - low <= 0) return [];

  const array = [ ...Array(high - low).keys() ];
  return array.map(elem => elem + low);

}
