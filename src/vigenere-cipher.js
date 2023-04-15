const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 function prepareKeyword(str, key) {
  const re = /[A-Z]/gi;
  
  while (key.length < str.length) {
    key += key;
  }
  str = str.toUpperCase();
  let newKey = '';
  let spaces = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].match(re)) {
      newKey += key[i - spaces].toUpperCase();
    } else {
      newKey += str[i];
      spaces++;
    }
  }
  return newKey;
}

function reverseStr(str) {
  let newStr = ''; 
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

class VigenereCipheringMachine {
  constructor(condition) {
    if (condition == false) {
      this.condition = false;
    } else {
      this.condition = true;
    }
  }

  encrypt(str, key) {
    if (!str || !key) {
      throw new Error ('Incorrect arguments!');
    }
    let alphabetLatin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let stringBeforeCrypt = str.toUpperCase();
    let keyword = prepareKeyword(str, key);
    let stringAfterCrypt = '';

    for (let i = 0; i < stringBeforeCrypt.length; i++) {
      let indexStr = alphabetLatin.indexOf(stringBeforeCrypt[i]);
      let indexKey = alphabetLatin.indexOf(keyword[i]);
      let indexInCryptStr = indexStr + indexKey;
      if (indexStr === -1) {
        stringAfterCrypt += stringBeforeCrypt[i];
        continue;
      } else if (indexInCryptStr > 25) {
        indexInCryptStr = indexInCryptStr - 26;
      } 
      stringAfterCrypt += alphabetLatin[indexInCryptStr];
    }

    if (this.condition == false) {
      return reverseStr(stringAfterCrypt);
    } else {
      return stringAfterCrypt;
    } 
  }

  decrypt(str, key) {
    if (!str || !key) {
      throw new Error ('Incorrect arguments!');
    }
    let alphabetLatin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let stringBeforeDecrypt = str.toUpperCase();
    let keyword = prepareKeyword(str, key);
    let stringAfterDecrypt = '';

    for (let i = 0; i < stringBeforeDecrypt.length; i++) {
      let indexInCryptStr = alphabetLatin.indexOf(stringBeforeDecrypt[i]);
      let indexKey = alphabetLatin.indexOf(keyword[i]);
      let indexInStr = indexInCryptStr - indexKey;
      if (indexInCryptStr === -1) {
        stringAfterDecrypt += stringBeforeDecrypt[i];
        continue;
      } else if (indexInStr < 0) {
        indexInStr = indexInStr + 26;
      } 
      stringAfterDecrypt += alphabetLatin[indexInStr];
    }

    if (this.condition == false) {
      return reverseStr(stringAfterDecrypt);
    } else {
      return stringAfterDecrypt;
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
