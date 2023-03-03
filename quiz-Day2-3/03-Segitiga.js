/** buat segitiga  */

let hasil = "";
for (let i = 4; i > 0; i--) {
  for (let j = 1; j <= i; j++) {
    // hasil += " j=" + j + " " + "i=" + i;
    hasil += j + " ";
  }
  hasil += "\n";
}
console.log(hasil);

// output
// 1 2 3 4    i=4
// 1 2 3      i=3
// 1 2        i=2
// 1          i=1

let result2 = "";
for (let i = 0; i < 5; i++) {
  for (let j = 5; j > i; j--) {
    result2 += j - i + " ";
    // result2 += " j=" + j + " i=" + i;
  }
  result2 += "\n";
}
console.log(result2);

// output
// 5 4 3 2 1  i=0
// 4 3 2 1    i=1
// 3 2 1      i=2
// 2 1        i=3
// 1          i=4
