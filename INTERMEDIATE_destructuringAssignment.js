// Destructuring Assignment
// Meng-assign isi array dan dipetakan ke variabel baru

// 1
const coba = ['satu', 'dua', 'tiga'];
const [a,b,c] = coba;
console.log(a);
console.log(b);
console.log(c);
console.log('---------------');

// 2
const mhs = {
    nama: 'Mentari',
    usia: 22
};
const {nama,usia} = mhs;
console.log(nama);
console.log(usia);
console.log('----------------');


// Destructuring array
const perkenalan = ['Halo', 'nama', 'saya', 'Mentari'];
const [salam, , ,namaku] = perkenalan; //kalau index tertentu gamau diassign, tinggal di skip
console.log(namaku);
console.log('----------------');


// Swap Items in Destructuring array
let x = 1;
let y = 2;
console.log(`${x} dan ${y}`);
[x,y] = [y,x];
console.log(`${x} dan ${y}`);
