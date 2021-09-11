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
// // for
// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {
//     if (angka[i]>=3) {
//         newAngka.push(angka[i]);
//     }
// }
// console.log(newAngka);

// // filter
// const newAngka = angka.filter(function (num) {
//    return num >=3;
// });
// // atau
// const newAngka = angka.filter(num => num >=3);

// console.log(newAngka);
// -----------------------------------------------------------------



// 2. Kalikan semua angka dengan 2 ---------------------------------
// //map
// const newAngka2 = angka.map(num => num*2);
// console.log(newAngka2);
// -----------------------------------------------------------------



// 3. Menjumlahkan semua angka dalam array -------------------------
// Reduce
// const newAngka3 = angka.reduce((accumulator, currentValue) => 
//    accumulator + currentValue, 0
// ); //0 adalah default nilai awal, bisa diubah
// console.log(newAngka3);
// -----------------------------------------------------------------




// 4. Method Chaining
// Cari angka lebih dari 5, lalu kalikan 3, terus jumlah!
const hasil = angka.filter(num => num > 5)
   .map(num => num*3)
   .reduce((accumulator,currentValue) => accumulator+currentValue);
console.log(hasil);