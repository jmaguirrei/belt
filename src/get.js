
export function get(obj, key, defaultValue) {

  // Key is number
  if (typeof key === 'number') {
    if (obj[key] === undefined) return defaultValue;
    return obj[key];
  }

  // Key is string
  const splittedKeys = key.split('.');
  let exit = false;
  return splittedKeys.reduce((acum, value) => {
    if (exit) return defaultValue;
    if (!acum[value]) {
      exit = true;
      return defaultValue;
    }
    return acum[value];
  }, obj);


}
