/** berapa banyak tahun kabisat antara tahun1 ke tahun2 */

function howManyKabisat(year1, year2) {
  let listTahun = [];
  for (let i = year1; i <= year2; i++) {
    listTahun.push(i);
  }

  let listKabisat = [];

  for (let i = 0; i < listTahun.length; i++) {
    if (isKabisat(listTahun[i])) {
      listKabisat.push(listTahun[i]);
    }
  }

  return `${listKabisat} = ${listKabisat.length}`;
}

function isKabisat(year) {
  if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
    return true;
  } else {
    return false;
  }
}

console.log(howManyKabisat(1997, 2021));
// console.log(isKabisat(1996));


// 1. Jika angka tahun itu habis dibagi 400, maka tahun itu sudah pasti tahun kabisat.
// 2. Jika angka tahun itu tidak habis dibagi 400 tetapi habis dibagi 100, maka tahun itu sudah pasti bukan merupakan tahun       kabisat.
// 3. Jika angka tahun itu tidak habis dibagi 400, tidak habis dibagi 100 akan tetapi habis dibagi 4, maka tahun itu merupakan tahun kabisat.
// 4. Jika angka tahun tidak habis dibagi 400, tidak habis dibagi 100, dan tidak habis dibagi 4, maka tahun tersebut bukan merupakan tahun kabisat.
