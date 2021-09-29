//for .. of
// Membuat looping dari iterable object:
// 1. String
// 2. Array
// 3. Arguments/NodeList (query pada variabel)
// 4. TypedArray
// 5. Map
// 6. Set
// 7. User-defined Iterables


// SOAL 1 ----------------------------------------------------------
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
//  ----------------------------------------------------------------


// SOAL 2 ----------------------------------------------------------
// Cetak tiap karakter dari string
const nama = 'Mentari';
for (const iterator of nama) {
    console.log(iterator);
}
//  ----------------------------------------------------------------


// SOAL 3 ----------------------------------------------------------
// Cetak nama mahasiswa + indexnya dengan for .. of
for (const [iterator, object] of mhs.entries()) {
    console.log(`${object} adalah mahasiswa ke-${iterator+1}`);
}
//  ----------------------------------------------------------------


// SOAL 4 ----------------------------------------------------------
// Ambil nilai object dari HTML menggunakan NodeList (pakai code di index)
const li_nama = document.querySelectorAll('.nama');
for (const iterator of li_nama) {
    console.log(iterator.innerHTML);
}
//  ----------------------------------------------------------------


// SOAL 4 ----------------------------------------------------------
// Jumlahkan angka yang dikirimkan ke function
function jumlahkanAngka() {
    let jumlah = 0;
    for (iterator of arguments) {
        jumlah += iterator;
    }
    return jumlah
}
console.log(jumlahkanAngka(1,2,3,4,5));
//  ----------------------------------------------------------------