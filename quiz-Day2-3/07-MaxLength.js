function maxWordLength(params) {
  let arr = params.split(" ");
  // console.log(arr);
  let arrWordLength = [];
  for (let i = 0; i < arr.length; i++) {
    arrWordLength.push(arr[i].length);
  }
  // console.log(arrWordLength);

  let max = Math.max(...arrWordLength);
  // console.log(max);
  for (let j = 0; j < arr.length; j++) {
    if (max === arrWordLength[j]) {
      return arr[j];
    }
  }
}

console.log(maxWordLength("aku suka bootcamp sentul city")); //bootcamp
