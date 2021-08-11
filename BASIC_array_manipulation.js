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
// arr.unshift('mentari');
// arr.shift();
// console.log(arr.join(' - '));

// 7. splice & slice
// var arr = ['mentari', 'enggar', 'rizki', 'fadhlan', 'hawali'];
// arr.splice(1); //slice(indexAwal, mauDihapusBerapa, elemenBaru1, dst)
// arr.splice(2,0,'hawali');
// arr.splice(1,2, 'fadhlan', 'ai');
// var arr2 = arr.slice(1,3); // slice(awal, akhir)
// console.log(arr2.join(' - '));

// 8. forEach (ga mengembalikan/return)
// var angka = [1,2,3,4,5,6,7,8];
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
var angka = [1,3,5,2,6,7,4,9,8];
angka.sort();
console.log(angka.join(' - '));