const checkPermute = function (stringOne, stringTwo) {
  // if different lengths, return false

  // else sort and compare
  // (doesnt matter how it's sorted, as long as it's sorted the same way)

  if (stringOne.length !== stringTwo.length) {
    return false;
  }

  let arr1 = stringOne.split("").sort();
  // console.log(arr1)
  let arr2 = stringTwo.split("").sort();
  // console.log(arr2)

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

console.log(checkPermute("aba", "aab")); //true;
console.log(checkPermute("aba", "aaba")); //false;
console.log(checkPermute("aba", "aa")); //false;
