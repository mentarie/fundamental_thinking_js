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
var arr = ['mentari', 'enggar', 'rizki', 'fadhlan', 'hawali'];
// arr.splice(1); //slice(indexAwal, mauDihapusBerapa, elemenBaru1, dst)
// arr.splice(2,0,'hawali');
// arr.splice(1,2, 'fadhlan', 'ai');
var arr2 = arr.slice(1,3); // slice(awal, akhir)
console.log(arr2.join(' - '));