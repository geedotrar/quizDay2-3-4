function isPalindrome(word) {
  let wordlc = word.toLowerCase();
  // console.log(wordlc);
  const wordLength = wordlc.length;
  // console.log(wordLength);
  for (let i = 0; i < wordLength; i++) {
    if (wordlc[i] !== wordlc[wordLength - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome("kasur ini rUsak")); //true
