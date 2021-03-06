
export function uid(strLength = 6) {

  const now = String(Date.now());
  const middlePos = Math.ceil(now.length / 2);

  const availableChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const availableCharsLength = availableChars.length;

  // Start the final string
  let str = '';
  for (let i = 1; i <= strLength; i++) {
    const randChar = availableChars.charAt(
      Math.floor(Math.random() * availableCharsLength)
    );
    // Append this character to the string
    str += randChar;
  }

  return `${now.substr(0, middlePos)}-${str}-${now.substr(middlePos)}`;

}

