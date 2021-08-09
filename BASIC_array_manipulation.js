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
var arr = ["mentari", "enggar", "rizki"];
// arr.unshift('mentari');
arr.shift();
console.log(arr.join(' - '));