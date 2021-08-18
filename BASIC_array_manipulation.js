//ini dibuka di web

// 1. menambah isi array
// var arr = ["a",1,true];
// console.log(arr);
// console.log(arr[1]);


// 2. menghapus isi array
// var arr = ["mentari", "enggar", "rizki"];
// arr[1]=undefined;
// console.log(arr);


// 3. menampilkan isi array
// var arr = ["mentari", "enggar", "rizki"];
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(element);
// }


// 4. method join
// var arr = ["mentari", "enggar", "rizki"];
// console.log(arr.join());
// console.log(arr.join('-'));


// 5. push & pop (akhir array)
// var arr = ["mentari", "enggar", "rizki"];
// arr.push('hawali');
// arr.pop();
// console.log(arr.join(' - '));


// 6. unshift & shift (awal array)
// var arr = ["mentari", "enggar", "rizki"];
// arr.unshift('mentari');//nambahin
// arr.shift(); //ngehapus
// console.log(arr.join(' - '));


// 7. splice & slice
// var arr = ['mentari', 'enggar', 'rizki', 'fadhlan', 'hawali'];
// arr.splice(1); //slice(indexAwal, mauDihapusBerapa, elemenBaru1, dst)
// arr.splice(2,0,'hawali');
// arr.splice(1,2, 'fadhlan', 'ai');
// var arr2 = arr.slice(1,3); // slice(awal, akhir)
// console.log(arr2.join(' - '));


// 8. forEach (ga mengembalikan/return)
// var nama = ['mentari', 'enggar', 'rizki', 'fadhlan', 'hawali'];
// nama.forEach(function(e,i){
//     console.log('Mahasiswa ke-'+i+' adalah: '+e);
// })


// 9. map (kayak foreach tp mengembalikan/return)
// var angka = [1,2,3,4,5,6,7,8];
// var angka2 = angka.map(function (e) {
//     return e*2;
// })
// console.log(angka2.join(' - '));


// 10. sort (urutan angka)
// var angka = [1,3,5,2,6,7,4,9,8];
// angka.sort();
// var angka2 = [1,2,10,3,4,5,20,30];
// angka2.sort(function (a,b) {
//     return a-b;
// })
// console.log(angka2.join(' - '));


// 11. Filter
// var angka = [1,3,5,2,6,7,4,9,8];
// var angkaFilter = angka.filter(function (x){
//     return x>5; //bisa banyak nilai, menghasilkan array
// });
// console.log(angkaFilter.join(' - '));


//  12. Find
// var angka = [1,3,5,2,6,7,4,9,8];
// var angkaFind = angka.find(function (x){
//     return x>5; //cuma 1 nilai
// });
// console.log(angkaFind);


// 13. findIndex
// var angka = [1,3,5,2,6,7,4,9,8];
// var angkaFindIndex = angka.findIndex(function (x) {
//     return x>8; //satu nilai, "index-ke?"
// });
// console.log(angkaFindIndex);


// 14. from
// var nama; 
// nama = Array.from("mentari er"); //memisah karakter kemudian jadiin array
// console.log(nama);


// 15. includes
// var kucingku = ["lucas", "syaiful", "blirik", "icam"];
// console.log(kucingku.includes("lucas")); // nyari, hasilnya t/f
// console.log(kucingku.includes("putih"));


// 16. indexOf
// var beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
// console.log(beasts.indexOf('bison')); //cari index bison pertama
// console.log(beasts.indexOf('bison',2)); //cari index bison kedua
// console.log(beasts.indexOf('human')); //ini gaada


// 17. lastIndexOf
// var beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
// console.log(beasts.lastIndexOf('bison'));//search dari belakang


// 18. reduce & reduceRight(dari kanan)
// var angka = [1,2,3,4];
// const reducer = (accumulator, currentValue) => accumulator + currentValue;
// console.log(angka.reduce(reducer)); //sum semua value dari array
// var angka2 = [[1,2],[5,6]].reduce(
//     (accumulator, currentValue) => accumulator.concat(currentValue)
// );
// console.log(angka2);


// 19. reverse
// var angka = [1,2,3,4];
// console.log(angka.reverse()); //reverse biasa


// 20. toLocaleString
var prices = ['￥7', 500, 8123, 12];
var localPrices = prices.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' }); //jadi format tertentu
console.log(localPrices);