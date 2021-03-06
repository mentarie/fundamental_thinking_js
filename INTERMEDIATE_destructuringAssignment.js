// Destructuring Assignment
// Meng-assign isi array dan dipetakan ke variabel baru

// // 1
// const coba = ['satu', 'dua', 'tiga'];
// const [a,b,c] = coba;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log('---------------');

// // 2
// const mhs = {
//     nama: 'Mentari',
//     usia: 22
// };
// const {nama,usia} = mhs;
// console.log(nama);
// console.log(usia);
// console.log('----------------');


// // Destructuring ARRAY
// const perkenalan = ['Halo', 'nama', 'saya', 'Mentari'];
// const [salam, , ,namaku] = perkenalan; //kalau index tertentu gamau diassign, tinggal di skip
// console.log(namaku);
// console.log('----------------');







// // Swap Items in Destructuring array **********************************************************************
// let x = 1;
// let y = 2;
// console.log(`${x} dan ${y}`);
// [x,y] = [y,x];
// console.log(`${x} dan ${y}`);
// console.log('----------------');


// // Return Value langsung di assign
// function namain() {
//     return [1,2];
// }
// const [d,e] = namain();
// console.log(d);
// console.log('----------------');


// // Rest parameter untuk data array yang beragam (isi array lebih banyak dari destructuring variablesnya)
// const [z, ...values] = [1,2,3,4,5];
// console.log(values); //tampil array yg valuenya 2,3,4,5 (selain z)








// Destructuring OBJECT **************************************************************************************
// // 1. Destructuring dengan deklarasi object
// const mhs = {
//     nama: 'Mentari',
//     usia: 22
// };
// const {nama,usia} = mhs; //variabel harus sama dengan properti di function mhs
// console.log(nama);


// // 2. Destructuring object
// const {nama,usia} = {
//     nama: 'Mentari',
//     usia: 22
// };
// console.log(nama);


// // 3. Assignment tanpa deklarasi object
// ({nama,usia} = { nama: 'Mentari',  usia: 22 });
// console.log(nama);


// // 4. Assign ke variabel baru
// const mhs = {
//     nama: 'Mentari',
//     usia: 22
// };
// const { nama: n, usia: u } = mhs;
// console.log(u);


// // 5. Memberikan default value
// const mhs = {
//     nama: 'Mentari',
//     usia: 22
// };
// const { nama, usia, email = 'email@default.com' } = mhs; //cek jika tidak ada parameter properti email, maka diberi value default
// console.log(email);


// // 6. Assign ke variabel baru + Memberi nilai default
// const mhs = {
//     nama: 'Mentari',
//     usia: 22
// };
// const { nama: n, usia: u, email: e = 'email@default.com' } = mhs; 
// console.log(n);


// // 7. Rest parameter
// const mhs = {
//     nama: 'Mentari',
//     usia: 22
// };
// const { nama, ...value } = mhs; 
// console.log(mhs);


// 8. Ambil data hasil API
// Mengambil field pada object, setelah dikirim sebagai parameter untuk function
const mhs = {
    id: 123,
    nama: 'Mentari',
    usia: 22
};

function getIdMhs({id}) { //ambil parameter id
    return id;
}

console.log(getIdMhs(mhs)); //object mhs dikirim sebagai parameter untuk fungsi getIdMhs