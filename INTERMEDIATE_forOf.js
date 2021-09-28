//for .. of
// Membuat looping dari iterable object:
// 1. String
// 2. Array
// 3. Arguments/NodeList (query pada variabel)
// 4. TypedArray
// 5. Map
// 6. Set
// 7. User-defined Iterables


// SOAL
// Cetak nama dari array di bawah menggunakan perulangan!
const mhs = ['Mentari', 'Enggar', 'Rizki'];


// 1. For biasa
for (let index = 0; index < mhs.length; index++) {
    console.log(mhs[index]);
}

// 2. For each
mhs.forEach(element => {
   console.log(element); 
});

// 3. For of
for (const iterator of mhs) {
    console.log(iterator);
}
