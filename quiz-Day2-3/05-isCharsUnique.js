function isCharsUnique(string) {
  const chars = string.split("").sort();
  // console.log(chars);
  for (let i = 1; i < chars.length; i++) {
    if (chars[i] === chars[i - 1]) {
      return false;
    }
  }

  return true;
}
console.log(isCharsUnique("abcdefg")); //true
console.log(isCharsUnique("abcdefga")); //false
