
export function omit(obj, keys) {

  return Object.keys(obj).reduce((acum, key) => {
    if (keys.includes(key)) return acum;
    if (typeof obj[key] === 'undefined') return acum;
    return {
      ...acum,
      [key]: obj[key],
    };
  }, {});

}
