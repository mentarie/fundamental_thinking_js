// KONSEP FILTER
// roti,  timun, daging, tomat, bawang, selada --> ["Filter yang sayur"] --> timun, tomat, selada

// KONSEP MAP
// roti,  timun, daging, tomat, bawang, selada --> ["Map bahan2 tersebut"] --> semua bahan dipotong, tapi potongannya dikelompokkan per-bahan aslinya

// KONSEP REDUCE
// roti,  timun, daging, tomat, bawang, selada --> ["Reduce"] --> jadi sandwich


// SOAL-------------------------------------------------------------------------------------------------------------------------------------------------------
// Terapkan ketiga method di atas
const angka = [-1,8,9,1,4,-5,-4,3,2,9];

// 1. Cari angka yang >=3 ----------------------------------------
// for
// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {
//     if (angka[i]>=3) {
//         newAngka.push(angka[i]);
//     }
// }
// console.log(newAngka);

// filter
const newAngka = angka.filter(function (num) {
   return num >=3;
});
// atau
const newAngka = angka.filter(num => num >=3);

console.log(newAngka);
// -----------------------------------------------------------------