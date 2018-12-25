
export function parseEnv(src) {

  // convert Buffers before splitting into lines and processing
  return src.toString().split('\n').reduce((acum, line, idx) => {

    // matching "KEY' and 'VAL' in 'KEY=VAL'
    var keyValueArr = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);

    // matched?
    if (!keyValueArr) return acum;

    const key = keyValueArr[1];
    // default undefined or missing values to empty string
    let value = keyValueArr[2] || '';

    // expand newlines in quoted values
    const len = value ? value.length : 0;
    if (len > 0 && value.charAt(0) === '"' && value.charAt(len - 1) === '"') {
      value = value.replace(/\\n/gm, '\n');
    }

    // remove any surrounding quotes and extra spaces
    value = value.replace(/(^['"]|['"]$)/g, '').trim();

    return {
      ...acum,
      [key]: value,
    };

  }, {});

}

