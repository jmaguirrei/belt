

export function flatMap(array, fn = (x => x)) {

  return array.map(fn).reduce((acum, item) => [ ...acum ].concat(item), []);

}
