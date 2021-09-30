// Spread Operator
// "Notasi 3 titik"
// Merupakan operator yang memecah/unpack iterables* jd single element


// SOAL 1 --------------------------------------------------------------
// Pecah array berikut/tiap-tiap elemen
const mhs = [
    nama= 'Mentari ER',
    umur= 22,
    email= 'mentari@gmail.com',
    nilai= [
        tugas= 50,
        uts= 79,
        uas= 90
    ]
]

console.log(mhs); //isinya masih array
console.log(...mhs); //tiap elemen sudah dipecah
console.log(...mhs[0]); //masing-masing jadi huruf terpisah
// ---------------------------------------------------------------------




// SOAL 2 --------------------------------------------------------------
// Gabungkan dua array
const allMhs = ['Hawali', 'Rizki', 'Fadhlan'];
const allDosen = ['Anif', 'Airlangga', 'Hendra'];
const orang = [...allMhs, ...allDosen];
const orangArray = [allMhs,allDosen];
const orangConcat = allMhs.concat(allDosen);

console.log(orang); //yang tampil adalah nama-nama orangnya
console.log(orangArray); //yang tampil adalah array dalam array
console.log(orangConcat); // hasil sama kayak spread

// KENAPA GA CONCAT AJA?
// karena kalau concat aja, kita gabisa insert nilai ke array sambil gabungin arraynya sendiri
const orangAdd = [...allMhs, 'Ai', ...allDosen];
console.log(orangAdd);
// ---------------------------------------------------------------------





// SOAL 3 --------------------------------------------------------------
// Ambil nama dari index.html lalu simpan dalam array
const li_mahasiswa = document.querySelectorAll('li');
const li_mahasiswa1 = [...li_mahasiswa].map(m => m.textContent); //nodelist kita sprad ke dalam array dulu
console.log(li_mahasiswa1);
// ---------------------------------------------------------------------