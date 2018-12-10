
export function has(obj, key) {

  const splittedKeys = key.split('.');

  let hasKey = true;
  splittedKeys.reduce((acum, value) => {
    if (!hasKey) return null;
    if (typeof acum[value] === 'undefined') {
      hasKey = false;
      return null;
    }
    return acum[value];
  }, obj);

  return hasKey;

}
