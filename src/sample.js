

export function sample(array = []) {

  if (array.length === 0) return null;

  const rand = Math.floor(array.length * Math.random());
  return array[rand];

}
