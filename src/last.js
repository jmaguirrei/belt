

export function last(array = []) {


  if (array.length === 0) return null;

  return [ ...array ].slice(-1)[0];


}
