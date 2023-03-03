function isArraysEqual(arrayA, arrayB) {
  return (
    arrayA.length === arrayB.length &&
    arrayA.every((val, index) => {
      // console.log(val, index);
      return val === arrayB[index];
    })
  );
}

const fruitNamesA = ["rambutan", "durian", "jeruk", "nangka"];
const fruitNamesB = ["rambutan", "durian", "jeruk", "nangka"];
const fruitNamesC = ["anggur", "apel", "mangga", "alpukat"];
console.log(isArraysEqual(fruitNamesA, fruitNamesB)); // true
console.log(isArraysEqual(fruitNamesA, fruitNamesC)); // false
