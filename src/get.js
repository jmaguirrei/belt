
export function get(obj, key, defaultValue) {

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
